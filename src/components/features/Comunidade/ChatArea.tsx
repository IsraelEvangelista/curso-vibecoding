import { useState, useRef, useEffect } from 'react';
import { Hash, Search, Bell, Users, Menu, Plus, Smile, Reply, Edit, Trash, X, File as FileIcon } from 'lucide-react';
import { useCommunity } from '@/context/CommunityContext';
import { useAuth } from '@/context/AuthContext';
import { Avatar } from '@/components/ui';
import { formatDate } from '@/lib/utils';

const EMOJI_CATEGORIES = {
  'Smileys': ['😀','😃','😄','😁','😆','😅','😂','🤣','🥲','🥹','☺️','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🫣','🤭','🫢','🫡','🤫','🫠','🤥','😶','🫥','😐','🫤','😑','🫨','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','😵‍💫','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃'],
  'Gestures': ['👋','🤚','✋','🖖','👌','🤌','🤏','✌️','🤞','🫰','🤟','🤘','🤙','👈','👉','👆','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🫶','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀','👁️','👅','👄','🫦','💋','🩸'],
  'People': ['👶','👧','🧒','👦','👩','🧑','👨','👩‍🦱','🧑‍🦱','👨‍🦱','👩‍🦰','🧑‍🦰','👨‍🦰','👩‍👱‍♀️','🧑‍🦰','👨‍🦰','👱‍♀️','👱','👱‍♂️','👩‍🦳','🧑‍🦳','👨‍🦳','👩‍🦲','🧑‍🦲','👨‍🦲','🧔‍♀️','🧔','🧔‍♂️','👵','🧓','👴','👲','👳‍♀️','👳','👳‍♂️','🧕','👮‍♀️','👮','👮‍♂️','👷‍♀️','👷','👷‍♂️','💂‍♀️','💂','💂‍♂️','🕵️‍♀️','🕵️','🕵️‍♂️','👩‍⚕️','🧑‍⚕️','👨‍⚕️'],
  'Objects': ['👓','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','🩴','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓','🧢','🪖','⛑️','📿','💄','💍','💎'],
  'Symbols': ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳'],
};

