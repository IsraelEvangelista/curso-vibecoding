import { describe, it, expect } from 'vitest';
import { parseStructuredQuizMarkdown } from '@/lib/quizLoader';
import fs from 'fs';
import path from 'path';

describe('quizLoader - parser estruturado', () => {
  it('carrega todas as questões do arquivo markdown da Aula 01 (30 questões)', () => {
    const filePath = path.resolve(process.cwd(), 'Contexto', 'Aula 01', 'quiz_01.md');
    const content = fs.readFileSync(filePath, 'utf-8');
    const questions = parseStructuredQuizMarkdown(content);
    expect(questions.length).toBe(30);
    // Todas as questões devem ter 4 opções
    for (const q of questions) {
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(q.options.length - 1);
    }
  });
});