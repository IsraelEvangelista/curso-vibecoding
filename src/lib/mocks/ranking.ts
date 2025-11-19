import { RankingEntry } from "@/types";
import { mockUsers } from "./users";

// Mock de Ranking
export const mockRanking: RankingEntry[] = [
  {
    user: mockUsers[2], // Maria Oliveira
    position: 1,
    points: {
      total: 1450,
      presence: 360,
      quizzes: 540,
      challenges: 550,
    },
    trend: "up",
  },
  {
    user: mockUsers[0], // Ana Silva
    position: 2,
    points: {
      total: 1250,
      presence: 300,
      quizzes: 450,
      challenges: 500,
    },
    trend: "stable",
  },
  {
    user: mockUsers[1], // Carlos Mendes
    position: 3,
    points: {
      total: 980,
      presence: 240,
      quizzes: 340,
      challenges: 400,
    },
    trend: "down",
  },
];
