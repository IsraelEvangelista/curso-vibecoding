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

export interface LessonScore {
  id: string;
  lessonId: string;
  order: number;
  title: string;
  presenceScore: number; // 0-10
  quizScore: number; // 0-10
  challengeScore: number; // 0-10
  completed: boolean;
  updatedAt: string;
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

// Sistema de Slides
export interface Slide {
  id: string;
  title: string;
  content: string;
  type: "text" | "code" | "image" | "video";
  order: number;
}

export interface SlideDeck {
  id: string;
  lessonId: string;
  title: string;
  slides: Slide[];
  currentSlideIndex: number;
}

export interface SlideHeaderProps {
  slideDeck: SlideDeck;
  onPrevious: () => void;
  onNext: () => void;
  onExit: () => void;
  onNavigateToQuiz: () => void;
  onNavigateToChallenge: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export interface SlideViewerProps {
  slideDeck: SlideDeck;
  onSlideChange: (index: number) => void;
  onExit: () => void;
  onNavigateToQuiz: () => void;
  onNavigateToChallenge: () => void;
}

// Sistema de Quiz - Tipos Adicionais
export interface QuizRound {
  id: string;
  title: string;
  questions: QuizQuestion[];
  maxAttempts: number;
  attempts: QuizRoundAttempt[];
  isLocked: boolean;
}

export interface QuizRoundAttempt {
  id: string;
  roundId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: string;
  answers: number[];
  timeSpent: number; // em segundos
}

export interface QuizState {
  currentRound: QuizRound | null;
  currentQuestionIndex: number;
  answers: number[];
  isCompleted: boolean;
  startTime: number;
  timeSpent: number;
}

export interface QuizPageProps {
  lessonId: string;
  quiz: Quiz;
  onExit: () => void;
  onNavigateToSlides: () => void;
  onNavigateToChallenge: () => void;
}

export interface QuizQuestionViewerProps {
  round: QuizRound;
  questionIndex: number;
  answers: number[];
  onAnswerChange: (questionIndex: number, answerIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
  onExit: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

export interface QuizHeaderProps {
  round: QuizRound;
  questionIndex: number;
  answers: number[];
  onPrevious: () => void;
  onNext: () => void;
  onComplete?: () => void;
  onExit: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  timeSpent: number;
}

export interface QuizResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  passed: boolean;
  onRetry: () => void;
  onExit: () => void;
  roundTitle: string;
}
