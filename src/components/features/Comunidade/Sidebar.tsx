import { Hash, Plus, Settings, X } from 'lucide-react';
import { useCommunity } from '@/context/CommunityContext';
import { useAuth } from '@/context/AuthContext';
import { Badge, Avatar, Button } from '@/components/ui';
import { supabase } from '@/lib/supabase';

export function Sidebar({ showMobile, onCloseMobile }: { showMobile: boolean; onCloseMobile: () => void }) {
  const { categories, activeChannelId, setActiveChannelId, unreadCounts, refreshCategories } = useCommunity();
  const { user, profile, isAdmin } = useAuth();

  // Admin functions (simplified integration)
  const createCategory = async () => {
    if (!isAdmin) return;
    const name = window.prompt('Nome do segmento');
    if (!name) return;
    const nextOrder = 1 + Math.max(0, ...categories.map(c => c.order ?? 0));
    await supabase.from('community_categories').insert({ name, order: nextOrder });
    refreshCategories();
  };

  const createChannel = async (catId: string) => {
    if (!isAdmin) return;
    const name = window.prompt('Nome do canal');
    if (!name) return;
    await supabase.from('community_channels').insert({ name, category_id: catId, type: 'text', is_private: false });
    refreshCategories();
  };

  // ... (other admin functions like rename/delete can be added similarly)

  return (
    <>
      {showMobile && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onCloseMobile} />
      )}
      <div className={`
        fixed lg:relative z-50 w-72 bg-gray-100 dark:bg-[#0a0a0a] flex flex-col h-full transition-transform duration-300 border-r border-gray-200 dark:border-[#1f2023]
        ${showMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-12 px-4 flex items-center justify-between shadow-sm border-b border-gray-200 dark:border-[#1f2023] hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer transition-colors">
          <h1 className="font-bold truncate text-gray-900 dark:text-white">Vibe Coding Community</h1>
          <X className="lg:hidden h-5 w-5 text-gray-500 dark:text-gray-400" onClick={onCloseMobile} />
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-6 custom-scrollbar">
          {categories.map(category => (
            <div key={category.id}>
              <div className="px-4 mb-1 flex items-center justify-between group">
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 uppercase tracking-wide cursor-pointer">
                  {category.name}
                </h2>
                {isAdmin && category.id !== 'dm-virtual' && (
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100">
                    <button onClick={createCategory}><Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                  </div>
                )}
              </div>
              <div className="space-y-[2px] px-2">
                {category.channels.map(channel => (
                  <div className="flex items-center" key={channel.id}>
                    <button
                      onClick={() => { setActiveChannelId(channel.id); onCloseMobile(); }}
                      className={`
                        w-full flex items-center px-2 py-[6px] rounded group transition-colors
                        ${activeChannelId === channel.id
                          ? 'bg-gray-200 dark:bg-[#1a1a1c] text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1a1a1c] hover:text-gray-900 dark:hover:text-gray-200'}
                      `}
                    >
                      <Hash className="h-5 w-5 mr-1.5 text-gray-500 dark:text-gray-500" />
                      <span className="truncate font-medium">{channel.displayName || channel.name}</span>
                    </button>
                    {(unreadCounts[channel.id] ?? 0) > 0 && (
                      <Badge className="ml-2 bg-red-500 hover:bg-red-600 text-white h-5 px-1.5">
                        {unreadCounts[channel.id]}
                      </Badge>
                    )}
                    {isAdmin && category.id !== 'dm-virtual' && (
                        <div className="ml-2 flex items-center gap-2 opacity-0 group-hover:opacity-100">
                            {/* simplified admin controls */}
                           <button onClick={() => createChannel(category.id)}><Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" /></button>
                        </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
              <div className="text-xs text-gray-500 dark:text-gray-400">#{user?.id.slice(-4)}</div>
            </div>
          </div>
           <div className="flex items-center">
            <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-[#1a1a1c] border-none">
              <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
