import { ChannelCategory, Message, CommunityUser } from "@/types";
import { mockUsers } from "./users";

// Categorias e Canais
export const mockCategories: ChannelCategory[] = [
  {
    id: "cat_geral",
    name: "GERAL",
    channels: [
      { id: "c_boas_vindas", name: "boas-vindas", type: "text", categoryId: "cat_geral" },
      { id: "c_avisos", name: "avisos", type: "text", categoryId: "cat_geral", unreadCount: 2 },
      { id: "c_chat", name: "chat-geral", type: "text", categoryId: "cat_geral" },
    ]
  },
  {
    id: "cat_aulas",
    name: "AULAS",
    channels: [
      { id: "c_aula1", name: "aula-01-fundamentos", type: "text", categoryId: "cat_aulas" },
      { id: "c_aula2", name: "aula-02-agentes", type: "text", categoryId: "cat_aulas" },
      { id: "c_aula3", name: "aula-03-llms", type: "text", categoryId: "cat_aulas" },
      { id: "c_duvidas", name: "dúvidas-técnicas", type: "text", categoryId: "cat_aulas" },
    ]
  },
  {
    id: "cat_projetos",
    name: "PROJETOS",
    channels: [
      { id: "c_showcase", name: "showcase", type: "text", categoryId: "cat_projetos" },
      { id: "c_colab", name: "colaboração", type: "text", categoryId: "cat_projetos" },
      { id: "c_ideias", name: "ideias", type: "text", categoryId: "cat_projetos" },
    ]
  },
];

// Usuários da Comunidade (estendendo mockUsers)
export const mockCommunityUsers: CommunityUser[] = mockUsers.map((user, index) => ({
  ...user,
  status: index === 0 ? 'online' : 
          index === 1 ? 'dnd' : 
          index === 2 ? 'idle' : 'offline',
  customStatus: index === 0 ? 'Codando Vibe Coding 🚀' : undefined
}));

// Mensagens Mockadas
export const mockMessages: Message[] = [
  {
    id: "m1",
    content: "Bem-vindos ao curso Vibe Coding! 🚀",
    authorId: "2", // Carlos (Moderador)
    channelId: "c_boas_vindas",
    createdAt: "2024-03-10T10:00:00Z",
    reactions: { "👋": 5, "🔥": 3 }
  },
  {
    id: "m2",
    content: "Alguém já testou o GLM-4.6? Estou impressionado com a velocidade.",
    authorId: "1", // Ana
    channelId: "c_chat",
    createdAt: "2024-03-15T14:30:00Z",
  },
  {
    id: "m3",
    content: "Sim! Usei no desafio da aula 2 e foi muito bem.",
    authorId: "3", // Maria
    channelId: "c_chat",
    createdAt: "2024-03-15T14:35:00Z",
    replyToId: "m2"
  },
  {
    id: "m4",
    content: "Pessoal, o link da aula 3 já está disponível?",
    authorId: "4", // João
    channelId: "c_avisos",
    createdAt: "2024-03-16T09:00:00Z",
  },
  {
    id: "m5",
    content: "Ainda não, João. Será liberado às 19h.",
    authorId: "2", // Carlos
    channelId: "c_avisos",
    createdAt: "2024-03-16T09:05:00Z",
  }
];