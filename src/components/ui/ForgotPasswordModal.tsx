import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (email: string) => Promise<void> | void;
}

export function ForgotPasswordModal({ isOpen, onClose, onSubmit }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => dialogRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Informe um e-mail válido");
      return;
    }
    setLoading(true);
    try {
      await onSubmit?.(email);
      setMessage("Se o e-mail existir, enviaremos instruções para redefinição.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[14000] flex items-center justify-center p-4",
        "bg-black/80"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Recuperar senha"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={cn(
          "card w-full max-w-md mx-auto",
          "border border-gray-200 dark:border-gray-700",
          "bg-white dark:bg-gray-800"
        )}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recuperar senha</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Informe seu e-mail para receber as instruções.</p>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!message && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
            />
          </div>
          {message && (
            <div className="mt-3 text-sm text-gray-700 dark:text-gray-300" aria-live="polite">{message}</div>
          )}
          <div className="mt-6 flex gap-2">
            <Button variant="secondary" onClick={onClose}>Cancelar</Button>
            <Button variant="primary" loading={loading} onClick={handleSubmit}>Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}