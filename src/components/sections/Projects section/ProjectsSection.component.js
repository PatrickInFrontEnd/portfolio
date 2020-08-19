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
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import ProjectsIcon from "./../../../assets/images/icon_projects.svg"
import TechnologiesPanel from "./UsedTechnologies.component"

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
    <>
      <SectionHeader id="projects">
        Projects
        <ProjectsIcon
          style={{
            width: "60px",
            height: "60px",
            right: "-90%",
            top: "50%",

            transform: "translate(0, -40%)",
          }}
        />
      </SectionHeader>

      <BackgroundWrapper src={file.childImageSharp.fluid.src}>
        <ProjectsHeader>
          <ProjectsHeaderTitle>my projects</ProjectsHeaderTitle>
        </ProjectsHeader>
        <SliderWrapper>
          <SliderLeftBar />
          <SliderRightBar />
        </SliderWrapper>
        <TechnologiesPanel />
      </BackgroundWrapper>
    </>
  )
}
export default ProjectsSection
