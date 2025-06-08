import { useEffect, useState } from "react"

export const useImageNavigation = (
  currentProject,
  isAnimating,
  animateImageTransition,
  handleGoBack
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [currentProject])

  const handlePrevImage = () => {
    if (
      currentProject &&
      currentProject.images &&
      currentProject.images.length > 1 &&
      !isAnimating
    ) {
      const newIndex =
        currentImageIndex === 0
          ? currentProject.images.length - 1
          : currentImageIndex - 1
      setCurrentImageIndex(newIndex)
      animateImageTransition(currentProject.images[newIndex])
    }
  }

  const handleNextImage = () => {
    if (
      currentProject &&
      currentProject.images &&
      currentProject.images.length > 1 &&
      !isAnimating
    ) {
      const newIndex =
        currentImageIndex === currentProject.images.length - 1
          ? 0
          : currentImageIndex + 1
      setCurrentImageIndex(newIndex)
      animateImageTransition(currentProject.images[newIndex])
    }
  }

  const handleImageIndicatorClick = index => {
    if (!isAnimating && index !== currentImageIndex) {
      setCurrentImageIndex(index)
      animateImageTransition(currentProject.images[index])
    }
  }

  const handleKeyNavigation = event => {
    if (!currentProject || isAnimating) return

    switch (event.key) {
      case "ArrowLeft":
        handlePrevImage()
        break
      case "ArrowRight":
        handleNextImage()
        break
      case "Escape":
        handleGoBack()
        break
      default:
        break
    }
  }

  useEffect(() => {
    // Add keyboard navigation
    document.addEventListener("keydown", handleKeyNavigation)
    return () => {
      document.removeEventListener("keydown", handleKeyNavigation)
    }
  }, [currentProject, isAnimating, handleGoBack])

  return {
    currentImageIndex,
    handlePrevImage,
    handleNextImage,
    handleImageIndicatorClick,
  }
}
