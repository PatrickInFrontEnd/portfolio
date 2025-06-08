import { navigate } from "gatsby"
import { useCallback, useEffect, useState } from "react"
import projectDetailsData from "../../../../providers/slider_provider/projectDetailsData"
import {
  getProjectNavigation,
  validateProjectId,
} from "../../../../utils/projectUtils"
import { clearProjectScrollPosition } from "../../../../utils/scrollPosition"

export const useProjectData = projectId => {
  const [currentProject, setCurrentProject] = useState(null)
  const [projectNavigation, setProjectNavigation] = useState({})

  useEffect(() => {
    const parsedProjectId = parseInt(projectId)

    // Validate project ID and get project data
    if (validateProjectId(parsedProjectId, projectDetailsData)) {
      const project = projectDetailsData[parsedProjectId]
      setCurrentProject(project)

      // Get navigation information
      const navInfo = getProjectNavigation(parsedProjectId, projectDetailsData)
      setProjectNavigation(navInfo)

      // If someone navigated directly to this page (e.g., via URL or refresh),
      // clear any existing scroll position to prevent unwanted scrolling when going back
      if (typeof window !== "undefined" && window.history.length === 1) {
        clearProjectScrollPosition()
      }
    } else {
      // If project not found, redirect to home
      console.warn(`Project with ID ${parsedProjectId} not found`)
      navigate("/")
    }
  }, [projectId])

  const handleGoBack = useCallback(() => {
    navigate("/")
    // Note: The scroll restoration will be handled by the home page component
    // when it detects there's a stored scroll position
  }, [])

  return {
    currentProject,
    projectNavigation,
    handleGoBack,
    isLoading: !currentProject,
  }
}
