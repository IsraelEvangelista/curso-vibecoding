import { ForumTopic } from "@/types";
import { mockUsers } from "./users";

// Mock de Tópicos do Fórum
export const mockForumTopics: ForumTopic[] = [
  {
    id: "topic1",
    title: "Dúvida sobre configuração do Supabase",
    content:
      "Estou com dificuldades para configurar as policies no Supabase. Alguém pode ajudar?",
    author: mockUsers[0],
    lessonId: "aula1",
    replies: [
      {
        id: "reply1",
        content:
          "Oi Ana! Você já verificou a documentação oficial? O problema geralmente está na sintaxe das policies.",
        author: mockUsers[1],
        createdAt: "2024-03-15T14:30:00Z",
        likes: 3,
        isFromModerator: true,
      },
      {
        id: "reply2",
        content:
          "Eu tive o mesmo problema! A solução foi usar o template de RLS que eles fornecem.",
        author: mockUsers[2],
        createdAt: "2024-03-15T15:45:00Z",
        likes: 2,
        isFromModerator: false,
      },
    ],
    createdAt: "2024-03-15T13:00:00Z",
    isPinned: false,
    tags: ["supabase", "configuração", "ajuda"],
  },
  {
    id: "topic2",
    title: "Compartilhando meu AGENTS.md para feedback",
    content:
      "Pessoal, desenvolvi um AGENTS.md para um projeto de e-commerce e gostaria de feedback.",
    author: mockUsers[2],
    lessonId: "aula2",
    replies: [
      {
        id: "reply3",
        content:
          "Excelente estrutura! Sugeri apenas adicionar mais detalhes sobre o agente de QA.",
        author: mockUsers[1],
        createdAt: "2024-03-14T10:00:00Z",
        likes: 5,
        isFromModerator: true,
      },
    ],
    createdAt: "2024-03-14T09:00:00Z",
    isPinned: true,
    tags: ["agents.md", "feedback", "compartilhamento"],
  },
];
