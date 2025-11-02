import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  X,
  LogOut,
  BookOpen,
  Trophy,
  Users,
  Settings,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";

import { Avatar } from "@/components/ui";
import { mockCurrentUser } from "@/lib/mockData";
import { Theme, applyTheme } from "@/lib/theme";
import { ThemeHero } from "@/components/features/ThemeHero";

import logoImg from "@/assets/logo.png";

interface MenuPosition {
  top: number;
  right: number;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "dark";
    }
    return "dark";
  });
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    top: 0,
    right: 16,
  });
  const [hasMounted, setHasMounted] = useState(false);

  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (
      !isThemeMenuOpen ||
      typeof window === "undefined" ||
      !themeButtonRef.current
    )
      return;
    const rect = themeButtonRef.current.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 8,
      right: Math.max(window.innerWidth - rect.right, 16),
    });
  }, [isThemeMenuOpen]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsThemeMenuOpen(false);
    // Não recarrega mais - o tema é aplicado dinamicamente
  };

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Aulas", href: "/aulas" },
    { icon: Trophy, label: "Ranking", href: "/ranking" },
    { icon: Users, label: "Comunidade", href: "/comunidade" },
  ];

  const themeMenu =
    hasMounted && isThemeMenuOpen
      ? createPortal(
          <>
            <div
              className="fixed inset-0 z-[14000]"
              onClick={() => setIsThemeMenuOpen(false)}
            />
            <div
              className="fixed z-[15000] w-64 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
              style={{ top: menuPosition.top, right: menuPosition.right }}
            >
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Temas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleThemeChange("light")}
                    className={`flex items-center space-x-2 p-3 rounded-md transition-all ${
                      theme === "light"
                        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 ring-2 ring-primary-500"
                        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    <Sun className="h-5 w-5" />
                    <div className="text-left flex-1">
                      <div className="text-sm font-medium">Claro</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleThemeChange("dark")}
                    className={`flex items-center space-x-2 p-3 rounded-md transition-all ${
                      theme === "dark"
                        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 ring-2 ring-primary-500"
                        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    <Moon className="h-5 w-5" />
                    <div className="text-left flex-1">
                      <div className="text-sm font-medium">Escuro</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <ThemeHero />

      {themeMenu}

      <header className="header-3d fixed top-0 left-0 right-0 z-[12000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Vibe Coding"
                className="h-8 w-auto mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Vibe Coding
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
              <div className="hidden sm:block">
                <button
                  ref={themeButtonRef}
                  onClick={() => {
                    if (!isThemeMenuOpen) {
                      const btn = themeButtonRef.current;
                      if (btn && typeof window !== "undefined") {
                        const rect = btn.getBoundingClientRect();
                        setMenuPosition({
                          top: rect.bottom + 8,
                          right: Math.max(window.innerWidth - rect.right, 16),
                        });
                      }
                      setIsThemeMenuOpen(true);
                    } else {
                      setIsThemeMenuOpen(false);
                    }
                  }}
                  className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                  title="Configurar Tema"
                >
                  <Settings className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:block text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {mockCurrentUser.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {mockCurrentUser.role}
                    </div>
                  </div>
                  <Avatar
                    src={mockCurrentUser.avatar}
                    alt={mockCurrentUser.name}
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
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
              <nav className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      location.pathname === item.href
                        ? "bg-gray-100 text-primary-600 dark:bg-gray-700 dark:text-primary-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="px-3 py-2 space-y-2">
                    {/* Mobile Theme Switch */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Tema
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleThemeChange("light")}
                          className={`flex items-center space-x-2 p-2 rounded-md transition-all text-sm ${
                            theme === "light"
                              ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 ring-2 ring-primary-500"
                              : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <Sun className="h-4 w-4" />
                          <span>Claro</span>
                        </button>
                        <button
                          onClick={() => handleThemeChange("dark")}
                          className={`flex items-center space-x-2 p-2 rounded-md transition-all text-sm ${
                            theme === "dark"
                              ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 ring-2 ring-primary-500"
                              : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <Moon className="h-4 w-4" />
                          <span>Escuro</span>
                        </button>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-3 w-full text-left text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 p-2 rounded-md">
                      <LogOut className="h-5 w-5" />
                      <span>Sair</span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
