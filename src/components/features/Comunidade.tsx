import { useState, useRef, useEffect } from 'react';
import { Hash, Search, Bell, Users, Settings, Plus, Smile, HelpCircle, Menu, X, Edit, Trash, Reply } from 'lucide-react';
import { Avatar, Button, Badge } from '@/components/ui';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import { Message } from '@/types';

const MESSAGES_PER_PAGE = 50;

export function Comunidade() {
  const { user, profile, isAdmin } = useAuth();
  const [members, setMembers] = useState<Array<{ user_id: string; full_name: string | null; role: 'admin' | 'aluno'; avatar_url: string | null; last_seen_at: string | null }>>([]);
  const [authorsMap, setAuthorsMap] = useState<Record<string, { name: string; role: 'admin' | 'aluno'; avatar?: string | null }>>({});
  const [dbChannelId, setDbChannelId] = useState<string | null>(null);
  const [lastReadMessageId, setLastReadMessageId] = useState<string | null>(null);
  const [lastReadAt, setLastReadAt] = useState<string | null>(null);
  const [attachmentsMap, setAttachmentsMap] = useState<Record<string, Array<{ type: 'image' | 'audio' | 'file'; url: string }>>>({});
  const [categories, setCategories] = useState<Array<{ id: string; name: string; order: number; channels: Array<{ id: string; name: string }> }>>([]);
  const [activeChannelName, setActiveChannelName] = useState<string>('chat-geral');
  const [messageInput, setMessageInput] = useState('');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showMembersSidebar, setShowMembersSidebar] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [page, setPage] = useState<number>(1);
  void page;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [unreadCounts, setUnreadCounts] = useState<Record<string, number>>({});
  const [notifCount, setNotifCount] = useState<number>(0);
  const [showDmModal, setShowDmModal] = useState<boolean>(false);
  const [dmSearch, setDmSearch] = useState<string>('');

  useEffect(() => {
    async function loadCats() {
      const { data: cats } = await supabase
        .from('community_categories')
        .select('id,name,order')
        .order('order', { ascending: true });
      const { data: chans } = await supabase
        .from('community_channels')
        .select('id,name,category_id')
        .order('name', { ascending: true });
      const map: Record<string, Array<{ id: string; name: string }>> = {};
      (chans ?? []).forEach(c => { (map[c.category_id] ||= []).push({ id: c.id, name: c.name }); });
      const catsArr = (cats ?? []) as Array<{ id: string; name: string; order: number | null }>;
      const arr = catsArr.map(c => ({ id: c.id, name: c.name, order: c.order ?? 0, channels: map[c.id] ?? [] }));
      setCategories(arr);
      if (!activeChannelName && arr.length && arr[0].channels.length) setActiveChannelName(arr[0].channels[0].name);
    }
    loadCats();
  }, [activeChannelName]);

  

  const createCategory = async () => {
    if (!isAdmin) return;
    const name = window.prompt('Nome do segmento');
    if (!name) return;
    const nextOrder = (categories[categories.length - 1]?.order ?? 0) + 1;
    const { data, error } = await supabase
      .from('community_categories')
      .insert({ name, order: nextOrder })
      .select('id,name,order')
      .maybeSingle();
    if (error || !data) return;
    setCategories(prev => [...prev, { id: data.id, name: data.name, order: data.order ?? nextOrder, channels: [] }]);
  };

  const renameCategory = async (catId: string, current: string) => {
    if (!isAdmin) return;
    const name = window.prompt('Novo nome do segmento', current);
    if (!name || name === current) return;
    const { error } = await supabase.from('community_categories').update({ name }).eq('id', catId);
    if (error) return;
    setCategories(prev => prev.map(c => c.id === catId ? { ...c, name } : c));
  };

  const deleteCategory = async (catId: string) => {
    if (!isAdmin) return;
    const ok = window.confirm('Apagar segmento e todos os canais/mensagens relacionados?');
    if (!ok) return;
    const { error } = await supabase.from('community_categories').delete().eq('id', catId);
    if (error) return;
    setCategories(prev => prev.filter(c => c.id !== catId));
  };

  const createChannel = async (catId: string) => {
    if (!isAdmin) return;
    const name = window.prompt('Nome do canal');
    if (!name) return;
    const { data, error } = await supabase
      .from('community_channels')
      .insert({ name, category_id: catId, type: 'text', is_private: false })
      .select('id,name,category_id')
      .maybeSingle();
    if (error || !data) return;
    setCategories(prev => prev.map(c => c.id === catId ? { ...c, channels: [...c.channels, { id: data.id, name: data.name }] } : c));
  };

  const renameChannel = async (chanId: string, catId: string, current: string) => {
    if (!isAdmin) return;
    const name = window.prompt('Novo nome do canal', current);
    if (!name || name === current) return;
    const { error } = await supabase.from('community_channels').update({ name }).eq('id', chanId);
    if (error) return;
    setCategories(prev => prev.map(c => c.id === catId ? { ...c, channels: c.channels.map(ch => ch.id === chanId ? { ...ch, name } : ch) } : c));
    if (activeChannelName === current) setActiveChannelName(name);
  };

  const deleteChannel = async (chanId: string, catId: string) => {
    if (!isAdmin) return;
    const ok = window.confirm('Apagar canal e todas as mensagens relacionadas?');
    if (!ok) return;
    const { error } = await supabase.from('community_channels').delete().eq('id', chanId);
    if (error) return;
    setCategories(prev => prev.map(c => c.id === catId ? { ...c, channels: c.channels.filter(ch => ch.id !== chanId) } : c));
    if (activeChannel?.name === activeChannelName) setActiveChannelName('chat-geral');
  };

  const activeChannel = categories
    .flatMap(cat => cat.channels)
    .find(c => c.name === activeChannelName);

  // Resolver canal no Supabase por nome (se existir) e carregar última leitura
  useEffect(() => {
    const bootstrapChannel = async () => {
      try {
        const name = activeChannel?.name;
        if (!name) return;
        const { data: chan } = await supabase
          .from('community_channels')
          .select('id, name')
          .eq('name', name)
          .maybeSingle();
        const chanId = chan?.id ?? null;
        setDbChannelId(chanId);

        if (chanId && user?.id) {
          const { data: read } = await supabase
            .from('message_reads')
            .select('last_read_message_id,last_read_at')
            .eq('user_id', user.id)
            .eq('channel_id', chanId)
            .maybeSingle();
          setLastReadMessageId(read?.last_read_message_id ?? null);
          setLastReadAt(read?.last_read_at ?? null);
        }

        // Carregar mensagens iniciais
        if (chanId) {
          const { data: msgs } = await supabase
            .from('messages')
            .select('id, content, author_id, channel_id, created_at')
            .eq('channel_id', chanId)
            .order('created_at', { ascending: false })
            .order('id', { ascending: false })
            .limit(MESSAGES_PER_PAGE);
          const descending = msgs ?? [];
          const ascending = [...descending].reverse().map(m => ({
            id: m.id,
            content: m.content,
            authorId: m.author_id,
            channelId: m.channel_id,
            createdAt: m.created_at,
          }));
          if (ascending.length) {
            setVisibleMessages(ascending);
            setPage(1);
            setTimeout(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'auto' }); }, 100);
            return;
          }
        }

        setVisibleMessages([]);
        setPage(1);
        setTimeout(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'auto' }); }, 100);
      } catch (_e) {
        setVisibleMessages([]);
        setPage(1);
        setTimeout(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'auto' }); }, 100);
      }
    };
    bootstrapChannel();
  }, [activeChannelName, user?.id, activeChannel?.name]);

  // Infinite scroll para cima
  const handleScroll = () => {
    if (messagesContainerRef.current?.scrollTop === 0) {
      void visibleMessages.length;
      const loadOlder = async () => {
        try {
          if (dbChannelId && visibleMessages.length) {
            const oldest = visibleMessages[0];
            const { data: olderDesc } = await supabase
              .from('messages')
              .select('id, content, author_id, channel_id, created_at')
              .eq('channel_id', dbChannelId)
              .lt('created_at', oldest.createdAt)
              .order('created_at', { ascending: false })
              .order('id', { ascending: false })
              .limit(MESSAGES_PER_PAGE);
            const olderAsc = (olderDesc ?? []).reverse().map(m => ({
              id: m.id,
              content: m.content,
              authorId: m.author_id,
              channelId: m.channel_id,
              createdAt: m.created_at,
            }));
            if (olderAsc.length) {
              setVisibleMessages([...olderAsc, ...visibleMessages]);
              await loadAttachmentsFor(olderAsc);
              return;
            }
          }
          void 0;
        } catch (_e) {
          void 0;
        }
      };
      loadOlder();
    }
  };

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    if (!dbChannelId || !user?.id) return;
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert({ channel_id: dbChannelId, author_id: user.id, content: messageInput, reply_to_id: replyToId })
        .select('id, content, author_id, channel_id, created_at')
        .maybeSingle();
      if (error) throw error;
      if (data) {
        const msg: Message = {
          id: data.id,
          content: data.content,
          authorId: data.author_id,
          channelId: data.channel_id,
          createdAt: data.created_at,
        };
        setVisibleMessages(prev => [...prev, msg]);
        setMessageInput('');
        setReplyToId(null);
        await supabase
          .from('message_reads')
          .upsert({ user_id: user.id, channel_id: dbChannelId, last_read_message_id: data.id, last_read_at: new Date().toISOString() }, { onConflict: 'user_id,channel_id' });
        setLastReadMessageId(data.id);
        setLastReadAt(new Date().toISOString());
        await ensureAuthor(user.id);
      }
    } catch (_e) { void 0; }
  };

  // Atualizar última leitura ao entrar no canal com dados do Supabase
  useEffect(() => {
    async function updateRead() {
      try {
        if (dbChannelId && user?.id && visibleMessages.length) {
          const last = visibleMessages[visibleMessages.length - 1];
          await supabase
            .from('message_reads')
            .upsert({ user_id: user.id, channel_id: dbChannelId, last_read_message_id: last.id, last_read_at: new Date().toISOString() }, { onConflict: 'user_id,channel_id' });
          setLastReadMessageId(lastReadMessageId ?? last.id);
          setLastReadAt(new Date().toISOString());
          await loadAttachmentsFor(visibleMessages);
          if (activeChannel?.name) setUnreadCounts(prev => ({ ...prev, [activeChannel.id!]: 0 }));
        }
      } catch (_e) {
        // silencioso; fallback permanece
      }
    }
    updateRead();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbChannelId, user?.id, visibleMessages.length]);

  // Carregar membros da comunidade a partir de profiles
  useEffect(() => {
    async function loadMembers() {
      try {
        const { data } = await supabase
          .from('profiles')
          .select('user_id, role, is_active, full_name, avatar_url, last_seen_at');
        const arr = (data ?? []) as Array<{ user_id: string; role: 'admin' | 'aluno'; is_active: boolean; full_name: string | null; avatar_url: string | null; last_seen_at: string | null }>;
        setMembers(arr.map(p => ({ user_id: p.user_id, role: p.role, full_name: p.full_name, avatar_url: p.avatar_url, last_seen_at: p.last_seen_at })));
        const map: Record<string, { name: string; role: 'admin' | 'aluno'; avatar?: string | null }> = {};
        arr.forEach(p => { map[p.user_id] = { name: p.full_name ?? 'Usuário', role: p.role, avatar: p.avatar_url ?? null }; });
        setAuthorsMap(map);
      } catch (_e) { void 0; }
    }
    loadMembers();
  }, []);

  // Contagens via RPC
  useEffect(() => {
    let cancelled = false;
    async function computeUnreadRpc() {
      if (!user?.id || !categories.length) return;
      const { data } = await supabase.rpc('get_unread_counts', { uid: user.id });
      if (cancelled) return;
      const map: Record<string, number> = {};
      ((data ?? []) as Array<{ channel_id: string; unread_count: number }>).forEach(row => { map[row.channel_id] = row.unread_count; });
      setUnreadCounts(map);
      const display = (profile?.full_name ?? user?.name ?? '').trim();
      const { data: notif } = await supabase.rpc('get_notifications', { uid: user.id, display_name: display });
      if (cancelled) return;
      const dm = (notif?.[0]?.dm_unread ?? 0) as number;
      const mentions = (notif?.[0]?.mentions_unread ?? 0) as number;
      setNotifCount(dm + mentions);
    }
    computeUnreadRpc();
    return () => { cancelled = true; };
  }, [categories, user?.id, user?.name, profile?.full_name]);

  const ensureAuthor = async (authorId: string) => {
    if (authorsMap[authorId]) return;
    try {
      const { data } = await supabase
        .from('profiles')
        .select('user_id, role, full_name, avatar_url')
        .eq('user_id', authorId)
        .maybeSingle();
      if (data) {
        setAuthorsMap(prev => ({ ...prev, [authorId]: { name: data.full_name ?? 'Usuário', role: data.role as 'admin' | 'aluno', avatar: data.avatar_url ?? null } }));
      }
    } catch (_e) { void 0; }
  };

  const loadAttachmentsFor = async (msgs: Message[]) => {
    try {
      if (!msgs.length) return;
      const ids = msgs.map(m => m.id);
      const { data } = await supabase
        .from('message_attachments')
        .select('message_id, type, url')
        .in('message_id', ids);
      const grouped: Record<string, Array<{ type: 'image' | 'audio' | 'file'; url: string }>> = {};
      for (const att of (data ?? [])) {
        const pub = supabase.storage.from('community').getPublicUrl(att.url);
        const finalUrl = (pub.data.publicUrl ?? att.url) as string;
        if (!grouped[att.message_id]) grouped[att.message_id] = [];
        grouped[att.message_id].push({ type: att.type as 'image' | 'audio' | 'file', url: finalUrl });
      }
      setAttachmentsMap(prev => ({ ...prev, ...grouped }));
    } catch (_e) { void 0; }
  };

  const computeStatus = (lastSeenAt: string | null) => {
    if (!lastSeenAt) return 'offline';
    const diff = Date.now() - new Date(lastSeenAt).getTime();
    if (diff <= 5 * 60 * 1000) return 'online';
    if (diff <= 30 * 60 * 1000) return 'idle';
    return 'offline';
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white dark:bg-[#000000] text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Sidebar de Canais */}
      <div className={`
        fixed lg:relative z-50 w-72 bg-gray-100 dark:bg-[#0a0a0a] flex flex-col h-full transition-transform duration-300 border-r border-gray-200 dark:border-[#1f2023]
        ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Server Header */}
        <div className="h-12 px-4 flex items-center justify-between shadow-sm border-b border-gray-200 dark:border-[#1f2023] hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer transition-colors">
          <h1 className="font-bold truncate text-gray-900 dark:text-white">Vibe Coding Community</h1>
          <X className="lg:hidden h-5 w-5 text-gray-500 dark:text-gray-400" onClick={() => setShowMobileSidebar(false)} />
        </div>

        {/* Channels List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-6 custom-scrollbar">
          {categories.map(category => (
            <div key={category.id}>
              <div className="px-4 mb-1 flex items-center justify-between group">
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 uppercase tracking-wide cursor-pointer">
                  {category.name}
                </h2>
                {isAdmin && (
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100">
                    <button onClick={() => createCategory()}><Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                    <button onClick={() => renameCategory(category.id, category.name)}><Edit className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                    <button onClick={() => deleteCategory(category.id)}><Trash className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                  </div>
                )}
              </div>
              <div className="space-y-[2px] px-2">
                {category.channels.map(channel => (
                  <div className="flex items-center" key={channel.id}>
                    <button
                    onClick={() => {
                      setActiveChannelName(channel.name);
                      setShowMobileSidebar(false);
                    }}
                    className={`
                      w-full flex items-center px-2 py-[6px] rounded group transition-colors
                      ${activeChannelName === channel.name
                        ? 'bg-gray-200 dark:bg-[#1a1a1c] text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1a1a1c] hover:text-gray-900 dark:hover:text-gray-200'}
                    `}
                  >
                    <Hash className="h-5 w-5 mr-1.5 text-gray-500 dark:text-gray-500" />
                    <span className="truncate font-medium">{channel.name}</span>
                    </button>
                    {(unreadCounts[channel.id] ?? 0) > 0 && (
                      <Badge className="ml-2 bg-red-500 hover:bg-red-600 text-white h-5 px-1.5">
                        {unreadCounts[channel.id]}
                      </Badge>
                    )}
                    {isAdmin && (
                      <div className="ml-2 flex items-center gap-2 opacity-0 group-hover:opacity-100">
                        <button onClick={() => createChannel(category.id)}><Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                        <button onClick={() => renameChannel(channel.id, category.id, channel.name)}><Edit className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                        <button onClick={() => deleteChannel(channel.id, category.id)}><Trash className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Bar */}
        <div className="h-[52px] bg-gray-100 dark:bg-[#0a0a0a] px-2 flex items-center justify-between border-t border-gray-200 dark:border-[#1f2023]">
          <div className="flex items-center hover:bg-gray-200 dark:hover:bg-[#1a1a1c] p-1 rounded cursor-pointer">
            <div className="relative">
              <Avatar
                src={(profile?.avatar_url ?? undefined) as unknown as string}
                alt={(profile?.full_name ?? user?.name ?? 'Usuário') as string}
                className="h-8 w-8"
              />
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-gray-100 dark:border-[#0a0a0a]" />
            </div>
            <div className="ml-2 text-sm">
              <div className="font-semibold text-gray-900 dark:text-white text-xs">{profile?.full_name ?? user?.name ?? 'Usuário'}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">#{(user?.id ?? '').slice(-4) || '0000'}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-[#1a1a1c] border-none">
              <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>
        {replyToId && (
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span>Respondendo a uma mensagem</span>
            <button className="underline" onClick={() => setReplyToId(null)}>cancelar</button>
          </div>
        )}
      </div>
      {/* DM Modal */}
      {showDmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={() => setShowDmModal(false)}>
          <div className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-xl w-[520px] max-w-[90%] p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mensagem privada</h3>
              <button onClick={() => setShowDmModal(false)}><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <input
              type="text"
              value={dmSearch}
              onChange={e => setDmSearch(e.target.value)}
              placeholder="Buscar usuário"
              className="w-full bg-gray-100 dark:bg-[#1a1a1c] rounded px-2 py-1 mb-3 text-sm"
            />
            <div className="max-h-64 overflow-y-auto space-y-1">
              {members
                .filter(m => (m.full_name ?? '').toLowerCase().includes(dmSearch.toLowerCase()) && m.user_id !== user?.id)
                .map(m => (
                <button key={m.user_id} className="w-full flex items-center justify-between px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-[#1a1a1c]" onClick={async () => {
                  try {
                    const ids = [user!.id, m.user_id].sort();
                    const dmName = `dm-${ids[0].slice(0,8)}-${ids[1].slice(0,8)}`;
                    const { data: chan } = await supabase
                      .from('community_channels')
                      .select('id,name')
                      .eq('name', dmName)
                      .maybeSingle();
                    let channelId = chan?.id ?? null;
                    if (!channelId) {
                      const { data: created } = await supabase
                        .from('community_channels')
                        .insert({ name: dmName, category_id: (categories[0]?.id ?? null), type: 'text', is_private: true })
                        .select('id')
                        .maybeSingle();
                      channelId = created?.id ?? null;
                      if (channelId) {
                        await supabase.from('channel_members').insert([{ channel_id: channelId, user_id: user!.id }, { channel_id: channelId, user_id: m.user_id }]);
                      }
                    }
                    if (channelId) {
                      setActiveChannelName(dmName);
                      setShowDmModal(false);
                    }
                  } catch (_e) { void 0; }
                }}>
                  <div className="flex items-center gap-2">
                    <Avatar src={(m.avatar_url ?? undefined) as unknown as string} alt={(m.full_name ?? 'Usuário') as string} className="h-7 w-7" />
                    <span className="text-sm text-gray-900 dark:text-gray-200">{m.full_name ?? 'Usuário'}</span>
                  </div>
                  <Badge className="bg-[#5865f2] text-[10px] h-4 px-1">{m.role.toUpperCase()}</Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Área Principal */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#000000]">
        {/* Channel Header */}
        <div className="h-12 px-4 flex items-center justify-between shadow-sm border-b border-gray-200 dark:border-[#1f2023]">
          <div className="flex items-center min-w-0">
            <Menu className="lg:hidden h-6 w-6 mr-4 text-gray-500 dark:text-gray-400" onClick={() => setShowMobileSidebar(true)} />
            <Hash className="h-6 w-6 text-gray-500 dark:text-gray-500 mr-2 flex-shrink-0" />
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 dark:text-white truncate">{activeChannel?.name}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate hidden sm:block">
                Tópico do canal: Discussões sobre {activeChannel?.name.replace(/-/g, ' ')}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <Bell className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" />
            <Users
              className={`h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer ${showMembersSidebar ? 'text-gray-900 dark:text-white' : ''}`}
              onClick={() => setShowMembersSidebar(!showMembersSidebar)}
            />
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="bg-gray-100 dark:bg-[#1a1a1c] text-sm rounded px-2 py-1 w-36 transition-all focus:w-60 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 outline-none border border-transparent focus:border-gray-300 dark:focus:border-gray-700"
              />
              <Search className="h-4 w-4 absolute right-2 top-1.5 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="relative">
              <Bell className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" onClick={() => setShowDmModal(true)} />
              {notifCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-[1px]">
                  {notifCount}
                </span>
              )}
            </div>
            <HelpCircle className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" />
          </div>
        </div>

        {/* Messages Area */}
        <div
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto custom-scrollbar flex flex-col px-4 pt-4"
        >
          {!visibleMessages.length ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-16 w-16 bg-gray-200 dark:bg-[#1a1a1c] rounded-full flex items-center justify-center">
                <Hash className="h-10 w-10 text-gray-500 dark:text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bem-vindo ao #{activeChannel?.name}!</h2>
                <p className="text-gray-500 dark:text-gray-400">Este é o começo do canal {activeChannel?.name}.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-0 pb-4">
              {visibleMessages.map((msg, index) => {
                const author = authorsMap[msg.authorId];
                const isSequence = index > 0 && visibleMessages[index - 1].authorId === msg.authorId;
                const prevMsg = index > 0 ? visibleMessages[index - 1] : undefined;
                const showUnreadDivider = lastReadAt
                  ? ((prevMsg ? new Date(prevMsg.createdAt).getTime() <= new Date(lastReadAt).getTime() : true) &&
                     new Date(msg.createdAt).getTime() > new Date(lastReadAt).getTime() && msg.authorId !== user?.id)
                  : false;
                void ensureAuthor(msg.authorId);

                return (
                  <div key={msg.id}>
                    {showUnreadDivider && (
                      <div className="flex items-center my-4">
                        <div className="flex-1 h-[1px] bg-red-500/40"></div>
                        <span className="px-2 text-xs font-bold text-red-500 uppercase">Novas Mensagens</span>
                        <div className="flex-1 h-[1px] bg-red-500/40"></div>
                      </div>
                    )}
                    <div className={`group flex ${isSequence ? 'mt-[2px]' : 'mt-[17px]'} hover:bg-gray-50 dark:hover:bg-[#2e3035] -mx-4 px-4 py-0.5`}>
                      {!isSequence ? (
                        <div className="mt-0.5 mr-4 cursor-pointer hover:opacity-80 w-10">
                          <Avatar src={(author?.avatar ?? undefined) as unknown as string} alt={author?.name} className="h-10 w-10" />
                        </div>
                      ) : (
                        <div className="w-10 mr-4 text-[10px] text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 text-right self-center select-none">
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        {!isSequence && (
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900 dark:text-white hover:underline cursor-pointer">
                              {author?.name}
                            </span>
                            {author?.role === 'admin' && (
                              <Badge className="bg-[#5865f2] hover:bg-[#5865f2] text-[10px] h-4 px-1">ADMIN</Badge>
                            )}
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                              {formatDate(msg.createdAt)}
                            </span>
                          </div>
                        )}
                        {editingId === msg.id ? (
                          <div className="mt-2 space-y-2">
                            <textarea className="w-full bg-gray-100 dark:bg-[#1a1a1c] rounded p-2 text-sm" value={editText} onChange={e => setEditText(e.target.value)} />
                            <div className="flex items-center gap-2">
                              <Button className="btn-neon" onClick={async () => {
                                try {
                                  const { error } = await supabase
                                    .from('messages')
                                    .update({ content: editText, edited_at: new Date().toISOString() })
                                    .eq('id', msg.id);
                                  if (error) throw error;
                                  setVisibleMessages(prev => prev.map(m => m.id === msg.id ? { ...m, content: editText } : m));
                                  setEditingId(null);
                                  setEditText('');
                                } catch (_e) { void 0; }
                              }}>Salvar</Button>
                              <Button className="btn-outline" onClick={() => { setEditingId(null); setEditText(''); }}>Cancelar</Button>
                            </div>
                          </div>
                        ) : (
                          <p className={`text-gray-800 dark:text-gray-300 ${!isSequence ? 'mt-1' : ''} whitespace-pre-wrap leading-relaxed`}>
                            {msg.content}
                          </p>
                        )}

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <button onClick={() => setReplyToId(msg.id)} className="hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1"><Reply className="h-3.5 w-3.5" />Responder</button>
                          {(user?.id === msg.authorId || isAdmin) && (
                            <button onClick={() => { setEditingId(msg.id); setEditText(msg.content); }} className="hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1"><Edit className="h-3.5 w-3.5" />Editar</button>
                          )}
                          {isAdmin && (
                            <button onClick={async () => {
                              try {
                                await supabase.from('messages').delete().eq('id', msg.id);
                                setVisibleMessages(prev => prev.filter(m => m.id !== msg.id));
                              } catch (_e) { void 0; }
                            }} className="hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1"><Trash className="h-3.5 w-3.5" />Apagar</button>
                          )}
                        </div>
                        
                        {msg.reactions && (
                          <div className="flex items-center gap-1 mt-1">
                            {Object.entries(msg.reactions).map(([emoji, count]) => (
                              <div key={emoji} className="flex items-center bg-gray-100 dark:bg-[#2b2d31] hover:bg-gray-200 dark:hover:bg-[#37393f] border border-transparent hover:border-gray-300 dark:hover:border-gray-600 rounded-[4px] px-1.5 py-0.5 cursor-pointer transition-colors">
                                <span className="w-4 h-4 mr-1.5">{emoji}</span>
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{count}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {attachmentsMap[msg.id] && (
                          <div className="mt-2 space-y-2">
                            {attachmentsMap[msg.id].map((a, i) => (
                              <div key={`${msg.id}-att-${i}`} className="rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {a.type === 'image' ? (
                                  <img src={a.url} alt="Anexo" className="max-w-full h-auto" />
                                ) : a.type === 'audio' ? (
                                  <audio controls src={a.url} className="w-full" />
                                ) : (
                                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-primary-600 dark:text-primary-400">Baixar arquivo ↗</a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="px-4 pb-6 pt-2">
          <div className="bg-gray-100 dark:bg-[#1a1a1c] rounded-lg px-4 py-2.5 flex items-center space-x-4 border border-gray-200 dark:border-transparent">
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              <Plus className="h-6 w-6 bg-gray-300 dark:bg-gray-400 text-gray-100 dark:text-[#383a40] rounded-full p-1 hover:bg-gray-400 dark:hover:bg-gray-200" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={`Conversar em #${activeChannel?.name}`}
              className="bg-transparent border-none focus:ring-0 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 flex-1 h-full py-1"
            />
            <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <GiftIcon className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" />
              <div className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer flex items-center justify-center">
                <span className="text-xs font-bold border border-current rounded px-0.5">GIF</span>
              </div>
              <Smile className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Members Sidebar */}
      {showMembersSidebar && (
        <div className="w-60 bg-gray-100 dark:bg-[#0a0a0a] hidden lg:flex flex-col border-l border-gray-200 dark:border-[#1f2023]">
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
            {(() => {
              const renderRoleSection = (title: string, users: typeof members) => {
                const online = users.filter(u => computeStatus(u.last_seen_at) !== 'offline');
                const offline = users.filter(u => computeStatus(u.last_seen_at) === 'offline');
                return (
                  <div className="mb-6" key={title}>
                    <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2 px-2">{title}</h3>
                    {!!online.length && (
                      <div className="mb-2">
                        <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Disponível — {online.length}</div>
                        <div className="space-y-1 mt-1">
                          {online.map(user => (
                            <div key={`${user.user_id}-on`} className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer group opacity-90 hover:opacity-100">
                              <div className="relative mr-3">
                                <Avatar src={(user.avatar_url ?? undefined) as unknown as string} alt={(user.full_name ?? 'Usuário') as string} className="h-8 w-8" />
                                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-gray-100 dark:border-[#0a0a0a] bg-green-500" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center">
                                  <span className="font-medium truncate text-gray-900 dark:text-gray-200">{user.full_name ?? 'Usuário'}</span>
                    {user.role === 'admin' && (
                      <Badge className="ml-1.5 bg-[#5865f2] text-[10px] h-3.5 px-1">ADMIN</Badge>
                    )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!online.length && (
                      <div className="mb-2">
                        <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Disponível — 0</div>
                      </div>
                    )}
                    {!!offline.length && (
                      <div>
                        <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Offline — {offline.length}</div>
                        <div className="space-y-1 mt-1">
                          {offline.map(user => (
                            <div key={`${user.user_id}-off`} className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer group opacity-90 hover:opacity-100">
                              <div className="relative mr-3">
                                <Avatar src={(user.avatar_url ?? undefined) as unknown as string} alt={(user.full_name ?? 'Usuário') as string} className="h-8 w-8" />
                                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-gray-100 dark:border-[#0a0a0a] bg-gray-500" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center">
                                  <span className="font-medium truncate text-gray-500 dark:text-gray-400">{user.full_name ?? 'Usuário'}</span>
                                  {user.role === 'admin' && (
                                    <Badge className="ml-1.5 bg-[#5865f2] text-[10px] h-3.5 px-1">ADMIN</Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!offline.length && (
                      <div>
                        <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Offline — 0</div>
                      </div>
                    )}
                  </div>
                );
              };
              const admins = members.filter(u => u.role === 'admin');
              const alunos = members.filter(u => u.role === 'aluno');
              return (
                <>
                  {renderRoleSection('Administradores', admins)}
                  {renderRoleSection('Alunos', alunos)}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

// Ícone de Presente (Gift) customizado pois não está no lucide-react padrão
function GiftIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
