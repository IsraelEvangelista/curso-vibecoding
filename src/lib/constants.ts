export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Curso Vibe Coding',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  description: 'Plataforma de Aprendizado Interativa',
};

export const GAMIFICATION_CONFIG = {
  weights: {
    presence: 1.2,
    quiz: 1.0,
    challenge: 1.5,
  },
  maxQuizAttempts: 3,
  topRankingPositions: 3,
};

export const ROUTES = {
  dashboard: '/',
  lessons: '/aulas',
  ranking: '/ranking',
  community: '/comunidade',
  progress: '/progresso',
  settings: '/configuracoes',
};

export const THEMES = {
  light: 'light',
  dark: 'dark',
  auto: 'auto',
} as const;

export const USER_ROLES = {
  aluno: 'aluno',
  moderador: 'moderador',
} as const;

export const ACTIVITY_TYPES = {
  quiz: 'quiz',
  presence: 'presence',
  challenge: 'challenge',
} as const;
