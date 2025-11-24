import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, LogOut, BookOpen, Users } from "lucide-react";

import { Avatar } from "@/components/ui";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Theme, applyTheme } from "@/lib/theme";
import { ThemeHero } from "@/components/features/ThemeHero";

import dashmakerLogo from "@/assets/dashmaker_logo.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "dark";
    }
    return "dark";
  });
  const { profile, user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const path = location.pathname
  const parts = path.split("/").filter(Boolean)
  const currentCourseId = parts[0] === "curso" ? parts[1] : undefined
  const navigationItems = [
    { icon: Users, label: "Comunidade", href: "/comunidade" },
    { icon: BookOpen, label: currentCourseId ? "Curso" : "Cursos", href: "/cursos" },
    ...(currentCourseId ? [{ icon: BookOpen, label: "Aulas", href: `/curso/${currentCourseId}` }] : []),
  ]

  return (
    <>
      <ThemeHero />

      <header className="header-3d fixed top-0 left-0 right-0 z-[12000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={dashmakerLogo}
                alt="DashMaker"
                className="h-10 w-auto mr-3 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  DashMaker
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Plataforma de Aprendizado
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center space-x-2 transition-colors ${
                    location.pathname === item.href
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <button
                  onClick={handleThemeChange}
                  className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  title={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
                >
                  <div className="absolute inset-0 flex items-center justify-between px-1.5">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <Moon className="w-4 h-4 text-primary-400" />
                  </div>
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:block text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.name ?? profile?.full_name ?? "Usuário"}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {profile?.role === "admin" ? "Admin" : "Aluno"}
                    </div>
                  </div>
                  <Avatar
                    src={undefined as unknown as string}
                    alt={"Avatar"}
                    className="h-8 w-8"
                  />
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <button
                onClick={async () => { await supabase.auth.signOut(); navigate("/") }}
                className="hidden md:flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                title="Sair"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-[12001] animate-in fade-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-700 shadow-xl animate-in slide-in-from-top-2 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <nav className="space-y-1 p-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <div className="space-y-2">
                  {/* Mobile Theme Switch */}
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tema</span>
                    <button
                      onClick={handleThemeChange}
                      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
                    >
                      <div className="absolute inset-0 flex items-center justify-between px-1.5">
                        <Sun className="w-4 h-4 text-yellow-500" />
                        <Moon className="w-4 h-4 text-primary-400" />
                      </div>
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <button 
                    className="flex items-center space-x-3 w-full text-left text-gray-700 hover:bg-red-50 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 px-3 py-3 rounded-lg transition-colors" 
                    onClick={async () => { await supabase.auth.signOut(); setIsMobileMenuOpen(false); navigate("/"); }}
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Sair</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