export function ChatArea({ onOpenMobile, onToggleMembers, showMembers }: { onOpenMobile: () => void; onToggleMembers: () => void; showMembers: boolean }) {
  const { activeChannelId, categories, messages, sendMessage, editMessage, deleteMessage, notificationCount, members, startDM } = useCommunity();
  const { user, isAdmin } = useAuth();
  const [messageInput, setMessageInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeEmojiCategory, setActiveEmojiCategory] = useState('Smileys');
  const [replyTo, setReplyTo] = useState<{ id: string; author: string; content: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [mentionQuery, setMentionQuery] = useState<string | null>(null);
  const [mentionIndex, setMentionIndex] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeChannel = categories.flatMap(c => c.channels).find(c => c.id === activeChannelId);

  const handleSend = async () => {
    if ((!messageInput.trim() && files.length === 0) || !activeChannelId) return;
    
    if (editingId) {
        await editMessage(editingId, messageInput);
        setEditingId(null);
    } else {
        await sendMessage(messageInput, replyTo?.id, files);
    }
    
    setMessageInput('');
    setFiles([]);
    setReplyTo(null);
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (mentionQuery) {
          const candidates = members.filter(m => (m.full_name || '').toLowerCase().includes(mentionQuery.toLowerCase()));
          if (e.key === 'ArrowDown') {
              e.preventDefault();
              setMentionIndex(prev => (prev + 1) % candidates.length);
          } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setMentionIndex(prev => (prev - 1 + candidates.length) % candidates.length);
          } else if (e.key === 'Enter' || e.key === 'Tab') {
              e.preventDefault();
              if (candidates[mentionIndex]) insertMention(candidates[mentionIndex]);
          } else if (e.key === 'Escape') {
              setMentionQuery(null);
          }
          return;
      }

      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
          e.preventDefault();
          handleSend();
      }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setMessageInput(val);
      
      const match = val.match(/@([\w\s]*)$/);
      if (match) {
          setMentionQuery(match[1]);
          setMentionIndex(0);
      } else {
          setMentionQuery(null);
      }
  };

  const insertMention = (member: typeof members[0]) => {
      const newVal = messageInput.replace(/@([\w\s]*)$/, `@${member.full_name} `);
      setMessageInput(newVal);
      setMentionQuery(null);
      inputRef.current?.focus();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, activeChannelId]);

  const filteredMembers = mentionQuery 
    ? members.filter(m => (m.full_name || '').toLowerCase().includes(mentionQuery.toLowerCase())).slice(0, 5)
    : [];

  const getMemberName = (id: string) => members.find(m => m.user_id === id)?.full_name || 'Usuário';
  const getMemberAvatar = (id: string) => members.find(m => m.user_id === id)?.avatar_url;

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#000000]">
      {/* Header */}
      <div className="h-12 px-4 flex items-center justify-between shadow-sm border-b border-gray-200 dark:border-[#1f2023]">
        <div className="flex items-center min-w-0">
          <Menu className="lg:hidden h-6 w-6 mr-4 text-gray-500 dark:text-gray-400" onClick={onOpenMobile} />
          <Hash className="h-6 w-6 text-gray-500 dark:text-gray-500 mr-2 flex-shrink-0" />
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 dark:text-white truncate">{activeChannel?.displayName || activeChannel?.name || 'Carregando...'}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate hidden sm:block">
              {activeChannel?.name?.startsWith('dm-') ? 'Mensagens Privadas' : `Discussões sobre ${activeChannel?.name || 'geral'}`}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <div className="relative hidden sm:block">
            <input type="text" placeholder="Buscar" className="bg-gray-100 dark:bg-[#1a1a1c] text-sm rounded px-2 py-1 w-36 transition-all focus:w-60 text-gray-900 dark:text-gray-200 outline-none border border-transparent focus:border-gray-300 dark:focus:border-gray-700" />
            <Search className="h-4 w-4 absolute right-2 top-1.5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="relative">
            <Bell className="h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer" />
            {notificationCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-[1px]">{notificationCount}</span>}
          </div>
          <Users className={`h-6 w-6 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer ${showMembers ? 'text-gray-900 dark:text-white' : ''}`} onClick={onToggleMembers} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col px-4 pt-4">
        {messages.map((msg, index) => {
            const isSequence = index > 0 && messages[index - 1].authorId === msg.authorId && (new Date(msg.createdAt).getTime() - new Date(messages[index-1].createdAt).getTime() < 60000);
            const isOwner = msg.authorId === user?.id;
            const repliedMsg = msg.replyToId ? messages.find(m => m.id === msg.replyToId) : null;

            return (
                <div key={msg.id} className={`group flex ${isSequence ? 'mt-1' : 'mt-4'} -mx-4 px-4 py-1 hover:bg-gray-50 dark:hover:bg-[#2e3035] relative`}>
                    {!isSequence ? (
                        <div className="mr-4 cursor-pointer hover:opacity-80 w-10 pt-1" onClick={() => startDM(msg.authorId)}>
                            <Avatar src={getMemberAvatar(msg.authorId) || undefined} alt={getMemberName(msg.authorId)} className="h-10 w-10" />
                        </div>
                    ) : (
                        <div className="w-10 mr-4 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 text-right">{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                        {!isSequence && (
                            <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900 dark:text-white hover:underline cursor-pointer" onClick={() => startDM(msg.authorId)}>
                                    {getMemberName(msg.authorId)}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{formatDate(msg.createdAt)}</span>
                            </div>
                        )}
                        
                        {repliedMsg && !isSequence && (
                            <div className="flex items-center gap-2 my-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#1a1a1c] p-1 rounded border-l-2 border-primary-500">
                                <Reply className="h-3 w-3" />
                                <span className="font-bold">{getMemberName(repliedMsg.authorId)}:</span>
                                <span className="truncate max-w-[200px]">{repliedMsg.content}</span>
                            </div>
                        )}

                        <p className="text-gray-800 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        
                        {msg.attachments && msg.attachments.length > 0 && (
                            <div className="mt-2 grid grid-cols-2 gap-2 max-w-md">
                                {msg.attachments.map((att, i) => (
                                    <div key={i} className="relative rounded overflow-hidden border border-gray-200 dark:border-gray-700">
                                        {att.type === 'image' ? (
                                            <img src={att.url} alt={att.name} className="w-full h-32 object-cover" />
                                        ) : (
                                            <a href={att.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-[#1a1a1c] hover:bg-gray-200 dark:hover:bg-[#252528]">
                                                <FileIcon className="h-5 w-5" />
                                                <span className="text-xs truncate">{att.name}</span>
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="absolute right-4 top-0 p-1 rounded bg-white dark:bg-[#1a1a1c] shadow border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity z-10">
                        <button onClick={() => setReplyTo({ id: msg.id, author: getMemberName(msg.authorId), content: msg.content })} className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#2b2d31] rounded text-gray-500 dark:text-gray-400" title="Responder">
                            <Reply className="h-4 w-4" />
                        </button>
                        {isOwner && (
                            <button onClick={() => { setEditingId(msg.id); setMessageInput(msg.content); }} className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#2b2d31] rounded text-gray-500 dark:text-gray-400" title="Editar">
                                <Edit className="h-4 w-4" />
                            </button>
                        )}
                        {(isOwner || isAdmin) && (
                            <button onClick={() => deleteMessage(msg.id)} className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded text-red-500" title="Apagar">
                                <Trash className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>
            );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Mention List */}
      {mentionQuery && filteredMembers.length > 0 && (
          <div className="absolute bottom-20 left-4 bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-64 z-50 overflow-hidden">
              {filteredMembers.map((m, i) => (
                  <div 
                    key={m.user_id} 
                    className={`px-3 py-2 flex items-center gap-2 cursor-pointer ${i === mentionIndex ? 'bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-gray-100 dark:hover:bg-[#252528]'}`}
                    onClick={() => insertMention(m)}
                  >
                      <Avatar src={m.avatar_url || undefined} alt={m.full_name || ''} className="h-6 w-6" />
                      <span className="text-sm text-gray-900 dark:text-gray-200">{m.full_name}</span>
                  </div>
              ))}
          </div>
      )}

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2">
        {/* Reply Banner */}
        {replyTo && (
            <div className="flex items-center justify-between bg-gray-100 dark:bg-[#1a1a1c] p-2 rounded-t-lg border-b border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                    <Reply className="h-3 w-3" />
                    <span>Respondendo a <strong>{replyTo.author}</strong>: {replyTo.content.substring(0, 50)}...</span>
                </div>
                <button onClick={() => setReplyTo(null)}><X className="h-4 w-4" /></button>
            </div>
        )}
        
        {/* Files Banner */}
        {files.length > 0 && (
            <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-[#1a1a1c] p-2 border-b border-gray-200 dark:border-gray-700">
                {files.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white dark:bg-[#2b2d31] px-2 py-1 rounded text-xs border border-gray-200 dark:border-gray-700">
                        <span>{f.name}</span>
                        <button onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))}><X className="h-3 w-3" /></button>
                    </div>
                ))}
            </div>
        )}

        <div className={`bg-gray-100 dark:bg-[#1a1a1c] ${replyTo || files.length > 0 ? 'rounded-b-lg' : 'rounded-lg'} px-4 py-2.5 flex items-center space-x-4 border border-gray-200 dark:border-transparent relative`}>
            <button onClick={() => fileInputRef.current?.click()} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <Plus className="h-6 w-6 bg-gray-300 dark:bg-gray-400 text-gray-100 dark:text-[#383a40] rounded-full p-1" />
            </button>
            <input type="file" multiple ref={fileInputRef} className="hidden" onChange={(e) => setFiles(prev => [...prev, ...Array.from(e.target.files || [])])} />
            
            <input
              ref={inputRef}
              type="text"
              value={messageInput}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder={editingId ? "Editando mensagem..." : `Conversar em #${activeChannel?.displayName || activeChannel?.name}`}
              className="bg-transparent border-none focus:ring-0 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 flex-1 h-full py-1"
            />
            
            <div className="relative">
                <Smile className={`h-6 w-6 cursor-pointer ${showEmojiPicker ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}`} onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
                
                {showEmojiPicker && (
                    <div className="absolute bottom-10 right-0 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1f2023] rounded-xl shadow-2xl w-80 h-80 flex flex-col z-50 overflow-hidden">
                        <div className="flex overflow-x-auto p-2 bg-gray-50 dark:bg-[#151517] gap-1 custom-scrollbar border-b border-gray-200 dark:border-[#1f2023]">
                            {Object.keys(EMOJI_CATEGORIES).map(cat => (
                                <button 
                                    key={cat} 
                                    onClick={() => setActiveEmojiCategory(cat)}
                                    className={`px-2 py-1 text-xs rounded-full whitespace-nowrap transition-colors ${activeEmojiCategory === cat ? 'bg-primary-500 text-white' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-[#2b2d31]'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 grid grid-cols-8 gap-1 custom-scrollbar">
                            {EMOJI_CATEGORIES[activeEmojiCategory as keyof typeof EMOJI_CATEGORIES].map(e => (
                                <button key={e} onClick={() => { setMessageInput(prev => prev + e); }} className="text-xl hover:bg-gray-100 dark:hover:bg-[#2b2d31] rounded p-1">
                                    {e}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        {editingId && <div className="text-xs text-center mt-1 text-primary-500">Editando mensagem • <button onClick={() => { setEditingId(null); setMessageInput(''); }} className="underline">Cancelar</button></div>}
      </div>
    </div>
  );
}
