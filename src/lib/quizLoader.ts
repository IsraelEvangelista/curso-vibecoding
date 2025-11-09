import type { QuizQuestion, QuizRound } from "@/types";
import { mockLessons } from "@/lib/mockData";
import { shuffleArray, shuffleOptions } from "@/lib/utils";

// Tenta carregar perguntas do markdown da Aula 01. Caso não exista, usa mockData da aula.
export async function loadQuizQuestionsForLesson(lessonId: string): Promise<QuizQuestion[]> {
  // Aula 01: fonte preferencial é o markdown em src/Contexto/Aula 01/quiz_01.md
  if (lessonId === "aula1") {
    try {
      // Tentar via fetch de asset público: /Contexto/Aula 01/quiz_01.md
      const mdUrl = "/Contexto/" + encodeURIComponent("Aula 01") + "/quiz_01.md";
      const res = await fetch(mdUrl);
      if (res.ok) {
        const content = await res.text();
        // Tentar parser estruturado (títulos + opções + resposta). Se falhar, tentar bloco JSON.
        let parsed = parseStructuredQuizMarkdown(content);
        if (parsed.length === 0) {
          parsed = parseQuizMarkdown(content);
        }
        if (parsed.length > 0) {
          return parsed;
        }
      }
      // Fallback: tentar import dinâmico do arquivo em src (quando servido como módulo)
      const mdImportPath = "@/Contexto/Aula 01/quiz_01.md?raw";
      try {
        // @vite-ignore evita pré-transform erro quando o arquivo não existe
        const mod: any = await import(/* @vite-ignore */ mdImportPath as any);
        const content = typeof mod === "string" ? mod : mod?.default ?? "";
        let parsed = parseStructuredQuizMarkdown(content);
        if (parsed.length === 0) {
          parsed = parseQuizMarkdown(content);
        }
        if (parsed.length > 0) {
          return parsed;
        }
      } catch (_) {
        // silencioso – seguirá para mockData
      }
    } catch (err) {
      console.warn("[quizLoader] Falha ao obter quiz_01.md via fetch; utilizando mockData da aula1.");
    }
  }

  const lesson = mockLessons.find((l) => l.id === lessonId);
  return lesson?.quiz.questions ?? [];
}

// Parser simples: prioriza bloco JSON dentro do markdown. Exemplo esperado:
// ```json
// [
//   { "id": "aula1-q1", "question": "...", "options": ["A","B","C","D"], "correctAnswer": 1, "explanation": "...", "difficulty": "easy" },
//   ... 30 itens no total
// ]
// ```
function parseQuizMarkdown(content: string): QuizQuestion[] {
  try {
    const jsonBlockRegex = /```json([\s\S]*?)```/i;
    const match = content.match(jsonBlockRegex);
    if (match && match[1]) {
      const jsonText = match[1].trim();
      const arr = JSON.parse(jsonText) as Array<{
        id: string;
        question: string;
        options: string[];
        correctAnswer: number;
        explanation?: string;
        difficulty?: string;
      }>;

      // Normalização de campos e sanitização mínima
      return arr.map((q, idx) => ({
        id: q.id || `aula1-q${idx + 1}`,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || "",
        // Campo opcional difficulty é suportado pela tipagem (oculto no UI)
        difficulty: (q as any).difficulty,
      } as QuizQuestion));
    }
  } catch (e) {
    console.warn("[quizLoader] Falha ao parsear bloco JSON do markdown.", e);
  }
  // Caso não haja bloco JSON válido, retorna vazio para acionar fallback
  return [];
}

// Parser para o formato estruturado do markdown (títulos, opções e resposta)
export function parseStructuredQuizMarkdown(content: string): QuizQuestion[] {
  // Parser global: captura todas as perguntas no documento, independente dos níveis.
  const normalized = content.replace(/\r/g, "");
  const results: QuizQuestion[] = [];
  let globalIndex = 0;

  // Encontrar índices de início de cada pergunta
  const headerRegex = /###\s*Pergunta\s*\d+/gmi;
  const indices: number[] = [];
  let headerMatch: RegExpExecArray | null;
  while ((headerMatch = headerRegex.exec(normalized)) !== null) {
    indices.push(headerMatch.index);
  }

  // Construir blocos com base nos índices encontrados
  for (let i = 0; i < indices.length; i++) {
    const start = indices[i];
    const end = i + 1 < indices.length ? indices[i + 1] : normalized.length;
    const qBlock = normalized.slice(start, end);

    // Remover a linha do cabeçalho para analisar o conteúdo
    const qContent = qBlock.replace(/^###\s*Pergunta\s*\d+\s*\n/i, "");

    const ansMatch = qContent.match(/\*\*Resposta:\*\*\s*([A-D])/i);
    if (!ansMatch) continue;

    const answerLetter = ansMatch[1].toUpperCase();
    const correctIndex = ["A", "B", "C", "D"].indexOf(answerLetter);
    if (correctIndex < 0) continue;

    // Texto da pergunta até a primeira opção
    const firstOptionIndex = qContent.search(/^[A-D]\)\s+/m);
    const questionText = (firstOptionIndex >= 0
      ? qContent.slice(0, firstOptionIndex)
      : qContent
    )
      .trim();

    // Opções
    const optionMatches = qContent.match(/^\s*[A-D]\)\s+.*$/gmi) || [];
    const options = optionMatches
      .map((line) => line.replace(/^\s*[A-D]\)\s+/, "").trim().replace(/\s+$/g, ""))
      .filter((opt) => opt.length > 0);
    if (options.length < 2) continue;

    results.push({
      id: `aula1-q${++globalIndex}`,
      question: questionText,
      options,
      correctAnswer: correctIndex,
      explanation: "",
    });
  }

  return results;
}

// Geração assíncrona das rodadas (3 rodadas x 10 questões)
export async function generateQuizRoundsAsync(lessonId: string): Promise<QuizRound[]> {
  const allQuestions = await loadQuizQuestionsForLesson(lessonId);
  const shuffledQuestions = shuffleArray(allQuestions);
  const roundsPerQuiz = 3;
  const questionsPerRound = 10;

  return Array.from({ length: roundsPerQuiz }, (_, roundIndex) => {
    const startIndex = roundIndex * questionsPerRound;
    const endIndex = startIndex + questionsPerRound;
    const roundQuestions = shuffledQuestions.slice(startIndex, endIndex).map(shuffleOptions);

    return {
      id: `round-${roundIndex + 1}`,
      title: `Rodada ${roundIndex + 1}`,
      questions: roundQuestions,
      maxAttempts: 3,
      attempts: [],
      isLocked: roundIndex > 0,
      requiredScore: 70,
    };
  });
}