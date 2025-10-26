import { Link } from 'react-router-dom';
import { Home, BookOpen, Trophy, Users, Settings, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BookOpen, label: 'Aulas', href: '/aulas' },
  { icon: Trophy, label: 'Ranking', href: '/ranking' },
  { icon: Users, label: 'Comunidade', href: '/comunidade' },
  { icon: BarChart3, label: 'Progresso', href: '/progresso' },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
];

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <img
              src="/src/assets/logo.png"
              alt="Vibe Coding"
              className="h-8 w-auto mr-3"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Vibe Coding
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Plataforma de Aprendizado
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors',
                  'hover:text-primary-600 dark:hover:text-primary-400'
                )}
                onClick={onClose}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Ana Silva
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  1.250 pontos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
