import { mockCurrentUser, mockRanking, mockLessonScores } from "@/lib/mockData";
import { Card, Badge } from "@/components/ui";
import { Trophy, BookOpen, Award, TrendingUp, Target } from "lucide-react";
import { GAMIFICATION_CONFIG } from "@/lib/constants";

export function Dashboard() {
  const weights = GAMIFICATION_CONFIG.weights;
  const lessonPoints = mockLessonScores.map((lesson) => {
    const presencePoints = lesson.presenceScore * weights.presence;
    const quizPoints = lesson.quizScore * weights.quiz;
    const challengePoints = lesson.challengeScore * weights.challenge;
    const totalPoints = presencePoints + quizPoints + challengePoints;

    return {
      ...lesson,
      presencePoints,
      quizPoints,
      challengePoints,
      totalPoints,
    };
  });

  const totalLessons = lessonPoints.length || 1;
  const completedLessons = lessonPoints.filter((lesson) => lesson.completed).length;
  const lessonsWithScore =
    lessonPoints.filter((lesson) => lesson.totalPoints > 0).length || 1;
  const cumulativePoints = lessonPoints.reduce((sum, lesson) => sum + lesson.totalPoints, 0);
  const averagePerLesson = cumulativePoints / lessonsWithScore;
  const progressPercent = (completedLessons / totalLessons) * 100;
  const rankingPosition =
    mockRanking.find((r) => r.user.id === mockCurrentUser.id)?.position ?? "N/A";

  const formatPoints = (value: number, digits = 1) =>
    value.toLocaleString("pt-BR", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    });

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Bem-vindo,{" "}
            <span
              className="inline-block"
              style={{
                textShadow:
                  "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)",
              }}
            >
              {mockCurrentUser.name}
            </span>
            !
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe seu progresso e desempenho no Curso Vibe Coding
          </p>
        </div>

        <style>{`
          .dark h1 span {
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4) !important;
          }
        `}</style>

        {/* Grid de indicadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <BookOpen className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
              <Badge
                variant="success"
                className="text-xs font-semibold bg-theme-light-100 text-theme-light-700 dark:bg-theme-dark-900 dark:text-theme-dark-300"
              >
                {Math.round(progressPercent)}%
              </Badge>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Progresso nas aulas
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {completedLessons} / {totalLessons}
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-theme-light-500 to-theme-light-600 dark:from-theme-dark-500 dark:to-theme-dark-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <Trophy className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
              <Badge
                variant="warning"
                className="text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
              >
                #{rankingPosition}
              </Badge>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Pontuação Total
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPoints(cumulativePoints, 1)} pts
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Presença ×1.2 • Quiz ×1.0 • Desafio ×1.5
            </p>
          </Card>

          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <Award className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Aulas Concluídas
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {completedLessons}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              de {totalLessons} aulas previstas
            </p>
          </Card>

          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <TrendingUp className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Média por aula
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPoints(averagePerLesson, 1)} pts
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Considerando aulas com pontuação registrada
            </p>
          </Card>
        </div>

        <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                <Target className="h-4 w-4" />
                desempenho por aula
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                Pontuações ponderadas
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visualize quanto você já conquistou em presença, quizzes e desafios.
              </p>
            </div>
            <Badge className="self-start bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {totalLessons} aulas monitoradas
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessonPoints.map((lesson) => {
              const metrics = [
                {
                  label: "Presença",
                  value: lesson.presencePoints,
                  raw: lesson.presenceScore,
                  barColor: "from-emerald-500 to-emerald-400",
                },
                {
                  label: "Quiz",
                  value: lesson.quizPoints,
                  raw: lesson.quizScore,
                  barColor: "from-indigo-500 to-indigo-400",
                },
                {
                  label: "Desafio",
                  value: lesson.challengePoints,
                  raw: lesson.challengeScore,
                  barColor: "from-amber-500 to-amber-400",
                },
              ];

              return (
                <div
                  key={lesson.id}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#050505] p-5 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
                        Aula {lesson.order.toString().padStart(2, "0")}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {lesson.title}
                      </h3>
                    </div>
                    <Badge variant={lesson.completed ? "success" : "outline"} className="text-xs">
                      {lesson.completed ? "Concluída" : "Em andamento"}
                    </Badge>
                  </div>

                  <div className="mt-4 space-y-4">
                    {metrics.map((metric) => {
                      const percentage = Math.min(100, (metric.raw / 10) * 100);
                      return (
                        <div key={`${lesson.id}-${metric.label}`}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300 font-medium">
                              {metric.label}
                            </span>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {formatPoints(metric.value)} pts
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                            {formatPoints(metric.raw)} / 10
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${metric.barColor}`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 dark:border-gray-900 pt-4">
                    <div>
                      <p className="text-xs uppercase text-gray-500 dark:text-gray-500 font-semibold">
                        Total ponderado
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Atualizado em {formatDate(lesson.updatedAt)}
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatPoints(lesson.totalPoints, 1)} pts
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
