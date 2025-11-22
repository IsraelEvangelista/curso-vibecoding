import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import { ForgotPasswordModal } from "@/components/ui/ForgotPasswordModal";
import { AccessRequestModal } from "@/components/ui/AccessRequestModal";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

import dashmakerLogo from "@/assets/dashmaker_logo.png";

export function LoginPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirm, setShowSignupConfirm] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [approvalOpen, setApprovalOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestEmail, setRequestEmail] = useState("");
  const navigate = useNavigate();


  const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const passwordStrong = (v: string) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(v);

  const handleLogin = async () => {
    if (!emailValid(loginEmail) || !passwordStrong(loginPassword)) {
      setLoginError("Verifique e-mail e senha — mínimo de 8 caracteres, com pelo menos 1 letra, 1 número e 1 caractere especial");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
    if (error) {
      const m = (error.message || '').toLowerCase();
      if (m.includes('confirm') || m.includes('not confirmed')) {
        setLoginError("Seu e-mail ainda não foi confirmado. Verifique sua caixa de entrada e finalize a confirmação para acessar.");
      } else {
        setLoginError("Falha ao entrar. Verifique e-mail e senha ou redefina sua senha.");
      }
      return;
    }
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData.user?.id ?? null;
    if (!uid) {
      setLoginError("Falha ao obter usuário.");
      await supabase.auth.signOut();
      return;
    }
    const { data: prof } = await supabase
      .from('profiles')
      .select('user_id,is_active')
      .eq('user_id', uid)
      .maybeSingle();
    if (!prof?.is_active) {
      await supabase.auth.signOut();
      setLoginError("Seu acesso ainda não foi liberado pelo admin. Solicite liberação pelo botão na tela de login.");
      setApprovalOpen(true);
      return;
    }
    setLoginError(null);
    navigate("/cursos");
  };

  const handleSignup = async () => {
    if (!signupName.trim()) {
      setSignupError("Informe seu nome");
      return;
    }
    if (!emailValid(signupEmail)) {
      setSignupError("Informe um e-mail válido");
      return;
    }
    if (!passwordStrong(signupPassword)) {
      setSignupError("A senha deve ter mínimo de 8 caracteres, com pelo menos 1 letra, 1 número e 1 caractere especial");
      return;
    }
    if (signupPassword !== signupConfirm) {
      setSignupError("As senhas não coincidem");
      return;
    }
    
    
    const { data, error } = await supabase.auth.signUp({ 
      email: signupEmail, 
      password: signupPassword, 
      options: { 
        data: { name: signupName, full_name: signupName, display_name: signupName } 
      } 
    });
    
    
    if (error) {
      // erro tratado abaixo
      
      // Capturar mensagens específicas do Supabase
      let errorMessage = "Erro ao cadastrar: ";
      
      if (error.message?.toLowerCase().includes("email already exists")) {
        errorMessage += "Este email já está cadastrado. Tente fazer login ou use outro email.";
      } else if (error.message?.toLowerCase().includes("email")) {
        errorMessage += "Email inválido. Verifique o formato do email.";
      } else if (error.message?.toLowerCase().includes("password")) {
        errorMessage += "Senha muito fraca. Use pelo menos 8 caracteres.";
      } else if (error.message?.toLowerCase().includes("network")) {
        errorMessage += "Erro de conexão. Verifique sua internet.";
      } else if (error.message?.toLowerCase().includes("rate limit")) {
        errorMessage += "Muitas tentativas. Aguarde alguns minutos.";
      } else {
        errorMessage += error.message || "Erro desconhecido. Tente novamente.";
      }
      
      setSignupError(errorMessage);
      return;
    }
    
    if (data?.user) {
      setSignupError(null);
      setToastType('success');
      setToastMsg('Cadastro realizado! Verifique seu e-mail para confirmação.');
      setTimeout(() => setToastMsg(null), 5000);
      setTab("login");
    } else {
      setToastType('success');
      setToastMsg('Cadastro iniciado! Verifique seu e-mail para confirmar.');
      setTimeout(() => setToastMsg(null), 5000);
      setTab("login");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-green-500/10 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={dashmakerLogo} alt="DashMaker Logo" className="h-20 w-auto object-contain" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-green-400 dark:to-primary-500 mb-2">
            DashMaker
          </h1>
          <p className="text-text-secondary">Sua jornada no desenvolvimento começa aqui</p>
        </div>

        <Card className="border-border-primary/50 shadow-2xl backdrop-blur-xl bg-bg-elevated/80">
          <CardHeader className="pb-0">
            <div className="flex p-1 bg-bg-secondary rounded-xl border border-border-primary mb-6">
              <button
                className={cn(
                  "flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  tab === "login"
                    ? "bg-bg-elevated text-primary-600 dark:text-primary-400 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                )}
                onClick={() => setTab("login")}
              >
                Entrar
              </button>
              <button
                className={cn(
                  "flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  tab === "signup"
                    ? "bg-bg-elevated text-primary-600 dark:text-primary-400 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                )}
                onClick={() => setTab("signup")}
              >
                Cadastrar
              </button>
            </div>
            <CardTitle className="text-xl text-center">
              {tab === "login" ? "Bem-vindo de volta" : "Crie sua conta"}
            </CardTitle>
            <CardDescription className="text-center">
              {tab === "login" 
                ? "Entre com suas credenciais para acessar" 
                : "Preencha os dados abaixo para começar"}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            {tab === "login" && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary ml-1">E-mail</label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com"
                    value={loginEmail} 
                    onChange={(e) => setLoginEmail(e.target.value)} 
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-text-secondary ml-1">Senha</label>
                    <button 
                      className="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      onClick={() => setForgotOpen(true)}
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                  <div className="relative">
                    <Input 
                      type={showLoginPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      value={loginPassword} 
                      onChange={(e) => setLoginPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                      className="h-11 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label="Mostrar senha"
                    >
                      {showLoginPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                
                {loginError && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400 animate-fade-in">
                    {loginError}
                  </div>
                )}

                <Button 
                  variant="neon" 
                  className="w-full h-11 mt-2 text-base" 
                  onClick={handleLogin}
                >
                  Entrar na Plataforma
                </Button>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-text-secondary">Precisa de acesso? Solicite liberação ao admin.</div>
                  <Button variant="outline" onClick={() => { setRequestEmail(loginEmail); setRequestOpen(true); }}>Solicitar liberação</Button>
                </div>
              </div>
            )}

            {tab === "signup" && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary ml-1">Nome completo</label>
                  <Input 
                    type="text" 
                    placeholder="Seu nome"
                    value={signupName} 
                    onChange={(e) => setSignupName(e.target.value)} 
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary ml-1">E-mail</label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com"
                    value={signupEmail} 
                    onChange={(e) => setSignupEmail(e.target.value)} 
                    className="h-11"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary ml-1">Senha</label>
                    <div className="relative">
                      <Input 
                        type={showSignupPassword ? "text" : "password"} 
                        placeholder="••••••••"
                        value={signupPassword} 
                        onChange={(e) => setSignupPassword(e.target.value)} 
                        className="h-11 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword((s) => !s)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Mostrar senha"
                      >
                        {showSignupPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary ml-1">Confirmar</label>
                    <div className="relative">
                      <Input 
                        type={showSignupConfirm ? "text" : "password"} 
                        placeholder="••••••••"
                        value={signupConfirm} 
                        onChange={(e) => setSignupConfirm(e.target.value)} 
                        className="h-11 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupConfirm((s) => !s)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Mostrar senha"
                      >
                        {showSignupConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {signupError && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400 animate-fade-in">
                    {signupError}
                  </div>
                )}

                <Button 
                  variant="neon" 
                  className="w-full h-11 mt-2 text-base" 
                  onClick={handleSignup}
                >
                  Criar Conta Gratuita
                </Button>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-center border-t border-border-primary/50 pt-6 pb-6">
            <p className="text-xs text-center text-text-muted">
              Ao continuar, você concorda com nossos <a href="#" className="underline hover:text-primary-500">Termos de Serviço</a> e <a href="#" className="underline hover:text-primary-500">Política de Privacidade</a>.
            </p>
          </CardFooter>
        </Card>
        
        
      </div>

      <ForgotPasswordModal
        isOpen={forgotOpen}
        onClose={() => setForgotOpen(false)}
        onSubmit={async (email) => { await supabase.auth.resetPasswordForEmail(email) }}
      />

      {approvalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={() => setApprovalOpen(false)}>
          <div className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-xl w-[520px] max-w-[90%] p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cadastro em aprovação</h3>
              <button onClick={() => setApprovalOpen(false)}><EyeOff className="h-5 w-5 text-gray-500" /></button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Seu cadastro está em processo de aprovação. Você pode requisitar liberação através do botão abaixo.</p>
              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" onClick={() => setApprovalOpen(false)}>Fechar</Button>
                <Button variant="neon" onClick={() => {
                  setApprovalOpen(false);
                  setRequestEmail(loginEmail);
                  setRequestOpen(true);
                }}>Solicitar liberação</Button>
              </div>
          </div>
        </div>
      )}

      {toastMsg && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className={cn(
            "rounded-xl shadow-lg px-4 py-3 text-sm flex items-center gap-3",
            toastType === 'success' ? "bg-green-600 text-white" : "bg-red-600 text-white"
          )}>
            <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

      <AccessRequestModal
        isOpen={requestOpen}
        defaultEmail={requestEmail}
        onClose={() => setRequestOpen(false)}
        onSubmit={async (email) => {
          try { await supabase.from('access_requests').insert({ email, message: 'Solicitação de liberação' }); } catch { return; }
          try { await supabase.functions.invoke('notify-admin-access', { body: { targetEmail: email } }); } catch (_e) { /* no-op */ }
          setToastType('success');
          setToastMsg('Solicitação enviada aos administradores. Aguarde liberação.');
          setTimeout(() => setToastMsg(null), 5000);
          setRequestOpen(false);
        }}
      />
    </div>
  );
}

export default LoginPage;