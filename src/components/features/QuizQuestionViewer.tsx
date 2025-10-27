import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/features/QuizHeader";
import { QuizResultModal } from "@/components/features/QuizResultModal";
import type { QuizQuestionViewerProps, QuizRoundAttempt } from "@/types";

// Funções para persistência no localStorage
const saveCurrentAnswers = (lessonId: string, roundId: string, answers: number[]) => {
  if (typeof window === "undefined") return;
  const key = `quiz_${lessonId}_${roundId}_current_answers`;
  localStorage.setItem(key, JSON.stringify(answers));
};

const clearCurrentAnswers = (lessonId: string, roundId: string) => {
  if (typeof window === "undefined") return;
  const key = `quiz_${lessonId}_${roundId}_current_answers`;
  localStorage.removeItem(key);
};

const saveRoundAttempt = (lessonId: string, roundId: string, attempt: QuizRoundAttempt) => {
  if (typeof window === "undefined") return;
  const key = `quiz_${lessonId}_${roundId}_attempts`;
  const attempts = JSON.parse(localStorage.getItem(key) || '[]');
  attempts.push(attempt);
  localStorage.setItem(key, JSON.stringify(attempts));
  clearCurrentAnswers(lessonId, roundId);
};

export function QuizQuestionViewer({
  round,
  questionIndex,
  answers,
  onAnswerChange,
  onPrevious,
  onNext,
  onComplete,
  onExit,
  canGoPrevious,
  canGoNext,
  isLastQuestion
}: QuizQuestionViewerProps) {
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultData, setResultData] = useState<{
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    timeSpent: number;
    passed: boolean;
  } | null>(null);
  
  const navigate = useNavigate();
  const currentQuestion = round.questions[questionIndex];
  const currentAnswer = answers[questionIndex] ?? -1;

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  // Salvar respostas automaticamente
  useEffect(() => {
    const urlParts = window.location.pathname.split('/');
    const lessonId = urlParts[2];
    const roundId = urlParts[4];
    saveCurrentAnswers(lessonId, roundId, answers);
  }, [answers]);

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    onAnswerChange(questionIndex, answerIndex);
  }, [questionIndex, onAnswerChange]);

  const handleComplete = useCallback(() => {
    // Calcular resultados
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === round.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / round.questions.length) * 100);
    const passed = score >= 70;
    const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);

    const attemptData: QuizRoundAttempt = {
      id: `attempt_${Date.now()}`,
      roundId: round.id,
      score,
      totalQuestions: round.questions.length,
      correctAnswers,
      completedAt: new Date().toISOString(),
      answers: [...answers],
      timeSpent: finalTimeSpent
    };

    // Salvar tentativa
    const urlParts = window.location.pathname.split('/');
    const lessonId = urlParts[2];
    saveRoundAttempt(lessonId, round.id, attemptData);

    // Preparar dados do modal
    setResultData({
      score,
      correctAnswers,
      totalQuestions: round.questions.length,
      timeSpent: finalTimeSpent,
      passed
    });

    setShowResultModal(true);
    onComplete?.();
  }, [answers, round, startTime, onComplete]);

  const handleModalClose = useCallback(() => {
    setShowResultModal(false);
    if (resultData?.passed) {
      // Se aprovado, voltar para a página do quiz
      navigate(`/aula/${window.location.pathname.split('/')[2]}/quiz`);
    }
  }, [resultData, navigate]);

  const handleRetry = useCallback(() => {
    setShowResultModal(false);
    // Limpar respostas e recarregar a página
    const urlParts = window.location.pathname.split('/');
    const lessonId = urlParts[2];
    const roundId = urlParts[4];
    clearCurrentAnswers(lessonId, roundId);
    window.location.reload();
  }, []);

  const handleExit = useCallback(() => {
    onExit();
    navigate(`/aula/${window.location.pathname.split('/')[2]}/quiz`);
  }, [onExit, navigate]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000]">
      {/* Header */}
      <QuizHeader
        round={round}
        questionIndex={questionIndex}
        answers={answers}
        onPrevious={onPrevious}
        onNext={onNext}
        onComplete={handleComplete}
        onExit={handleExit}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        isLastQuestion={isLastQuestion}
        timeSpent={timeSpent}
      />

      {/* Conteúdo da Questão */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="w-full max-w-4xl mx-auto">
          <div className="card-static p-8 sm:p-12 min-h-[calc(100vh-12rem)] overflow-y-auto">
            {/* Cabeçalho da Questão */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Questão {questionIndex + 1}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Tempo: {formatTime(timeSpent)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {questionIndex + 1} de {round.questions.length}
                  </span>
                </div>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-300 rounded-full"></div>
            </div>

            {/* Texto da Questão */}
            <div className="mb-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  {currentQuestion.question}
                </p>
              </div>
            </div>

            {/* Opções de Resposta */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = currentAnswer === optionIndex;
                 
                return (
                  <div
                    key={optionIndex}
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                    onClick={() => handleAnswerSelect(optionIndex)}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Radio Button Customizado */}
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 mt-0.5 ${
                        isSelected
                          ? 'border-green-500 dark:border-green-400 bg-green-500 dark:bg-green-400'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                       
                      {/* Texto da Opção */}
                      <div className="flex-1">
                        <span className={`text-base ${
                          isSelected
                            ? 'text-green-700 dark:text-green-300 font-medium'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicadores de Progresso */}
            <div className="mt-12 flex items-center justify-between sticky bottom-0 bg-white dark:bg-[#000000] py-4 -mx-8 px-8">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Respondidas: {answers.filter(a => a !== -1).length} / {round.questions.length}
              </div>
              
              <div className="flex space-x-2">
                {round.questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all ${
                      answers[index] !== -1
                        ? 'bg-green-500 dark:bg-green-400'
                        : index === questionIndex
                        ? 'bg-yellow-500 dark:bg-yellow-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Resultados */}
        {showResultModal && resultData && (
          <QuizResultModal
            isOpen={showResultModal}
            onClose={handleModalClose}
            score={resultData.score}
            totalQuestions={resultData.totalQuestions}
            correctAnswers={resultData.correctAnswers}
            timeSpent={resultData.timeSpent}
            passed={resultData.passed}
            onRetry={handleRetry}
            onExit={handleExit}
            roundTitle={round.title}
          />
        )}
      </div>
    </div>
  );
}

export default QuizQuestionViewer;
