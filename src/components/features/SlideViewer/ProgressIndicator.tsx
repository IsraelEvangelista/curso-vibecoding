import type { FC } from 'react'

type Props = {
  total: number
  current: number
  onGoToSlide: (index: number) => void
}

export const ProgressIndicator: FC<Props> = ({ total, current, onGoToSlide }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[11000] bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {`Slide ${current + 1} de ${total}`}
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: total }).map((_, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => onGoToSlide(index)}
                  className={`h-2 w-8 rounded-full transition-all cursor-pointer hover:scale-110 ${
                    index === current
                      ? 'bg-green-500 dark:bg-green-400'
                      : index < current
                      ? 'bg-green-300 dark:bg-green-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  title={`Ir para slide ${index + 1}`}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {`Slide ${index + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

