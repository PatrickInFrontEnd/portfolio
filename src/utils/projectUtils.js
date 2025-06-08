/**
 * Generate project image paths based on project ID
 * @param {number} projectId - The ID of the project
 * @param {string[]} imageFiles - Array of image filenames
 * @returns {string[]} Array of full image paths
 */
export const generateProjectImagePaths = (projectId, imageFiles) => {
  return imageFiles.map(filename => `/images/projects/${projectId}/${filename}`)
}

/**
 * Get the project folder path for a given project ID
 * @param {number} projectId - The ID of the project
 * @returns {string} The folder path for the project images
 */
export const getProjectImageFolder = projectId => {
  return `/images/projects/${projectId}/`
}

/**
 * Validate if a project ID exists
 * @param {number} projectId - The ID to validate
 * @param {Object} projectData - The project data object
 * @returns {boolean} Whether the project ID exists
 */
export const validateProjectId = (projectId, projectData) => {
  return projectData.hasOwnProperty(projectId)
}

/**
 * Get sorted project data by ID numbers
 * @param {Object} projectData - The project data object
 * @returns {Array} Array of projects sorted by ID
 */
export const getSortedProjects = projectData => {
  return Object.keys(projectData)
    .map(id => parseInt(id))
    .sort((a, b) => a - b)
    .map(id => ({ id, ...projectData[id] }))
}

/**
 * Get project navigation info (previous/next project IDs)
 * @param {number} currentProjectId - Current project ID
 * @param {Object} projectData - The project data object
 * @returns {Object} Object with previous and next project IDs
 */
export const getProjectNavigation = (currentProjectId, projectData) => {
  const projectIds = Object.keys(projectData)
    .map(id => parseInt(id))
    .sort((a, b) => a - b)
  const currentIndex = projectIds.indexOf(parseInt(currentProjectId))

  return {
    previousId: currentIndex > 0 ? projectIds[currentIndex - 1] : null,
    nextId:
      currentIndex < projectIds.length - 1
        ? projectIds[currentIndex + 1]
        : null,
    hasNavigation: projectIds.length > 1,
  }
}

/**
 * Check if an image is a mobile version based on filename
 * @param {string} imagePath - The image path/filename
 * @returns {boolean} Whether the image is a mobile version
 */
export const isMobileImage = imagePath => {
  return imagePath.includes("_mobile")
}

/**
 * Format project overlay text for display
 * @param {string} overlayText - The overlay text to format
 * @returns {string} Formatted overlay text
 */
export const formatOverlayText = overlayText => {
  return overlayText?.toUpperCase() || ""
}
