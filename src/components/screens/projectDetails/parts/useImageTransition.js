import { useCallback, useRef, useState } from "react"

export const useImageTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const imageRef = useRef(null)
  const secondImageRef = useRef(null)
  const [activeImageRef, setActiveImageRef] = useState(0) // 0 for imageRef, 1 for secondImageRef

  // Image transition animation
  const animateImageTransition = useCallback(
    async newImageUrl => {
      if (
        typeof window === "undefined" ||
        !imageRef.current ||
        !secondImageRef.current ||
        isAnimating
      )
        return

      setIsAnimating(true)

      try {
        // Preload the new image before starting transition
        const preloadImage = new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () =>
            reject(new Error(`Failed to load image: ${newImageUrl}`))
          img.src = newImageUrl
        })

        // Wait for image to load
        await preloadImage

        const gsap = (await import("gsap")).default
        const currentImageElement =
          activeImageRef === 0 ? imageRef.current : secondImageRef.current
        const nextImageElement =
          activeImageRef === 0 ? secondImageRef.current : imageRef.current

        // Flag to control image update timing
        let imageUpdated = false

        // Create timeline with flag mechanism
        const tl = gsap.timeline({
          onComplete: () => {
            // Cleanup after animation completes
            setActiveImageRef(prev => (prev === 0 ? 1 : 0))
            // Clean up any lingering transform or filter styles
            nextImageElement.style.transform = ""
            nextImageElement.style.filter = ""
            currentImageElement.style.transform = ""
            currentImageElement.style.filter = ""
            setIsAnimating(false)
          },
        })

        // Step 1: Fade out current image completely
        tl.to(currentImageElement, {
          opacity: 0,
          scale: 0.95,
          filter: "blur(2px)",
          duration: 0.15,
          ease: "power2.out",
          onComplete: () => {
            // Flag: Only update image when fade out is COMPLETELY finished
            if (!imageUpdated) {
              nextImageElement.style.backgroundImage = `url(${newImageUrl})`
              nextImageElement.style.opacity = "0"
              nextImageElement.style.transform = "scale(0.95)"
              nextImageElement.style.filter = "blur(2px)"
              nextImageElement.style.zIndex = "2"
              currentImageElement.style.zIndex = "1"
              imageUpdated = true
            }
          },
        })
          // Step 2: Fade in new image (only starts after image is updated)
          .to(nextImageElement, {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.15,
            ease: "power2.out",
          })
      } catch (error) {
        console.warn("Image loading or GSAP animation failed:", error)
        // Fallback: directly change the image without animation
        const targetElement =
          activeImageRef === 0 ? imageRef.current : secondImageRef.current
        if (targetElement) {
          targetElement.style.backgroundImage = `url(${newImageUrl})`
        }
        setIsAnimating(false)
      }
    },
    [isAnimating, activeImageRef]
  )

  return {
    imageRef,
    secondImageRef,
    activeImageRef,
    isAnimating,
    animateImageTransition,
  }
}
