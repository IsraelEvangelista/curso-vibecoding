import type { SlideDeck, Slide } from '@/types'
import { supabase } from '@/lib/supabase'

// Mapeamento de UUIDs do Supabase para IDs simples dos mocks
const uuidToLessonIdMap: Record<string, string> = {
  '060571db-71d9-4278-876c-af9d3a4b369a': 'aula1',
  '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p': 'aula2',
  '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q': 'aula3',
  '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r': 'aula4',
  '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s': 'aula5'
}

const titles: Record<string, string> = {
  aula1: 'Aula 01: Fundamentos do Vibe Coding & Riscos',
  aula2: 'Aula 02: Arquitetura de Agente & Engenharia de Contexto',
  aula3: 'Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)',
  aula4: 'Aula 04: Ambientes: TRAE Solo, Warp + CLIs',
  aula5: 'Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)'
}

export async function loadSlideDeck(lessonId: string): Promise<SlideDeck | null> {
  let normalizedLessonId = uuidToLessonIdMap[lessonId] || lessonId

  if (!titles[normalizedLessonId]) {
    const { data } = await supabase
      .from('lessons')
      .select('lesson_number')
      .eq('id', lessonId)
      .maybeSingle()
    const num = (data?.lesson_number ?? null) as number | null
    if (!num) return null
    normalizedLessonId = `aula${num}`
  }

  const title = titles[normalizedLessonId]
  if (!title) return null
  
  let slides: Slide[]
  switch (normalizedLessonId) {
    case 'aula1': {
      const mod = await import('@/lib/mocks/slides/aula1')
      slides = mod.mockSlidesAula1
      break
    }
    case 'aula2': {
      const mod = await import('@/lib/mocks/slides/aula2')
      slides = mod.mockSlidesAula2
      break
    }
    case 'aula3': {
      const mod = await import('@/lib/mocks/slides/aula3')
      slides = mod.mockSlidesAula3
      break
    }
    case 'aula4': {
      const mod = await import('@/lib/mocks/slides/aula4')
      slides = mod.mockSlidesAula4
      break
    }
    case 'aula5': {
      const mod = await import('@/lib/mocks/slides/aula5')
      slides = mod.mockSlidesAula5
      break
    }
    default:
      return null
  }
  return {
    id: `deck-${normalizedLessonId}`,
    lessonId: normalizedLessonId,
    title,
    slides,
    currentSlideIndex: 0
  }
}
