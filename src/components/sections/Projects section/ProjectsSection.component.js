import React from "react"
import {
  BackgroundWrapper,
  ProjectsHeader,
  ProjectsHeaderTitle,
  SliderWrapper,
  SliderPanel,
  Title,
  SliderDescription,
  DescriptionTitle,
  DescriptionParagraph,
  ButtonsPanel,
  ButtonsWrapper,
  SlidesCounter,
  UsedTechnologiesPanel,
  TechnologyPanel,
  TechnologyIcon,
} from "./Projects.styles"
import { graphql, useStaticQuery } from "gatsby"
import SliderRightBar from "./SliderRightBar.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import ProjectsIcon from "./../../../assets/images/icon_projects.svg"
import ArrowIconLeft from "./../../../assets/images/icon_arrow_left.svg"
import ArrowIconRight from "./../../../assets/images/icon_arrow_right.svg"

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
          <SliderPanel id="title">
            <Title>ZLP platform</Title>
          </SliderPanel>

          <SliderDescription>
            <DescriptionTitle>Description :</DescriptionTitle>

            <DescriptionParagraph>
              Gaming platform created for school tournament.
            </DescriptionParagraph>
          </SliderDescription>

          <ButtonsPanel>
            <ButtonsWrapper>
              <ArrowIconLeft />
              <ArrowIconRight />
            </ButtonsWrapper>

            <SlidesCounter>1</SlidesCounter>
          </ButtonsPanel>

          <SliderRightBar />

          <UsedTechnologiesPanel>
            <DescriptionTitle>Used Technologies</DescriptionTitle>
          </UsedTechnologiesPanel>

          <TechnologyPanel>
            <TechnologyIcon />
          </TechnologyPanel>
        </SliderWrapper>
      </BackgroundWrapper>
    </>
  )
}
export default ProjectsSection
