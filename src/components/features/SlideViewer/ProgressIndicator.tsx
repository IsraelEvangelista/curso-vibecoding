import { useEffect, useRef } from 'react';

interface ProgressIndicatorProps {
  total: number;
  current: number;
  onGoToSlide: (index: number) => void;
}

export function ProgressIndicator({ total, current, onGoToSlide }: ProgressIndicatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll to keep the active item centered
  useEffect(() => {
    const activeElement = itemsRef.current[current];
    if (activeElement && containerRef.current) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [current]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[11000] bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-3">
        
        {/* Text Indicator */}
        <div className="text-sm font-medium text-gray-900 dark:text-white transition-all duration-300">
          Slide {current + 1} de {total}
        </div>

        {/* Scrollable Bar Container */}
        <div 
          ref={containerRef}
          className="w-full max-w-md overflow-x-auto relative flex items-center"
          style={{
            scrollSnapType: 'x mandatory',
            paddingLeft: 'calc(50% - 12px)', 
            paddingRight: 'calc(50% - 12px)',
            // Hide scrollbar for Firefox, Chrome, Safari, Opera
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex items-center space-x-3 min-w-max px-4 no-scrollbar"> 
            {Array.from({ length: total }).map((_, index) => (
              <button
                key={index}
                ref={el => itemsRef.current[index] = el}
                onClick={() => onGoToSlide(index)}
                className={`flex-shrink-0 h-2 rounded-full transition-all duration-300 ease-out scroll-snap-align-center ${
                  index === current
                    ? 'w-16 bg-green-500 dark:bg-green-400 shadow-lg shadow-green-500/30'
                    : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                style={{ scrollSnapAlign: 'center' }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
