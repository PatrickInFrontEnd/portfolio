import React from "react"
import {
  BackgroundWrapper,
  ProjectsHeader,
  ProjectsHeaderTitle,
  SliderWrapper,
} from "./Projects.styles"
import { graphql, useStaticQuery } from "gatsby"
import SliderLeftBar from "./SliderLeftBar.component"
import SliderRightBar from "./SliderRightBar.component"

const queryForBgcImg = graphql`
  {
    file(relativePath: { eq: "projects_section.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          src
        }
      }
    }
  }
`

const ProjectsSection = props => {
  const { file } = useStaticQuery(queryForBgcImg)

  return (
    <BackgroundWrapper src={file.childImageSharp.fluid.src}>
      <ProjectsHeader>
        <ProjectsHeaderTitle>my projects</ProjectsHeaderTitle>
      </ProjectsHeader>
      <SliderWrapper>
        <SliderLeftBar />
        <SliderRightBar />
      </SliderWrapper>
    </BackgroundWrapper>
  )
}
export default ProjectsSection
