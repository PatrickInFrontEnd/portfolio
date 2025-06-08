import { useEffect } from "react"
import {
  clearProjectScrollPosition,
  getStoredProjectScrollPosition,
  scrollToProjectById,
} from "../utils/scrollPosition"

/**
 * Custom hook for handling scroll restoration when returning from project details
 * @param {boolean} isDOMLoaded - Whether the DOM has finished loading
 * @param {number} delay - Delay in milliseconds before attempting scroll restoration (default: 100ms)
 */
export const useScrollRestoration = (isDOMLoaded, delay = 100) => {
  useEffect(() => {
    if (!isDOMLoaded) return

    const restoreScrollPosition = async () => {
      // Check if we have a stored scroll position from project navigation
      const storedData = getStoredProjectScrollPosition()

      if (storedData && storedData.projectId !== null) {
        // Wait for components to render and animations to complete
        await new Promise(resolve => setTimeout(resolve, delay))

        try {
          // Scroll to the project that was previously selected
          await scrollToProjectById(storedData.projectId)
        } catch (error) {
          console.warn("Failed to restore scroll position:", error)
        } finally {
          // Always clear the stored position after attempting to use it
          clearProjectScrollPosition()
        }
      }
    }

    restoreScrollPosition()
  }, [isDOMLoaded, delay])
}
