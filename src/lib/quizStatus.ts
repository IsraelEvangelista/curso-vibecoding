import type { QuizRound, QuizRoundAttempt } from "@/types";

export type RoundStatusUI = {
  status: string;
  statusColor: string;
  badgeColor: string;
  answeredText: string;
  answeredLabel: string;
  answeredColor: string;
};

export type QuizRoundWithProgress = QuizRound & { currentAnswered: number };

export function getRoundStatus(
  round: QuizRoundWithProgress,
  bestAttempt: QuizRoundAttempt | null
): RoundStatusUI {
  if (!bestAttempt) {
    const inProgress = round.currentAnswered > 0;
    return {
      status: inProgress ? "Em progresso" : "Não tentado",
      statusColor: inProgress ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400",
      badgeColor: inProgress
        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
      answeredText: `${round.currentAnswered}/${round.questions.length}`,
      answeredLabel: "Respondidas",
      answeredColor: inProgress ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400",
    };
  }

  const passed = bestAttempt.score >= 70;
  const exhausted = round.attempts.length >= round.maxAttempts && !passed;

  return {
    status: passed ? "Aprovado" : exhausted ? "Falha" : "Tentado",
    statusColor: passed ? "text-green-600 dark:text-green-400" : exhausted ? "text-red-600 dark:text-red-400" : "text-yellow-600 dark:text-yellow-400",
    badgeColor: passed
      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
      : exhausted
        ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
    answeredText: `${bestAttempt.correctAnswers}/${round.questions.length}`,
    answeredLabel: "Acertos",
    answeredColor: passed ? "text-green-600 dark:text-green-400" : exhausted ? "text-red-600 dark:text-red-400" : "text-yellow-600 dark:text-yellow-400",
  };
}