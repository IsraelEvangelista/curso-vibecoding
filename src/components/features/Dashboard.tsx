import { mockCurrentUser, mockRanking, mockLessons } from "@/lib/mockData";
import { Card, Badge, Avatar } from "@/components/ui";
import { Trophy, BookOpen, Award, TrendingUp } from "lucide-react";

export function Dashboard() {

  // Calcular progresso médio
  const unlockedLessons = mockLessons.filter((l) => !l.isLocked);
  const avgProgress =
    unlockedLessons.reduce((acc, l) => acc + (l.progress || 0), 0) /
      (unlockedLessons.length || 1);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8">
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
          {/* Card Progresso Geral */}
          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <BookOpen className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
              <Badge
                variant="success"
                className="text-xs font-semibold bg-theme-light-100 text-theme-light-700 dark:bg-theme-dark-900 dark:text-theme-dark-300"
              >
                {Math.round(avgProgress)}%
              </Badge>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Progresso Geral
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {unlockedLessons.length} / {mockLessons.length}
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-theme-light-500 to-theme-light-600 dark:from-theme-dark-500 dark:to-theme-dark-600 transition-all duration-500"
                style={{ width: `${avgProgress}%` }}
              />
            </div>
          </Card>

          {/* Card Pontuação Total */}
          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <Trophy className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
              <Badge
                variant="warning"
                className="text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
              >
                #{mockRanking.find((r) => r.user.id === mockCurrentUser.id)?.position || "N/A"}
              </Badge>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Pontuação Total
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockCurrentUser.totalPoints.toLocaleString("pt-BR")}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Presença + Quiz + Desafios
            </p>
          </Card>

          {/* Card Aulas Concluídas */}
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
              {unlockedLessons.filter((l) => (l.progress || 0) === 100).length}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              100% completadas
            </p>
          </Card>

          {/* Card Média de Nota */}
          <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                <TrendingUp className="h-6 w-6 text-theme-light-600 dark:text-theme-dark-400" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Média de Nota
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">8.5</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Média dos quizzes
            </p>
          </Card>
        </div>

        {/* Ranking Top 3 */}
        <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-amber-500" />
            Ranking Top 3
          </h2>
          <div className="space-y-4">
            {mockRanking.slice(0, 3).map((entry, idx) => (
              <div
                key={entry.user.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#050505] hover:bg-gray-100 dark:hover:bg-[#0f0f0f] transition-colors"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      idx === 0
                        ? "bg-amber-500"
                        : idx === 1
                          ? "bg-gray-400"
                          : "bg-amber-700"
                    }`}
                  >
                    {entry.position}
                  </div>
                </div>
                <Avatar
                  src={entry.user.avatar}
                  alt={entry.user.name}
                  className="h-12 w-12"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {entry.user.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {entry.points.total.toLocaleString("pt-BR")} pontos
                  </p>
                </div>
                <Badge
                  variant={entry.trend === "up" ? "success" : "default"}
                  className="text-xs"
                >
                  {entry.trend === "up" ? "↑" : entry.trend === "down" ? "↓" : "•"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
