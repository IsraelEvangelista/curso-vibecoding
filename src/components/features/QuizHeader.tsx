import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Settings,
  ChevronDown,
  Sun,
  Moon,
  CheckCircle,
  HelpCircle,
  Clock
} from "lucide-react";
import type { QuizHeaderProps } from "@/types";
import { Theme, applyTheme } from "@/lib/theme";
import { HelpModal } from "@/components/ui/HelpModal";

export function QuizHeader({
  round,
  questionIndex,
  answers,
  onPrevious,
  onNext,
  onComplete,
  onExit,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  timeSpent
}: QuizHeaderProps) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "dark";
    }
    return "dark";
  });
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 16 });
  const [hasMounted, setHasMounted] = useState(false);

  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
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
  };

  const currentQuestion = round.questions[questionIndex];
  const questionIndicator = `${questionIndex + 1}/${round.questions.length}`;
  const answeredCount = answers.filter(a => a !== -1).length;

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

  const helpModal = hasMounted && isHelpModalOpen
    ? createPortal(
        <HelpModal
          isOpen={isHelpModalOpen}
          onClose={() => setIsHelpModalOpen(false)}
        />,
        document.body,
      )
    : null;

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {themeMenu}
      {helpModal}
      
      {/* Cabeçalho fixo no topo */}
      <header className="fixed top-0 left-0 right-0 z-[12000] header-3d">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
             
            {/* Lado Esquerdo: Botão Sair e Título */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onExit}
                className="btn-outline flex items-center space-x-2 px-3 py-2"
                title="Sair do Quiz"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Sair</span>
              </button>
              
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate max-w-xs">
                  {round.title}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Questão {currentQuestion?.question?.substring(0, 50)}...
                </p>
              </div>
            </div>

            {/* Centro: Indicador de questões e tempo */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {questionIndicator}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{formatTime(timeSpent)}</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Navegação e Ações */}
            <div className="flex items-center space-x-2">
              {/* Botões de navegação */}
              <button
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className={`btn-outline flex items-center space-x-1 px-3 py-2 ${
                  !canGoPrevious ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                title="Questão anterior"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              {!isLastQuestion ? (
                <button
                  onClick={onNext}
                  disabled={!canGoNext}
                  className={`btn-outline flex items-center space-x-1 px-3 py-2 ${
                    !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  title="Próxima questão"
                >
                  <span className="hidden sm:inline">Próximo</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  disabled={answeredCount < round.questions.length}
                  className={`btn-neon flex items-center space-x-1 px-3 py-2 ${
                    answeredCount < round.questions.length ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  title="Finalizar quiz"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Finalizar</span>
                </button>
              )}

              {/* Separador */}
              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

              {/* Botão de ajuda */}
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                title="Atalhos de teclado"
              >
                <HelpCircle className="h-5 w-5" />
              </button>

              {/* Menu de temas */}
              <div className="relative">
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
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile flutuante */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-[12000] flex justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 flex space-x-2">
          {!isLastQuestion ? (
            <button
              onClick={onNext}
              disabled={!canGoNext}
              className={`btn-outline flex items-center space-x-1 px-3 py-2 text-sm ${
                !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Próxima questão"
            >
              <span>Próximo</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onComplete}
              disabled={answeredCount < round.questions.length}
              className={`btn-neon flex items-center space-x-1 px-3 py-2 text-sm ${
                answeredCount < round.questions.length ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Finalizar quiz"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Finalizar</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default QuizHeader;
