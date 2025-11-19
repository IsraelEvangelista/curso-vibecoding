import { User } from "@/types";

// Mock de Usuários
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    role: "aluno",
    joinedAt: "2024-01-15",
    totalPoints: 1250,
  },
  {
    id: "2",
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    role: "moderador",
    joinedAt: "2023-11-20",
    totalPoints: 980,
  },
  {
    id: "3",
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    role: "aluno",
    joinedAt: "2024-02-01",
    totalPoints: 1450,
  },
  {
    id: "4",
    name: "João Santos",
    email: "joao.santos@email.com",
    role: "aluno",
    joinedAt: "2024-01-20",
    totalPoints: 890,
  },
  {
    id: "5",
    name: "Pedro Costa",
    email: "pedro.costa@email.com",
    role: "aluno",
    joinedAt: "2024-02-10",
    totalPoints: 760,
  },
];

// Mock de usuário atual (simulação de login)
export const mockCurrentUser: User = mockUsers[0]; // Ana Silva
