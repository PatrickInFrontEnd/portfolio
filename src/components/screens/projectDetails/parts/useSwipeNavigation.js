import { useEffect, useRef } from "react"

export const useSwipeNavigation = (
  element,
  handlePrevImage,
  handleNextImage,
  isAnimating,
  hasMultipleImages
) => {
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const touchEndX = useRef(null)
  const touchEndY = useRef(null)

  const minSwipeDistance = 50 // Minimum distance for a valid swipe
  const maxVerticalDistance = 100 // Maximum vertical distance to still count as horizontal swipe

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = e => {
    touchEndX.current = e.touches[0].clientX
    touchEndY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    if (
      !touchStartX.current ||
      !touchEndX.current ||
      !touchStartY.current ||
      !touchEndY.current ||
      isAnimating ||
      !hasMultipleImages
    ) {
      return
    }

    const horizontalDistance = Math.abs(touchEndX.current - touchStartX.current)
    const verticalDistance = Math.abs(touchEndY.current - touchStartY.current)

    // Check if it's a horizontal swipe (horizontal distance > vertical distance)
    // and if the swipe distance is sufficient
    if (
      horizontalDistance < minSwipeDistance ||
      verticalDistance > maxVerticalDistance ||
      horizontalDistance < verticalDistance
    ) {
      return
    }

    // Determine swipe direction
    if (touchEndX.current < touchStartX.current) {
      // Swipe left - go to next image
      handleNextImage()
    } else {
      // Swipe right - go to previous image
      handlePrevImage()
    }

    // Reset touch coordinates
    touchStartX.current = null
    touchStartY.current = null
    touchEndX.current = null
    touchEndY.current = null
  }

  useEffect(() => {
    const currentElement = element?.current

    if (!currentElement) return

    // Add touch event listeners
    currentElement.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    })
    currentElement.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    })
    currentElement.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    })

    // Cleanup event listeners
    return () => {
      currentElement.removeEventListener("touchstart", handleTouchStart)
      currentElement.removeEventListener("touchmove", handleTouchMove)
      currentElement.removeEventListener("touchend", handleTouchEnd)
    }
  }, [
    element,
    handlePrevImage,
    handleNextImage,
    isAnimating,
    hasMultipleImages,
  ])

  return {
    // This hook mainly manages side effects, so we don't need to return anything
    // But we could return some state if needed in the future
  }
}
