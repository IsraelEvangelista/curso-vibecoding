import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Lesson } from '@/types'

export function useAulasSelection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const navigate = useNavigate()
  const { id: courseId } = useParams<{ id: string }>()

  const toggleExpand = useCallback((lessonId: string) => {
    setExpandedId(prev => (prev === lessonId ? null : lessonId))
  }, [])

  const openModal = useCallback((lesson: Lesson) => {
    setSelectedLesson(lesson)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setSelectedLesson(null)
  }, [])

  const navigateTo = useCallback((section: 'content' | 'quiz' | 'challenge') => {
    if (!selectedLesson) return
    const { id } = selectedLesson
    closeModal()
    switch (section) {
      case 'content':
        navigate(`/aula/${id}?course=${courseId}`)
        break
      case 'quiz':
        navigate(`/aula/${id}/quiz?course=${courseId}`)
        break
      case 'challenge':
        navigate(`/aula/${id}/desafio?course=${courseId}`)
        break
    }
  }, [selectedLesson, closeModal, navigate, courseId])

  return { expandedId, modalOpen, selectedLesson, toggleExpand, openModal, closeModal, navigateTo }
}

