import { createPortal } from "react-dom";
import { 
  X, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Target, 
  RotateCcw, 
  ArrowRight,
  Trophy
} from "lucide-react";
import type { QuizResultModalProps } from "@/types";

export function QuizResultModal({
  isOpen,
  onClose,
  score,
  totalQuestions,
  correctAnswers,
  timeSpent,
  passed,
  canRetry,
  onRetry,
  onExit,
  roundTitle
}: QuizResultModalProps) {
  if (!isOpen) return null;

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-blue-600 dark:text-blue-400';
    if (score >= 50) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBg = (score: number): string => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900';
    if (score >= 70) return 'bg-blue-100 dark:bg-blue-900';
    if (score >= 50) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  const modalContent = (
    <div className="fixed inset-0 z-[16000] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-[#000000] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Resultado do Quiz
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Fechar"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Icon e Mensagem */}
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              passed 
                ? 'bg-green-100 dark:bg-green-900' 
                : 'bg-red-100 dark:bg-red-900'
            }`}>
              {passed ? (
                <Trophy className="h-8 w-8 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <h4 className={`text-2xl font-bold mb-2 ${
              passed 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {passed ? 'Parabéns!' : 'Continue tentando!'}
            </h4>
            
            <p className="text-gray-600 dark:text-gray-300">
              {passed 
                ? `Você foi aprovado na ${roundTitle} com excelente desempenho!`
                : `Você não alcançou a pontuação mínima na ${roundTitle}. Revise o conteúdo e tente novamente.`
              }
            </p>
          </div>

          {/* Score Principal */}
          <div className={`text-center p-6 rounded-xl ${getScoreBg(score)}`}>
            <div className="text-4xl font-bold mb-2">
              <span className={getScoreColor(score)}>{score}%</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Pontuação final
            </div>
          </div>

          {/* Estatísticas Detalhadas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Target className="h-6 w-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Acertos
              </div>
            </div>

            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Clock className="h-6 w-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatTime(timeSpent)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Tempo
              </div>
            </div>

            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {Math.round((correctAnswers / totalQuestions) * 100)}%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Precisão
              </div>
            </div>
          </div>

          {/* Mensagem de Feedback */}
          <div className={`p-4 rounded-lg border ${
            passed 
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
          }`}>
            <div className="flex items-start space-x-3">
              {passed ? (
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className={`text-sm font-medium ${
                  passed 
                    ? 'text-green-800 dark:text-green-200' 
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {passed ? 'Aprovado!' : 'Não aprovado'}
                </p>
                <p className={`text-sm mt-1 ${
                  passed 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {passed 
                    ? 'Você desbloqueou a próxima rodada! Continue com o excelente trabalho.'
                    : canRetry === false
                      ? 'Você atingiu o limite de 3 tentativas nesta rodada. Você pode avançar para a próxima, com status de falha.'
                      : 'A pontuação mínima para aprovação é 70%. Estude mais um pouco e tente novamente.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700 space-x-3">
          {!passed && canRetry !== false && (
            <button
              onClick={onRetry}
              className="btn-outline flex items-center space-x-2 px-4 py-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Tentar Novamente</span>
            </button>
          )}

          <div className="flex-1 flex justify-end">
            <button
              onClick={onExit}
              className={`btn-neon flex items-center space-x-2 px-4 py-2 ${
                !passed ? 'w-full justify-center' : ''
              }`}
            >
              <span>{passed ? 'Continuar' : 'Sair'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default QuizResultModal;