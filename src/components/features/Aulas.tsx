import { Modal } from "@/components/ui";
import { useAulasSelection } from "@/hooks/useAulasSelection";
import { LessonCard } from "./Aulas/LessonCard";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Lesson } from "@/types";

export function Aulas({ courseId }: { courseId?: string }) {
  const { expandedId, modalOpen, selectedLesson, toggleExpand, openModal, closeModal, navigateTo } = useAulasSelection();
  const { profile, user } = useAuth();
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const cid = courseId || '6fb976cd-0bcc-4675-9f2b-a78c77878b68';
    supabase
      .from('lessons')
      .select('id,title,description,lesson_number,is_active,duration_minutes,video_url')
      .eq('course_id', cid)
      .order('lesson_number', { ascending: true })
      .then(({ data }) => {
        const mapped: Lesson[] = (data || []).map((l: { id: string; title: string; description: string | null; lesson_number: number; is_active: boolean; duration_minutes: number | null; video_url: string | null }) => ({
          id: l.id,
          title: l.title,
          description: l.description || '',
          order: l.lesson_number,
          isLocked: !l.is_active,
          isActive: !!l.is_active,
          videoUrl: l.video_url || undefined,
          duration: l.duration_minutes ? `${l.duration_minutes} min` : '—',
          content: { explanation: [], examples: [] },
          quiz: { id: 'quiz', questions: [], maxAttempts: 3, attempts: [] },
          challenge: { id: 'challenge', title: '', description: '', requirements: [], examples: [] },
        }))
        setLessons(mapped)
      })
  }, [courseId])

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Aulas do Curso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acesso progressivo ao conteúdo do Curso Vibe Coding
          </p>
          {(profile?.full_name || user?.name) && (
            <div className="mt-3 text-sm font-medium text-gray-900 dark:text-white">
              Bem-vindo, {profile?.full_name ?? user?.name}!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              expanded={expandedId === lesson.id}
              onToggleExpand={() => toggleExpand(lesson.id)}
              onOpen={() => openModal(lesson)}
              onStatusChange={(id, isActive) => {
                setLessons(prev => prev.map(l => l.id === id ? { ...l, isActive, isLocked: !isActive } : l))
              }}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedLesson && (
          <Modal isOpen={modalOpen} onClose={closeModal} lesson={selectedLesson} onNavigate={navigateTo} />
        )}
      </div>
    </div>
  );
}

export default Aulas;
