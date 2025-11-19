import type { SlideDeck, Slide } from '@/types'

const titles: Record<string, string> = {
  aula1: 'Aula 01: Fundamentos do Vibe Coding & Riscos',
  aula2: 'Aula 02: Arquitetura de Agente & Engenharia de Contexto',
  aula3: 'Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)',
  aula4: 'Aula 04: Ambientes: TRAE Solo, Warp + CLIs',
  aula5: 'Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)'
}

export async function loadSlideDeck(lessonId: string): Promise<SlideDeck | null> {
  const title = titles[lessonId]
  if (!title) return null
  let slides: Slide[]
  switch (lessonId) {
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
    id: `deck-${lessonId}`,
    lessonId,
    title,
    slides,
    currentSlideIndex: 0
  }
}
