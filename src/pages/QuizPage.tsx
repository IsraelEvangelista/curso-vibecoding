import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, CheckCircle, Clock, Trophy, Lock } from "lucide-react";
import type { QuizPageProps, QuizRoundAttempt } from "@/types";
import { mockLessons } from "@/lib/mockData";
import { generateQuizRoundsAsync } from "@/lib/quizLoader";
import { getRoundStatus, QuizRoundWithProgress } from "@/lib/quizStatus";

// Removido: geração local de rodadas. Usar generateQuizRoundsAsync (carrega markdown para aula1).

// Funções para persistência no localStorage
const loadRoundAttempts = (lessonId: string, roundId: string): QuizRoundAttempt[] => {
  if (typeof window === "undefined") return [];
  const key = `quiz_${lessonId}_${roundId}_attempts`;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const loadCurrentRoundAnswers = (lessonId: string, roundId: string): number[] => {
  if (typeof window === "undefined") return [];
  const key = `quiz_${lessonId}_${roundId}_current_answers`;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

const hasUnlockedRound = (lessonId: string, roundIndex: number): boolean => {
  if (roundIndex === 0) {
    return true;
  }

  const previousRoundId = `round-${roundIndex}`;
  const attempts = loadRoundAttempts(lessonId, previousRoundId);
  const passed = attempts.some((attempt) => attempt.score >= 70);
  const exhausted = attempts.length >= 3; // liberar após 3 falhas
  return passed || exhausted;
};

// Tipagem compartilhada via módulo quizStatus

export function QuizPage({ lessonId, onExit, onNavigateToSlides, onNavigateToChallenge }: QuizPageProps) {
  const navigate = useNavigate();
  const [rounds, setRounds] = useState<QuizRoundWithProgress[]>([]);

  useEffect(() => {
    // Carregar rodadas (com markdown para aula1)
    generateQuizRoundsAsync(lessonId).then((quizRounds) => {
      // Carregar tentativas anteriores e atualizar status das rodadas
      const roundsWithAttempts = quizRounds.map((round, index) => {
        const attempts = loadRoundAttempts(lessonId, round.id);
        const currentAnswers = loadCurrentRoundAnswers(lessonId, round.id);
        const currentAnswered = currentAnswers.filter(answer => answer !== -1).length;

        return {
          ...round,
          attempts,
          isLocked: !hasUnlockedRound(lessonId, index),
          currentAnswered,
        };
      });
      setRounds(roundsWithAttempts);
    });
  }, [lessonId]);

  const handleRoundClick = (round: QuizRoundWithProgress) => {
    if (round.isLocked) return;
    navigate(`/aula/${lessonId}/quiz/${round.id}`);
  };

  const handleExit = () => {
    onExit();
    navigate('/aulas');
  };

  // getRoundStatus importado de '@/lib/quizStatus'

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[12000] header-3d">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Lado Esquerdo: Botão Sair e Título */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleExit}
                className="btn-outline flex items-center space-x-2 px-3 py-2"
                title="Sair do Quiz"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Voltar</span>
              </button>
              
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate max-w-xs">
                  Quiz - {mockLessons.find(l => l.id === lessonId)?.title || 'Aula'}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  3 rodadas de questões
                </p>
              </div>
            </div>

            {/* Centro: Progresso Geral */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {rounds.filter(r => r.attempts.length > 0).length}/{rounds.length}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Rodadas completas
                </div>
              </div>
            </div>

            {/* Lado Direito: Ações */}
            <div className="flex items-center space-x-2">
              <button
                onClick={onNavigateToSlides}
                className="btn-outline flex items-center space-x-1 px-3 py-2"
                title="Ver slides da aula"
              >
                <span className="hidden sm:inline">Slides</span>
              </button>

              <button
                onClick={onNavigateToChallenge}
                className="btn-outline flex items-center space-x-1 px-3 py-2"
                title="Ir para Desafio"
              >
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Desafio</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz de Avaliação
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Teste seu conhecimento em 3 rodadas progressivas. Cada rodada deve ser concluída 
              com 70% de acertos para desbloquear a próxima.
            </p>
          </div>

          {/* Grid de Cards das Rodadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {rounds.map((round, index) => {
              const bestAttempt = round.attempts.length > 0 
                ? round.attempts.reduce((best, current) => current.score > best.score ? current : best)
                : null;
              const status = getRoundStatus(round, bestAttempt);
              const isLocked = round.isLocked;
              const remainingAttempts = Math.max(round.maxAttempts - round.attempts.length, 0);
              const exhausted = remainingAttempts <= 0 && !(bestAttempt && bestAttempt.score >= 70);

              return (
                <div
                  key={round.id}
                  className={`card relative overflow-hidden ${
                    isLocked || exhausted ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'
                  } transition-all duration-300`}
                  onClick={() => !(isLocked || exhausted) && handleRoundClick(round)}
                >
                  {/* Status de Bloqueio */}
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10 flex items-center justify-center">
                      <Lock className="h-8 w-8 text-gray-300 dark:text-gray-500" />
                    </div>
                  )}

                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-300 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {round.title}
                      </h3>
                    </div>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.badgeColor}`}>
                      {status.status}
                    </span>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="space-y-4">
                    {/* Informações das Questões */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4" />
                        <span>{round.questions.length} questões</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4" />
                        <span>{Math.ceil(round.questions.length * 1.5)} min</span>
                      </div>
                    </div>

                    {/* Status de Respostas */}
                    <div className="text-center py-3">
                      <div className={`text-2xl font-bold ${status.answeredColor}`}>
                        {status.answeredText}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {status.answeredLabel}
                      </div>
                      <div className={`text-sm ${status.statusColor}`}>
                        {status.status}
                      </div>
                    </div>

                    {/* Melhor Pontuação */}
                    {bestAttempt && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Melhor pontuação:</span>
                          <span className={`font-bold ${bestAttempt.score >= 70 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                            {bestAttempt.score}%
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tentativas Restantes */}
                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Tentativas: {remainingAttempts}/{round.maxAttempts}
                      </div>
                    </div>
                  </div>

                  {/* Botão de Ação */}
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => handleRoundClick(round)}
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        isLocked
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                          : round.attempts.length > 0
                          ? 'btn-outline'
                          : 'btn-neon'
                      }`}
                      disabled={isLocked}
                    >
                      {isLocked ? 'Bloqueado' : 
                       exhausted ? 'Limite de tentativas alcançado' :
                       round.attempts.length > 0 ? 'Tentar novamente' : 
                       'Começar Rodada'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Informações Adicionais */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <strong>Regra de aprovação:</strong> Mínimo de 70% de acertos em cada rodada
            </p>
            <p>
              <strong>Dica:</strong> Revise os slides da aula antes de iniciar o quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
