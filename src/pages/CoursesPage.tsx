import { useEffect, useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Card, Button, Badge } from "@/components/ui"
import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router-dom"

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
            {courses.map((c) => (
              <Card key={c.id} className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{c.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{c.description || ""}</p>
                  </div>
                  <Badge variant={c.is_active ? "success" : "danger"}>{c.is_active ? "Ativo" : "Inativo"}</Badge>
                </div>
                <div className="mt-4">
                  <Button className="btn-neon w-full" onClick={() => navigate(`/curso/${c.id}`)}>Acessar</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage