import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Lesson } from '@/types'

export function useAulasSelection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const navigate = useNavigate()

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
        navigate(`/aula/${id}`)
        break
      case 'quiz':
        navigate(`/aula/${id}/quiz`)
        break
      case 'challenge':
        navigate(`/aula/${id}/desafio`)
        break
    }
  }, [selectedLesson, closeModal, navigate])

  return { expandedId, modalOpen, selectedLesson, toggleExpand, openModal, closeModal, navigateTo }
}

