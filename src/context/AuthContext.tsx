import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Profile = {
  user_id: string
  role: 'admin' | 'aluno'
  is_active: boolean
  full_name: string | null
  avatar_url?: string | null
}

type AuthState = {
  user: { id: string; email?: string | null; name?: string | null } | null
  profile: Profile | null
  isAdmin: boolean
  isActive: boolean
}

const AuthContext = createContext<AuthState>({ user: null, profile: null, isAdmin: false, isActive: false })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ id: string; email?: string | null; name?: string | null } | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const meta = data.session?.user?.user_metadata as Record<string, unknown> | undefined
      const nm = (meta?.['display_name'] as string | undefined) || (meta?.['full_name'] as string | undefined) || (meta?.['name'] as string | undefined)
      setUser(
        data.session?.user
          ? { id: data.session.user.id, email: data.session.user.email, name: nm }
          : null,
      )
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      const meta = session?.user?.user_metadata as Record<string, unknown> | undefined
      const nm = (meta?.['display_name'] as string | undefined) || (meta?.['full_name'] as string | undefined) || (meta?.['name'] as string | undefined)
      setUser(
        session?.user
          ? { id: session.user.id, email: session.user.email, name: nm }
          : null,
      )
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!user) { setProfile(null); return }
    console.log("Buscando profile para usuário:", user.id);
    supabase
      .from('profiles')
      .select('user_id, role, is_active, full_name, avatar_url')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        console.log("Resultado da busca de profile:", { data, error });
        if (error) {
          console.error("Erro ao buscar profile:", error);
        }
        setProfile(data as Profile | null)
      })
    supabase.rpc('touch_last_seen').then(() => {})
    const interval = setInterval(() => { supabase.rpc('touch_last_seen').then(() => {}) }, 60000)
    return () => { clearInterval(interval) }
  }, [user])

  const value = useMemo(() => ({
    user,
    profile,
    isAdmin: profile?.role === 'admin',
    isActive: !!profile?.is_active,
  }), [user, profile])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}