import { QuizQuestion, QuizAttempt } from "@/types";

// Mock de Quiz Questions
export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "O que é Vibe Coding?",
    options: [
      "Uma metodologia de desenvolvimento tradicional",
      "Uma abordagem de desenvolvimento assistido por IA",
      "Uma linguagem de programação",
      "Um framework JavaScript",
    ],
    correctAnswer: 1,
    explanation:
      "Vibe Coding é uma abordagem de desenvolvimento de software assistida por inteligência artificial.",
  },
  {
    id: "q2",
    question: "Qual dos seguintes é um risco comum no Vibe Coding?",
    options: [
      "Falta de criatividade",
      "Lock-in com ferramentas de IA",
      "Desempenho muito lento",
      "Falta de documentação",
    ],
    correctAnswer: 1,
    explanation:
      "Lock-in com ferramentas de IA é um risco importante a ser considerado no Vibe Coding.",
  },
  {
    id: "q3",
    question: "O que significa MCP no contexto de agentes?",
    options: [
      "Model Control Protocol",
      "Machine Communication Platform",
      "Model Context Protocol",
      "Multi-agent Control Platform",
    ],
    correctAnswer: 2,
    explanation:
      "MCP significa Model Context Protocol, um padrão para comunicação entre modelos e ferramentas.",
  },
];

// Mock de Quiz Attempts
export const mockQuizAttempts: QuizAttempt[] = [
  {
    id: "attempt1",
    score: 80,
    completedAt: "2024-03-15T10:30:00Z",
    answers: [1, 1, 2],
  },
];
