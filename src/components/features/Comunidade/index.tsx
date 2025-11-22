import { useState } from 'react';
import { CommunityProvider } from '@/context/CommunityContext';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { MembersSidebar } from './MembersSidebar';

function ComunidadeContent() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showMembersSidebar, setShowMembersSidebar] = useState(true);

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white dark:bg-[#000000] text-gray-900 dark:text-gray-100 overflow-hidden">
      <Sidebar 
        showMobile={showMobileSidebar} 
        onCloseMobile={() => setShowMobileSidebar(false)} 
      />
      
      <ChatArea 
        onOpenMobile={() => setShowMobileSidebar(true)} 
        onToggleMembers={() => setShowMembersSidebar(!showMembersSidebar)}
        showMembers={showMembersSidebar}
      />
      
      <MembersSidebar show={showMembersSidebar} />
    </div>
  );
}

export function Comunidade() {
  return (
    <CommunityProvider>
      <ComunidadeContent />
    </CommunityProvider>
  );
}
