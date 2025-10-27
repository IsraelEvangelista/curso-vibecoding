import { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X, BookOpen, CheckCircle, Award } from "lucide-react";
import type { Lesson } from "@/types";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: Lesson;
  onNavigate: (section: "content" | "quiz" | "challenge") => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, lesson, onNavigate, ...props }, ref) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Focus management
    useEffect(() => {
      let focusTimeout: number | undefined;

      if (isOpen) {
        // Store previous focus
        previousFocusRef.current = document.activeElement as HTMLElement;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus modal after a short delay to ensure it's rendered
        focusTimeout = window.setTimeout(() => {
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

      return () => {
        document.body.style.overflow = '';
        if (focusTimeout) {
          window.clearTimeout(focusTimeout);
        }
      };
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
        aria-labelledby={`modal-title-${lesson.id}`}
        aria-describedby={`modal-description-${lesson.id}`}
      >
        <div
          ref={ref || internalRef}
          className={cn(
            "card",
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
            <div className="flex-1">
              <h2
                id={`modal-title-${lesson.id}`}
                className="text-xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {lesson.title}
              </h2>
              <p
                id={`modal-description-${lesson.id}`}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Ordem {lesson.order.toString().padStart(2, "0")} • {lesson.duration}
              </p>
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
              aria-label="Fechar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {lesson.description.split(";").map((item, idx) => {
                const trimmed = item.trim();
                // Checa se é item com subitens (contém |)
                if (trimmed.includes("|")) {
                  const [mainItem, ...subItems] = trimmed.split("|");
                  return (
                    <div key={idx} className="mb-3">
                      <div className="flex items-start gap-2">
                        <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                        <div>
                          <div>{mainItem.replace(":", "").trim()}</div>
                          <ul className="ml-4 mt-1 space-y-1">
                            {subItems.map((sub, subIdx) => (
                              <li key={subIdx} className="flex items-start gap-2">
                                <span className="text-theme-light-500 dark:text-theme-dark-500">•</span>
                                <span>{sub.trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
                // Item simples sem subitens
                return (
                  <div key={idx} className="mb-2">
                    <div className="flex items-start gap-2">
                      <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                      <span>{trimmed}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => onNavigate("content")}
                className={cn(
                  "btn-neon",
                  "flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                  "text-sm font-semibold transition-all duration-200"
                )}
              >
                <BookOpen className="h-4 w-4" />
                Ir para aula
              </button>

              <button
                onClick={() => onNavigate("quiz")}
                className={cn(
                  "btn-outline",
                  "flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                  "text-sm font-semibold transition-all duration-200"
                )}
              >
                <CheckCircle className="h-4 w-4" />
                Quiz
              </button>

              <button
                onClick={() => onNavigate("challenge")}
                className={cn(
                  "btn-outline",
                  "flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                  "text-sm font-semibold transition-all duration-200"
                )}
              >
                <Award className="h-4 w-4" />
                Desafio
              </button>
            </div>
          </div>
        </div>

        {/* Animation styles are defined in globals.css */}
      </div>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
