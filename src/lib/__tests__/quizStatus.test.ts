import { describe, it, expect } from 'vitest';
import { getRoundStatus, QuizRoundWithProgress } from '@/lib/quizStatus';

const makeRound = (overrides: Partial<QuizRoundWithProgress> = {}): QuizRoundWithProgress => ({
  id: 'round-1',
  title: 'Rodada 1',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: `q${i+1}`,
    question: `Pergunta ${i+1}`,
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    explanation: ''
  })),
  maxAttempts: 3,
  attempts: [],
  isLocked: false,
  requiredScore: 70,
  currentAnswered: 0,
  ...overrides,
});

describe('quizStatus - lógica de status da rodada', () => {
  it('Não tentado quando não há tentativa e nenhuma resposta', () => {
    const round = makeRound({ currentAnswered: 0 });
    const status = getRoundStatus(round, null);
    expect(status.status).toBe('Não tentado');
  });

  it('Em progresso quando há respostas mas sem tentativa finalizada', () => {
    const round = makeRound({ currentAnswered: 3 });
    const status = getRoundStatus(round, null);
    expect(status.status).toBe('Em progresso');
  });

  it('Tentado quando houve tentativa mas sem aprovação e ainda restam tentativas', () => {
    const round = makeRound({ attempts: [{ id: 'a1', roundId: 'round-1', score: 60, totalQuestions: 10, correctAnswers: 6, completedAt: new Date().toISOString(), answers: [], timeSpent: 120 }] });
    const bestAttempt = round.attempts[0];
    const status = getRoundStatus(round, bestAttempt);
    expect(status.status).toBe('Tentado');
  });

  it('Falha quando atingiu o limite de tentativas sem aprovação', () => {
    const attempts = [
      { id: 'a1', roundId: 'round-1', score: 60, totalQuestions: 10, correctAnswers: 6, completedAt: new Date().toISOString(), answers: [], timeSpent: 120 },
      { id: 'a2', roundId: 'round-1', score: 50, totalQuestions: 10, correctAnswers: 5, completedAt: new Date().toISOString(), answers: [], timeSpent: 130 },
      { id: 'a3', roundId: 'round-1', score: 40, totalQuestions: 10, correctAnswers: 4, completedAt: new Date().toISOString(), answers: [], timeSpent: 140 },
    ];
    const round = makeRound({ attempts });
    const bestAttempt = attempts.reduce((best, current) => current.score > best.score ? current : best);
    const status = getRoundStatus(round, bestAttempt);
    expect(status.status).toBe('Falha');
  });

  it('Aprovado quando melhor tentativa >= 70%', () => {
    const attempts = [
      { id: 'a1', roundId: 'round-1', score: 80, totalQuestions: 10, correctAnswers: 8, completedAt: new Date().toISOString(), answers: [], timeSpent: 120 },
    ];
    const round = makeRound({ attempts });
    const status = getRoundStatus(round, attempts[0]);
    expect(status.status).toBe('Aprovado');
  });
});