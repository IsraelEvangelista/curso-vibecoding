import type { FC } from 'react'
import { useState } from 'react'
import { Card, Button, Badge } from '@/components/ui'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'
import { BookOpen, Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import type { Lesson } from '@/types'

type Props = {
  lesson: Lesson
  expanded: boolean
  onToggleExpand: () => void
  onOpen: () => void
  onStatusChange?: (id: string, isActive: boolean) => void
}

export const LessonCard: FC<Props> = ({ lesson, expanded, onToggleExpand, onOpen, onStatusChange }) => {
  const { isAdmin } = useAuth()
  const lessonIsActive = lesson.isActive ?? !lesson.isLocked
  const lockedForStudent = !isAdmin && !lessonIsActive
  const [toastMsg, setToastMsg] = useState<string | null>(null)
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  return (
    <Card className="p-6 bg-white dark:bg-[#0a0a0a] rounded-xl">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
              <BookOpen className="h-5 w-5 text-theme-light-600 dark:text-theme-dark-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{lesson.title}</h3>
                {isAdmin && (
                  <Badge variant={lessonIsActive ? 'success' : 'danger'} className="ml-2">
                    {lessonIsActive ? 'Ativa' : 'Bloqueada'}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ordem {String(lesson.order).padStart(2, '0')}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button className="btn-outline" onClick={onToggleExpand}>
              {expanded ? (
                <span className="flex items-center gap-1">
                  <ChevronUp className="h-4 w-4" /> Ocultar descrição
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <ChevronDown className="h-4 w-4" /> Ver descrição
                </span>
              )}
            </Button>
            <Button className="btn-neon" onClick={onOpen} disabled={lockedForStudent}>
              {lockedForStudent ? (
                <span className="flex items-center gap-1">
                  <ChevronDown className="h-4 w-4" /> Aula bloqueada
                </span>
              ) : (
                'Entrar na Aula'
              )}
            </Button>
            <Button
              className="btn-outline"
              onClick={() => lesson.videoUrl && window.open(lesson.videoUrl!, '_blank', 'noopener,noreferrer')}
              disabled={!lesson.videoUrl}
            >
              Ver vídeo
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-56">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Seções</div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <BookOpen className="h-4 w-4" />
            <span>Conteúdo</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <CheckCircle className="h-4 w-4" />
            <span>Quiz (10 questões)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Award className="h-4 w-4" />
            <span>Desafio Prático</span>
          </div>
          {isAdmin && (
            <div className="mt-2">
              <div className="grid grid-cols-2 gap-2">
                <Button className="btn-outline w-full" onClick={async () => {
                  try {
                    await supabase.from('lessons').update({ is_active: true }).eq('id', lesson.id)
                    setToastType('success')
                    setToastMsg('Aula ativada com sucesso')
                    setTimeout(() => setToastMsg(null), 3000)
                    onStatusChange?.(lesson.id, true)
                  } catch (e) {
                    setToastType('error')
                    setToastMsg('Falha ao ativar a aula')
                    setTimeout(() => setToastMsg(null), 3000)
                  }
                }}>Ativar aula</Button>
                <Button className="btn-outline w-full" onClick={async () => {
                  try {
                    await supabase.from('lessons').update({ is_active: false }).eq('id', lesson.id)
                    setToastType('success')
                    setToastMsg('Aula bloqueada com sucesso')
                    setTimeout(() => setToastMsg(null), 3000)
                    onStatusChange?.(lesson.id, false)
                  } catch (e) {
                    setToastType('error')
                    setToastMsg('Falha ao bloquear a aula')
                    setTimeout(() => setToastMsg(null), 3000)
                  }
                }}>Bloquear aula</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-[#050505]">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {lesson.description.split(';').map((item, idx) => {
              const trimmed = item.trim()
              if (trimmed.includes('|')) {
                const [mainItem, ...subItems] = trimmed.split('|')
                return (
                  <li key={idx}>
                    <div className="flex items-start gap-2">
                      <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                      <div>
                        <div>{mainItem.replace(':', '').trim()}</div>
                        <ul className="ml-4 mt-1 space-y-1">
                          {subItems.map((sub, subIdx) => (
                            <li key={subIdx} className="flex items-start gap-2">
                              <span className="text-theme-light-500 dark:text-theme-dark-500">•</span>
                              <span>{sub.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              }
              return (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                  <span>{trimmed}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {toastMsg && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className={`${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white rounded-xl shadow-lg px-4 py-3 text-sm flex items-center gap-3`}>
            <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
            <span>{toastMsg}</span>
          </div>
        </div>
      )}
    </Card>
  )
}

