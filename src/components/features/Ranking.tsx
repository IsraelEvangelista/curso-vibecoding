import {
  Trophy,
  Medal,
  Award,
  Target,
  Star,
  Users,
  Crown
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, Avatar } from '@/components/ui';
import { mockRanking, mockUsers } from '@/lib/mockData';
import { formatPoints, getTrendIcon, getTrendColor } from '@/lib/utils';

export function Ranking() {
  const getMedalIcon = (position: number) => {
    switch (position) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-orange-600" />;
      default: return <span className="text-lg font-bold text-gray-600 dark:text-gray-400">#{position}</span>;
    }
  };

  const getRankingCardClass = (position: number) => {
    if (position === 1) return 'border-yellow-500 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900';
    if (position === 2) return 'border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900';
    if (position === 3) return 'border-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900';
    return '';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Ranking de Alunos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Acompanhe o desempenho dos melhores alunos do curso
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockRanking.slice(0, 3).map((entry) => (
          <Card
            key={entry.user.id}
            className={`${getRankingCardClass(entry.position)} relative overflow-hidden bg-white dark:bg-[#0a0a0a]`}
          >
            <CardContent className="p-6 text-center">
              {/* Medal */}
              <div className="flex justify-center mb-4">
                {getMedalIcon(entry.position)}
              </div>

              {/* Avatar */}
              <Avatar
                src={entry.user.avatar}
                alt={entry.user.name}
                className="h-16 w-16 mx-auto mb-3 border-2 border-white dark:border-gray-800"
              />

              {/* User Info */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {entry.user.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {entry.user.email}
              </p>

              {/* Points */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPoints(entry.points.total)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  pontos totais
                </div>
              </div>

              {/* Trend */}
              <div className={`flex items-center justify-center space-x-1 mt-3 ${getTrendColor(entry.trend)}`}>
                <span className="text-lg">{getTrendIcon(entry.trend)}</span>
                <span className="text-sm font-medium">
                  {entry.trend === 'up' ? 'Subindo' : entry.trend === 'down' ? 'Descendo' : 'Estável'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Ranking Table */}
      <Card className="bg-white dark:bg-[#0a0a0a]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span>Classificação Completa</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Posição</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Aluno</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Total</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Presença</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Quizzes</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Desafios</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Tendência</th>
                </tr>
              </thead>
              <tbody>
                {mockRanking.map((entry, index) => (
                  <tr
                    key={entry.user.id}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index < 3 ? 'font-semibold' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {index < 3 ? (
                          getMedalIcon(entry.position)
                        ) : (
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            #{entry.position}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar
                          src={entry.user.avatar}
                          alt={entry.user.name}
                          className="h-8 w-8"
                        />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {entry.user.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {entry.user.role}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {formatPoints(entry.points.total)}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-blue-600 dark:text-blue-400">
                          {formatPoints(entry.points.presence)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          x1.2
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-green-600 dark:text-green-400">
                          {formatPoints(entry.points.quizzes)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          x1.0
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-purple-600 dark:text-purple-400">
                          {formatPoints(entry.points.challenges)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          x1.5
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className={`flex items-center justify-center space-x-1 ${getTrendColor(entry.trend)}`}>
                        <span>{getTrendIcon(entry.trend)}</span>
                        <span className="text-sm">
                          {entry.trend === 'up' ? '↑' : entry.trend === 'down' ? '↓' : '→'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card className="bg-white dark:bg-[#0a0a0a]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockUsers.length}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Alunos ativos
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0a0a0a]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média de Pontos</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPoints(Math.round(mockRanking.reduce((acc, r) => acc + r.points.total, 0) / mockRanking.length))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Por aluno
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0a0a0a]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontuação Máxima</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPoints(Math.max(...mockRanking.map(r => r.points.total)))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {mockRanking.find(r => r.points.total === Math.max(...mockRanking.map(r => r.points.total)))?.user.name}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0a0a0a]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos em Destaque</CardTitle>
            <Star className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockRanking.filter(r => r.points.total > 1000).length}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Acima de 1000 pontos
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
}
