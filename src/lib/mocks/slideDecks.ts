import { SlideDeck } from "@/types";
import { mockSlidesAula1 } from "./slides/aula1";
import { mockSlidesAula2 } from "./slides/aula2";
import { mockSlidesAula3 } from "./slides/aula3";
import { mockSlidesAula4 } from "./slides/aula4";
import { mockSlidesAula5 } from "./slides/aula5";

export const mockSlideDecks: SlideDeck[] = [
  {
    id: "deck-aula1",
    lessonId: "aula1",
    title: "Aula 01: Fundamentos do Vibe Coding & Riscos",
    slides: mockSlidesAula1,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula2",
    lessonId: "aula2",
    title: "Aula 02: Arquitetura de Agente & Engenharia de Contexto",
    slides: mockSlidesAula2,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula3",
    lessonId: "aula3",
    title: "Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)",
    slides: mockSlidesAula3,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula4",
    lessonId: "aula4",
    title: "Aula 04: Ambientes: TRAE Solo, Warp + CLIs",
    slides: mockSlidesAula4,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula5",
    lessonId: "aula5",
    title: "Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)",
    slides: mockSlidesAula5,
    currentSlideIndex: 0,
  },
];
