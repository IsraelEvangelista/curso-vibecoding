import { useEffect, useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Card, Button, Badge } from "@/components/ui"
import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router-dom"
import vibeLogo from "@/assets/logo.png"

type Course = { id: string; title: string; description: string | null; is_active: boolean; slug: string }

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    supabase
      .from("courses")
      .select("id,title,description,is_active,slug")
      .order("title", { ascending: true })
      .then(({ data }) => setCourses((data || []) as Course[]))
  }, [])

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Cursos</h1>
            <p className="text-gray-600 dark:text-gray-400">Selecione um curso para acessar suas aulas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => {
              const isVibeCoding = c.slug === 'vibe-coding' || c.title.toLowerCase().includes("vibe coding");
              return (
                <Card 
                  key={c.id} 
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    isVibeCoding 
                      ? "bg-white/10 dark:bg-black/40 backdrop-blur-xl border-primary-500/50 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] group relative overflow-hidden" 
                      : "bg-white dark:bg-[#0a0a0a]"
                  }`}
                >
                  {isVibeCoding && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="flex-1">
                      {isVibeCoding && (
                        <div className="mb-4 h-12 flex items-center">
                          <img src={vibeLogo} alt="Vibe Coding Logo" className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                        </div>
                      )}
                      <h3 className={`text-lg font-semibold mb-1 ${
                        isVibeCoding 
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400" 
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {c.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{c.description || ""}</p>
                    </div>
                    <Badge variant={c.is_active ? "success" : "danger"}>{c.is_active ? "Ativo" : "Inativo"}</Badge>
                  </div>
                  <div className="mt-4 relative z-10">
                    <Button 
                      className={`w-full ${isVibeCoding ? "btn-neon" : "btn-neon"}`} 
                      onClick={() => navigate(`/curso/${c.id}`)}
                    >
                      Acessar
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage