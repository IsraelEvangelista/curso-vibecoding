import { Modal } from "@/components/ui";
import { mockLessons } from "@/lib/mocks";
import { useAulasSelection } from "@/hooks/useAulasSelection";
import { LessonCard } from "./Aulas/LessonCard";

export function Aulas() {
  const { expandedId, modalOpen, selectedLesson, toggleExpand, openModal, closeModal, navigateTo } = useAulasSelection();

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
        </div>

        <div className="grid grid-cols-1 gap-6">
          {mockLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              expanded={expandedId === lesson.id}
              onToggleExpand={() => toggleExpand(lesson.id)}
              onOpen={() => openModal(lesson)}
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
