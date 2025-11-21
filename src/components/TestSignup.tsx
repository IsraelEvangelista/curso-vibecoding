import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { AuthResponse } from '@supabase/supabase-js'

export function TestSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AuthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const testSignup = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      console.log('=== TESTE DE CADASTRO ===')
      console.log('Email:', email)
      console.log('Nome:', name)
      console.log('Senha:', password.length, 'caracteres')

      // Verificar configuração do Supabase
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
      console.log('Supabase Key existe:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)

      // Testar conexão
      const { data: testData, error: testError } = await supabase
        .from('profiles')
        .select('*')
        .limit(1)

      console.log('Teste de conexão:', { testData, testError })

      // Tentar cadastro
      console.log('Iniciando cadastro...')
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      })
      const { data, error } = res
      console.log('Resultado do cadastro:', { data, error })

      if (error) {
        const status = (error as { status?: number } | null)?.status
        setError(`Erro: ${error.message}${status ? ` (status ${status})` : ''}`)
        console.error('Erro detalhado:', error)
      } else {
        setResult(res)
        console.log('Cadastro bem-sucedido:', data)
        
        // Verificar se o profile foi criado
        if (data.user) {
          console.log('Verificando profile...')
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', data.user.id)
            .single()
          
          console.log('Profile encontrado:', { profileData, profileError })
        }
      }
    } catch (err: unknown) {
      console.error('Erro capturado:', err)
      const message = err instanceof Error ? err.message : String(err)
      setError(`Erro capturado: ${message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Teste de Cadastro</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Seu nome"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="mínimo 8 caracteres"
          />
        </div>
        
        <button
          onClick={testSignup}
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Testando...' : 'Testar Cadastro'}
        </button>
        
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            <strong>Erro:</strong> {error}
          </div>
        )}
        
        {result && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
            <strong>Sucesso!</strong> Usuário criado: {result.data.user?.email}
            <br />
            <small>ID: {result.data.user?.id}</small>
          </div>
        )}
      </div>
    </div>
  )
}