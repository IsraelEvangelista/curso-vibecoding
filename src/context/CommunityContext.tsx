import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { Message, ChannelCategory } from '@/types';

type CommunityContextType = {
  categories: ChannelCategory[];
  activeChannelId: string | null;
  setActiveChannelId: (id: string) => void;
  messages: Message[];
  unreadCounts: Record<string, number>;
  notificationCount: number;
  sendMessage: (content: string, replyToId?: string | null, attachments?: File[]) => Promise<void>;
  editMessage: (messageId: string, content: string) => Promise<void>;
  deleteMessage: (messageId: string) => Promise<void>;
  startDM: (targetUserId: string) => Promise<void>;
  isAdmin: boolean;
  refreshCategories: () => Promise<void>;
  members: Array<{ user_id: string; full_name: string | null; role: 'admin' | 'aluno'; avatar_url: string | null; last_seen_at: string | null }>;
};

const CommunityContext = createContext<CommunityContextType | null>(null);

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, profile } = useAuth();
  const [categories, setCategories] = useState<ChannelCategory[]>([]);
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [unreadCounts, setUnreadCounts] = useState<Record<string, number>>({});
  const [notificationCount, setNotificationCount] = useState(0);
  const [members, setMembers] = useState<Array<{ user_id: string; full_name: string | null; role: 'admin' | 'aluno'; avatar_url: string | null; last_seen_at: string | null }>>([]);
  
  // Helper to get channel by ID
  const getChannel = useCallback((channelId: string) => {
    for (const cat of categories) {
      for (const ch of cat.channels) {
        if (ch.id === channelId) return ch;
      }
    }
    return null;
  }, [categories]);

  // Load Members
  const loadMembers = useCallback(async () => {
    const { data } = await supabase
      .from('profiles')
      .select('user_id, role, is_active, full_name, avatar_url, last_seen_at');
    
    if (data) {
      const mappedMembers = data.map(p => ({
          user_id: p.user_id,
          role: p.role as 'admin' | 'aluno',
          full_name: p.full_name,
          avatar_url: p.avatar_url,
          last_seen_at: p.last_seen_at
      }));
      setMembers(mappedMembers);
      return mappedMembers;
    }
    return [];
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  // Load Categories and Channels
  const refreshCategories = useCallback(async () => {
    if (!user) return;
    
    try {
      // Ensure members are loaded
      if (members.length === 0) {
        await loadMembers();
      }

      // Load categories
      const { data: cats } = await supabase
        .from('community_categories')
        .select('id,name,order')
        .order('order', { ascending: true });
        
      // Load channels
      const { data: chans } = await supabase
        .from('community_channels')
        .select('*')
        .order('name', { ascending: true });
        
      if (!cats || !chans) return;

      // Separate DMs and Regular Channels
      const regularChannels: typeof chans = [];
      const dmChannels: typeof chans = [];

      chans.forEach(ch => {
        if (ch.name.startsWith('dm-')) {
            dmChannels.push(ch);
        } else {
            regularChannels.push(ch);
        }
      });

      // Map regular channels to categories
      const map: Record<string, typeof chans> = {};
      regularChannels.forEach(c => {
        if (!map[c.category_id]) map[c.category_id] = [];
        map[c.category_id].push(c);
      });

      const structured: ChannelCategory[] = cats.map(c => ({
        id: c.id,
        name: c.name,
        order: c.order,
        channels: (map[c.id] || []).map(ch => ({
            id: ch.id,
            name: ch.name,
            type: ch.type,
            categoryId: ch.category_id
        }))
      }));

      // Resolve DM names via RPC (Secure & Fast)
      const { data: dms } = await supabase.rpc('get_my_dms');
      
      const resolvedDMs = (dms || []).map((dm: { channel_id: string; channel_name: string; other_user_name: string }) => ({
          id: dm.channel_id,
          name: dm.channel_name,
          type: 'text' as const,
          categoryId: 'dms',
          displayName: dm.other_user_name
      }));

      if (resolvedDMs.length > 0) {
          structured.push({
              id: 'dm-category',
              name: 'Mensagens Privadas',
              order: 9999,
              channels: resolvedDMs
          });
      }
      
      setCategories(structured);
      
      // Default active channel logic
      if (!activeChannelId && structured.length > 0 && structured[0].channels.length > 0) {
        setActiveChannelId(structured[0].channels[0].id);
      }
    } catch (error) {
      console.error('Error loading community data:', error);
    }
  }, [user, activeChannelId, members, loadMembers]);

  useEffect(() => {
    refreshCategories();
  }, [refreshCategories]);

  // Load Initial Unread Counts
  useEffect(() => {
    if (!user) return;
    const fetchCounts = async () => {
       const { data } = await supabase.rpc('get_unread_counts', { uid: user.id });
       if (data) {
         const map: Record<string, number> = {};
         (data as Array<{ channel_id: string; unread_count: number }>).forEach((r) => map[r.channel_id] = r.unread_count);
         setUnreadCounts(map);
       }
       const { data: notif } = await supabase.rpc('get_notifications', { uid: user.id, display_name: user.name || '' });
       if (notif && notif[0]) {
         const notifData = notif[0] as { dm_unread?: number; mentions_unread?: number };
         setNotificationCount((notifData.dm_unread || 0) + (notifData.mentions_unread || 0));
       }
    };
    fetchCounts();
  }, [user]);

  // Load Messages when Active Channel Changes
  useEffect(() => {
    if (!activeChannelId) return;
    
    const loadMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*, message_attachments(*)')
        .eq('channel_id', activeChannelId)
        .order('created_at', { ascending: false })
        .limit(50);
        
      if (data) {
        const mapped = data.map(m => ({
            id: m.id,
            content: m.content,
            authorId: m.author_id,
            channelId: m.channel_id,
            createdAt: m.created_at,
            attachments: m.message_attachments?.map((a: { id: string; type: string; url: string }) => ({
                id: a.id,
                type: a.type,
                url: supabase.storage.from('community').getPublicUrl(a.url).data.publicUrl,
                name: a.url.split('/').pop() || 'arquivo'
            })) || [],
            replyToId: m.reply_to_id
        })).reverse();
        setMessages(mapped);
        
        if (user) {
            const lastMsg = mapped[mapped.length - 1];
            if (lastMsg) {
                await supabase.from('message_reads').upsert({
                    user_id: user.id,
                    channel_id: activeChannelId,
                    last_read_message_id: lastMsg.id,
                    last_read_at: new Date().toISOString()
                }, { onConflict: 'user_id,channel_id' });
                setUnreadCounts(prev => ({ ...prev, [activeChannelId]: 0 }));
            }
        }
      }
    };
    loadMessages();
  }, [activeChannelId, user]);

  // REALTIME SUBSCRIPTION
  useEffect(() => {
    if (!user) return;

    const channel = supabase.channel('community_realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'messages' },
        async (payload) => {
          // Handle INSERT
          if (payload.eventType === 'INSERT') {
              const newMsg = payload.new;
              if (newMsg.channel_id === activeChannelId) {
                // Fetch attachments if any, otherwise push immediately
                const { data: attachments } = await supabase
                    .from('message_attachments')
                    .select('*')
                    .eq('message_id', newMsg.id);

                const mappedMsg: Message = {
                    id: newMsg.id,
                    content: newMsg.content,
                    authorId: newMsg.author_id,
                    channelId: newMsg.channel_id,
                    createdAt: newMsg.created_at,
                    replyToId: newMsg.reply_to_id,
                    attachments: attachments?.map((a: { id: string; type: 'image' | 'video' | 'audio' | 'file'; url: string }) => ({
                        id: a.id,
                        type: a.type,
                        url: supabase.storage.from('community').getPublicUrl(a.url).data.publicUrl,
                        name: a.url.split('/').pop() || 'arquivo'
                    })) || []
                };
                setMessages(prev => [...prev, mappedMsg]);
                
                if (user.id !== newMsg.author_id) {
                     await supabase.from('message_reads').upsert({
                        user_id: user.id,
                        channel_id: activeChannelId,
                        last_read_message_id: newMsg.id,
                        last_read_at: new Date().toISOString()
                    }, { onConflict: 'user_id,channel_id' });
                }
              } else {
                setUnreadCounts(prev => ({
                    ...prev,
                    [newMsg.channel_id]: (prev[newMsg.channel_id] || 0) + 1
                }));
              }

              const isMention = newMsg.content.includes(`@${profile?.full_name || user.name}`);
              const ch = getChannel(newMsg.channel_id);
              const isDM = ch?.name?.startsWith('dm-') || false;
              
              if ((isMention || isDM) && newMsg.author_id !== user.id) {
                  setNotificationCount(prev => prev + 1);
              }
          }
          // Handle DELETE
          else if (payload.eventType === 'DELETE') {
              if (payload.old.channel_id === activeChannelId) {
                  setMessages(prev => prev.filter(m => m.id !== payload.old.id));
              }
          }
          // Handle UPDATE
          else if (payload.eventType === 'UPDATE') {
              if (payload.new.channel_id === activeChannelId) {
                  setMessages(prev => prev.map(m => m.id === payload.new.id ? { ...m, content: payload.new.content } : m));
              }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, activeChannelId, getChannel, profile?.full_name]);

  const handleFileUpload = async (files: File[], messageId: string) => {
      for (const file of files) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random()}.${fileExt}`;
          const filePath = `attachments/${messageId}/${fileName}`;
          
          const { error: uploadError } = await supabase.storage
              .from('community')
              .upload(filePath, file);

          if (!uploadError) {
              const type = file.type.startsWith('image/') ? 'image' : 
                           file.type.startsWith('video/') ? 'video' :
                           file.type.startsWith('audio/') ? 'audio' : 'file';
                           
              await supabase.from('message_attachments').insert({
                  message_id: messageId,
                  type,
                  url: filePath
              });
          }
      }
  };

  const sendMessage = async (content: string, replyToId?: string | null, attachments?: File[]) => {
    if (!activeChannelId || !user || (!content.trim() && (!attachments || attachments.length === 0))) {
        console.warn('sendMessage blocked:', { activeChannelId, user: !!user, content: content.trim() });
        return;
    }
    
    try {
      // Insert message
      const { data: msgData, error } = await supabase.from('messages').insert({
          channel_id: activeChannelId,
          author_id: user.id,
          content: content,
          reply_to_id: replyToId
      }).select().single();

      if (error) {
          console.error('Error sending message:', error);
          alert('Erro ao enviar mensagem: ' + error.message);
          return;
      }

      // Handle Attachments
      if (attachments && attachments.length > 0 && msgData) {
          await handleFileUpload(attachments, msgData.id);
      }

    } catch (err) {
        console.error('Unexpected error in sendMessage:', err);
    }
  };

  const editMessage = async (messageId: string, content: string) => {
      if (!user) return;
      await supabase.from('messages').update({ content }).eq('id', messageId).eq('author_id', user.id);
  };

  const deleteMessage = async (messageId: string) => {
      if (!user) return;
      // Check if admin or author handled by RLS usually, but UI should block too.
      await supabase.from('messages').delete().eq('id', messageId);
  };

  const startDM = async (targetUserId: string) => {
      if (!user) return;
      
      try {
          const { data: channelId, error } = await supabase.rpc('create_dm_channel', { target_user_id: targetUserId });
          
          if (error) throw error;
          
          if (channelId) {
              setActiveChannelId(channelId);
              refreshCategories();
          }
      } catch (err) {
          console.error('Error creating DM:', err);
          alert('Erro ao iniciar conversa. Tente novamente.');
      }
  };

  return (
    <CommunityContext.Provider value={{
        categories,
        activeChannelId,
        setActiveChannelId,
        messages,
        unreadCounts,
        notificationCount,
        sendMessage,
        editMessage,
        deleteMessage,
        startDM,
        isAdmin,
        refreshCategories,
        members
    }}>
      {children}
    </CommunityContext.Provider>
  );
}

export const useCommunity = () => {
    const context = useContext(CommunityContext);
    if (!context) throw new Error('useCommunity must be used within CommunityProvider');
    return context;
};
