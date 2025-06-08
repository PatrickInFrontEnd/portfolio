// Utility functions for managing scroll position preservation
// Used to maintain scroll position when navigating between project list and project details

const SCROLL_POSITION_KEY = "project_scroll_position"
const SELECTED_PROJECT_KEY = "selected_project_id"
const DEBUG = false // Set to true for debugging

export const saveProjectScrollPosition = projectId => {
  if (typeof window === "undefined") return

  try {
    // Store the selected project ID
    localStorage.setItem(SELECTED_PROJECT_KEY, projectId.toString())

    // Store the current scroll position using modern API
    const scrollPosition = window.scrollY || document.documentElement.scrollTop
    localStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString())

    if (DEBUG) {
      console.log("Saved scroll position:", { projectId, scrollPosition })
    }
  } catch (error) {
    console.warn("Failed to save scroll position to localStorage:", error)
  }
}

export const getStoredProjectScrollPosition = () => {
  if (typeof window === "undefined") return null

  try {
    const scrollPosition = localStorage.getItem(SCROLL_POSITION_KEY)
    const projectId = localStorage.getItem(SELECTED_PROJECT_KEY)

    const result = {
      scrollPosition: scrollPosition ? parseInt(scrollPosition, 10) : null,
      projectId: projectId ? parseInt(projectId, 10) : null,
    }

    if (DEBUG && (result.scrollPosition || result.projectId)) {
      console.log("Retrieved scroll position:", result)
    }

    return result
  } catch (error) {
    console.warn("Failed to get scroll position from localStorage:", error)
    return null
  }
}

export const clearProjectScrollPosition = () => {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(SCROLL_POSITION_KEY)
    localStorage.removeItem(SELECTED_PROJECT_KEY)

    if (DEBUG) {
      console.log("Cleared scroll position")
    }
  } catch (error) {
    console.warn("Failed to clear scroll position from localStorage:", error)
  }
}

export const scrollToProjectPosition = async scrollPosition => {
  if (typeof window === "undefined" || scrollPosition === null) return

  const gsap = (await import("gsap")).default
  const { Power4 } = await import("gsap")
  const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default

  gsap.registerPlugin(ScrollToPlugin)

  if (DEBUG) {
    console.log("Scrolling to position:", scrollPosition)
  }

  // Faster scroll animation
  gsap.to(window, {
    scrollTo: { y: scrollPosition },
    duration: 0.8, // Reduced from 1.2s
    ease: Power4.easeInOut,
  })
}

export const scrollToProjectById = async projectId => {
  if (typeof window === "undefined" || projectId === null) return

  // More efficient way to wait for page readiness
  await waitForPageReady()

  // Find the project slide by ID
  const projectSlide = document.querySelector(
    `[data-project-id="${projectId}"]`
  )

  if (projectSlide) {
    const gsap = (await import("gsap")).default
    const { Power4 } = await import("gsap")
    const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default

    gsap.registerPlugin(ScrollToPlugin)

    // Scroll to the project with some offset for better visibility
    const targetY =
      projectSlide.getBoundingClientRect().top + window.scrollY - 100

    if (DEBUG) {
      console.log("Scrolling to project:", { projectId, targetY })
    }

    gsap.to(window, {
      scrollTo: { y: targetY },
      duration: 0.8, // Faster animation
      ease: Power4.easeInOut,
    })
  } else {
    // Fallback to stored scroll position
    const stored = getStoredProjectScrollPosition()
    if (stored.scrollPosition !== null) {
      if (DEBUG) {
        console.log("Project element not found, using fallback scroll position")
      }
      await scrollToProjectPosition(stored.scrollPosition)
    }
  }
}

// Helper function to efficiently wait for page readiness
const waitForPageReady = async () => {
  // If document is already loaded, proceed immediately
  if (document.readyState === "complete") {
    return
  }

  // Otherwise, wait for load event or a maximum of 200ms
  return new Promise(resolve => {
    const timer = setTimeout(resolve, 200) // Max wait time

    const onLoad = () => {
      clearTimeout(timer)
      window.removeEventListener("load", onLoad)
      resolve()
    }

    window.addEventListener("load", onLoad)
  })
}

// Enhanced function to handle browser back button navigation
export const setupBrowserBackHandler = () => {
  if (typeof window === "undefined") return

  // Listen for browser back/forward navigation
  const handlePopState = () => {
    // Reduced delay for faster response
    setTimeout(() => {
      const storedData = getStoredProjectScrollPosition()
      if (storedData && storedData.projectId !== null) {
        scrollToProjectById(storedData.projectId).then(() => {
          clearProjectScrollPosition()
        })
      }
    }, 100) // Reduced from 300ms to 100ms
  }

  window.addEventListener("popstate", handlePopState)

  // Return cleanup function
  return () => {
    window.removeEventListener("popstate", handlePopState)
  }
}
