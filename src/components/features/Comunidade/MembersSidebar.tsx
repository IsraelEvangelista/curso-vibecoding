import { useCommunity } from '@/context/CommunityContext';
import { Avatar, Badge } from '@/components/ui';

export function MembersSidebar({ show }: { show: boolean }) {
  const { members, startDM } = useCommunity();

  const computeStatus = (lastSeenAt: string | null) => {
    if (!lastSeenAt) return 'offline';
    const diff = Date.now() - new Date(lastSeenAt).getTime();
    if (diff <= 5 * 60 * 1000) return 'online';
    if (diff <= 30 * 60 * 1000) return 'idle';
    return 'offline';
  };

  if (!show) return null;

  const renderRoleSection = (title: string, users: typeof members) => {
    const online = users.filter(u => computeStatus(u.last_seen_at) !== 'offline');
    const offline = users.filter(u => computeStatus(u.last_seen_at) === 'offline');

    return (
      <div className="mb-6" key={title}>
        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2 px-2">{title}</h3>
        
        {/* Online */}
        {online.length > 0 ? (
            <div className="mb-2">
                <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Disponível — {online.length}</div>
                <div className="space-y-1 mt-1">
                    {online.map(user => (
                        <div key={user.user_id} onClick={() => startDM(user.user_id)} className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer group opacity-90 hover:opacity-100">
                            <div className="relative mr-3">
                                <Avatar src={user.avatar_url || undefined} alt={user.full_name || 'User'} className="h-8 w-8" />
                                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-gray-100 dark:border-[#0a0a0a] bg-green-500" />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center">
                                    <span className="font-medium truncate text-gray-900 dark:text-gray-200">{user.full_name || 'Usuário'}</span>
                                    {user.role === 'admin' && (
                                        <Badge className="ml-1.5 bg-[#5865f2] text-[10px] h-3.5 px-1">ADMIN</Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="mb-2 text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Disponível — 0</div>
        )}

        {/* Offline */}
        {offline.length > 0 && (
            <div>
                <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase px-2">Offline — {offline.length}</div>
                <div className="space-y-1 mt-1">
                    {offline.map(user => (
                        <div key={user.user_id} onClick={() => startDM(user.user_id)} className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#1a1a1c] cursor-pointer group opacity-50 hover:opacity-100">
                            <div className="relative mr-3">
                                <Avatar src={user.avatar_url || undefined} alt={user.full_name || 'User'} className="h-8 w-8 grayscale" />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center">
                                    <span className="font-medium truncate text-gray-900 dark:text-gray-200">{user.full_name || 'Usuário'}</span>
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
      </div>
    );
  };

  const admins = members.filter(u => u.role === 'admin');
  const students = members.filter(u => u.role === 'aluno');

  return (
    <div className="w-60 bg-gray-100 dark:bg-[#0a0a0a] hidden lg:flex flex-col border-l border-gray-200 dark:border-[#1f2023]">
      <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
        {renderRoleSection('Administradores', admins)}
        {renderRoleSection('Alunos', students)}
      </div>
    </div>
  );
}
