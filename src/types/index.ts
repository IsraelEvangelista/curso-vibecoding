// Tipos de Usuário
export type UserRole = "aluno" | "moderador";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  joinedAt: string;
  totalPoints: number;
}

// Tipos de Aulas
export interface Lesson {
  id: string;
  title: string;
  description: string;
  order: number;
  isLocked: boolean;
  progress?: number;
  duration: string;
  content: {
    explanation: string[];
    examples: string[];
  };
  quiz: Quiz;
  challenge: Challenge;
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
  maxAttempts: 3;
  attempts: QuizAttempt[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizAttempt {
  id: string;
  score: number;
  completedAt: string;
  answers: number[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  examples: string[];
  submission?: ChallengeSubmission;
}

export interface ChallengeSubmission {
  id: string;
  content: string;
  submittedAt: string;
  grade?: number;
  feedback?: string;
}

// Sistema de Gamificação
export interface PresenceRecord {
  id: string;
  lessonId: string;
  userId: string;
  recordedAt: string;
  points: number;
}

export interface RankingEntry {
  user: User;
  position: number;
  points: {
    total: number;
    presence: number;
    quizzes: number;
    challenges: number;
  };
  trend: "up" | "down" | "stable";
}

// Fórum e Comunidade
export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: User;
  lessonId?: string;
  replies: ForumReply[];
  createdAt: string;
  isPinned: boolean;
  tags: string[];
}

export interface ForumReply {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  isFromModerator: boolean;
}

export interface GalleryPost {
  id: string;
  title: string;
  description: string;
  author: User;
  challengeId: string;
  code: string;
  language: string;
  screenshots: string[];
  likes: number;
  comments: Comment[];
  createdAt: string;
  isFeatured: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
}

// Sistema de Temas
export type Theme = "light" | "dark" | "matrix" | "cyberpunk";

// Estado Global
export interface AppState {
  user: User | null;
  theme: Theme;
  isLoading: boolean;
  lessons: Lesson[];
  ranking: RankingEntry[];
  forumTopics: ForumTopic[];
  galleryPosts: GalleryPost[];
}

// Navegação
export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon: string;
  requiredRole?: UserRole;
  isExternal?: boolean;
}
