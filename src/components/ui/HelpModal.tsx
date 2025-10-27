import { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X, HelpCircle, ArrowLeft, ArrowRight } from "lucide-react";

export interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = forwardRef<HTMLDivElement, HelpModalProps>(
  ({ isOpen, onClose, ...props }, ref) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Focus management
    useEffect(() => {
      if (isOpen) {
        // Store previous focus
        previousFocusRef.current = document.activeElement as HTMLElement;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus modal after a short delay to ensure it's rendered
        setTimeout(() => {
          const currentRef = (ref as React.RefObject<HTMLDivElement>)?.current || internalRef.current;
          currentRef?.focus();
        }, 100);
        
        // Start animation
        setIsAnimating(true);
      } else {
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Restore focus
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
        
        // Reset animation
        setIsAnimating(false);
      }
    }, [isOpen, ref]);

    // Handle ESC key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen, onClose]);

    // Focus trap within modal
    useEffect(() => {
      const currentModal = (ref as React.RefObject<HTMLDivElement>)?.current || internalRef.current;
      if (!isOpen || !currentModal) return;

      const focusableElements = currentModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      currentModal.addEventListener('keydown', handleTabKey);

      return () => {
        currentModal?.removeEventListener('keydown', handleTabKey);
      };
    }, [isOpen, ref]);

    // Handle overlay click
    const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4",
          "bg-black/80 modal-overlay",
          // Animation classes
          isAnimating ? "animate-fade-in" : "animate-fade-out"
        )}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-modal-title"
        aria-describedby="help-modal-description"
      >
        <div
          ref={ref || internalRef}
          className={cn(
            "card-static",
            "relative w-full max-w-md mx-auto modal-content",
            "transform transition-all duration-300 ease-out",
            isAnimating
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-95"
          )}
          tabIndex={-1}
          {...props}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <HelpCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2
                  id="help-modal-title"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Atalhos de Teclado
                </h2>
                <p
                  id="help-modal-description"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Navegue rapidamente usando o teclado
                </p>
              </div>
            </div>
           
            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20"
              )}
              aria-label="Fechar ajuda"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body - Atalhos */}
          <div className="space-y-4">
            <div className="space-y-3">
              {/* Navegação */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Navegação
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                          <ArrowLeft className="h-3 w-3" />
                        </kbd>
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                          <ArrowRight className="h-3 w-3" />
                        </kbd>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Navegar entre slides
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controle */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Controle
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <kbd className="px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                        Esc
                      </kbd>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Sair dos slides
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dica adicional */}
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-2">
                <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Use estes atalhos para uma experiência mais fluida e produtiva durante a apresentação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation styles are defined in globals.css */}
      </div>
    );
  }
);

HelpModal.displayName = "HelpModal";

export { HelpModal };