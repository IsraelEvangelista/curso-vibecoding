import { useCallback, useMemo } from 'react'
import type { SlideDeck } from '../types'

export function useSlideNavigation(
  slideDeck: SlideDeck,
  setSlideDeck: (next: SlideDeck) => void,
  onSlideChange: (index: number) => void
) {
  const currentSlide = useMemo(() => slideDeck.slides[slideDeck.currentSlideIndex], [slideDeck])
  const canGoPrevious = slideDeck.currentSlideIndex > 0
  const canGoNext = slideDeck.currentSlideIndex < slideDeck.slides.length - 1

  const handlePrevious = useCallback(() => {
    if (slideDeck.currentSlideIndex > 0) {
      const newIndex = slideDeck.currentSlideIndex - 1
      const updatedSlideDeck = { ...slideDeck, currentSlideIndex: newIndex }
      setSlideDeck(updatedSlideDeck)
      onSlideChange(newIndex)
    }
  }, [slideDeck, setSlideDeck, onSlideChange])

  const handleNext = useCallback(() => {
    if (slideDeck.currentSlideIndex < slideDeck.slides.length - 1) {
      const newIndex = slideDeck.currentSlideIndex + 1
      const updatedSlideDeck = { ...slideDeck, currentSlideIndex: newIndex }
      setSlideDeck(updatedSlideDeck)
      onSlideChange(newIndex)
    }
  }, [slideDeck, setSlideDeck, onSlideChange])

  const handleGoToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slideDeck.slides.length) {
      const updatedSlideDeck = { ...slideDeck, currentSlideIndex: slideIndex }
      setSlideDeck(updatedSlideDeck)
      onSlideChange(slideIndex)
    }
  }, [slideDeck, setSlideDeck, onSlideChange])

  return { currentSlide, canGoPrevious, canGoNext, handlePrevious, handleNext, handleGoToSlide }
}

