import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizQuestionViewer } from "@/components/features/QuizQuestionViewer";
import type { QuizRound, QuizRoundAttempt } from "@/types";
import { generateQuizRoundsAsync } from "@/lib/quizLoader";

// Funções para persistência no localStorage
const loadCurrentAnswers = (lessonId: string, roundId: string): number[] => {
  if (typeof window === "undefined") return [];
  const key = `quiz_${lessonId}_${roundId}_current_answers`;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const saveCurrentAnswers = (lessonId: string, roundId: string, answers: number[]) => {
  if (typeof window === "undefined") return;
  const key = `quiz_${lessonId}_${roundId}_current_answers`;
  localStorage.setItem(key, JSON.stringify(answers));
};

const loadRoundAttempts = (lessonId: string, roundId: string): QuizRoundAttempt[] => {
  if (typeof window === "undefined") return [];
  const key = `quiz_${lessonId}_${roundId}_attempts`;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const hasUnlockedRound = (lessonId: string, roundIndex: number): boolean => {
  if (roundIndex === 0) {
    return true;
  }

  const previousRoundId = `round-${roundIndex}`;
  const previousAttempts = loadRoundAttempts(lessonId, previousRoundId);
  const passed = previousAttempts.some(attempt => attempt.score >= 70);
  const exhausted = previousAttempts.length >= 3;
  return passed || exhausted;
};

// Removida geração local; usar generateQuizRoundsAsync para carregar markdown em aula1.

export function QuizQuestionPage() {
  const navigate = useNavigate();
  const { id: lessonId, roundId } = useParams();
  const [currentRound, setCurrentRound] = useState<QuizRound | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!lessonId || !roundId) return;
    
    generateQuizRoundsAsync(lessonId).then((generated) => {
      const quizRounds = generated.map((round, index) => ({
        ...round,
        isLocked: !hasUnlockedRound(lessonId, index),
      }));
      const round = quizRounds.find(r => r.id === roundId);
    
      if (!round) {
        navigate(`/aula/${lessonId}/quiz`);
        return;
      }

      // Verificar se a rodada está desbloqueada
      if (round.isLocked) {
        navigate(`/aula/${lessonId}/quiz`);
        return;
      }

      setCurrentRound(round);
      setQuestionIndex(0);

      // Carregar respostas salvas
      const savedAnswers = loadCurrentAnswers(lessonId, roundId);
      const initialAnswers = new Array(round.questions.length).fill(-1);
      savedAnswers.forEach((answer, index) => {
        if (index < initialAnswers.length) {
          initialAnswers[index] = answer;
        }
      });
      setAnswers(initialAnswers);
    });
  }, [lessonId, roundId, navigate]);

  const handleAnswerChange = (qIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = answerIndex;
    setAnswers(newAnswers);
    
    // Salvar automaticamente
    if (lessonId && roundId) {
      saveCurrentAnswers(lessonId, roundId, newAnswers);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleNext = () => {
    if (questionIndex < (currentRound?.questions.length || 0) - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleComplete = () => {
    // Será handled pelo QuizQuestionViewer
  };

  const handleExit = () => {
    navigate(`/aula/${lessonId}/quiz`);
  };


  if (!currentRound) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Carregando...
          </h2>
        </div>
      </div>
    );
  }

  const canGoPrevious = questionIndex > 0;
  const canGoNext = questionIndex < currentRound.questions.length - 1;
  const isLastQuestion = questionIndex === currentRound.questions.length - 1;

  return (
    <QuizQuestionViewer
      round={currentRound}
      questionIndex={questionIndex}
      answers={answers}
      onAnswerChange={handleAnswerChange}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onComplete={handleComplete}
      onExit={handleExit}
      canGoPrevious={canGoPrevious}
      canGoNext={canGoNext}
      isLastQuestion={isLastQuestion}
    />
  );
}

export default QuizQuestionPage;
