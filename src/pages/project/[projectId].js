import React from "react"
import ProjectDetailsScreen from "../../components/screens/projectDetails/ProjectDetailsScreen.component"
import SEO from "../../components/seo"
import projectDetailsData from "../../providers/slider_provider/projectDetailsData"

const ProjectDetailsPage = ({ params }) => {
  return <ProjectDetailsScreen projectId={params.projectId} />
}

export const Head = ({ params }) => {
  const projectId = parseInt(params.projectId)
  const project = projectDetailsData[projectId]

  return (
    <SEO
      lang="EN"
      title={
        project
          ? `${project.title} | Patryk Płuciennik`
          : "Project Details | Patryk Płuciennik"
      }
    />
  )
}

export default ProjectDetailsPage
