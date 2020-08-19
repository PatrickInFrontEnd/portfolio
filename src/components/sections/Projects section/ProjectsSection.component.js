import React, { useContext, useEffect } from "react"
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
  SlideId,
  UsedTechnologiesPanel,
} from "./Projects.styles"
import { graphql, useStaticQuery } from "gatsby"
import SliderRightBar from "./SliderRightBar.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import ProjectsIcon from "./../../../assets/images/icon_projects.svg"
import ArrowIconLeft from "./../../../assets/images/icon_arrow_left.svg"
import ArrowIconRight from "./../../../assets/images/icon_arrow_right.svg"
import TechnologiesPanel from "./UsedTechnologiesPanel.component"
import SliderContext from "./../../../contexts/slider.context"

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

  const {
    nextSlide,
    prevSlide,
    currentSlide: { id, title, description, codeUrl, liveUrl, technologies },
  } = useContext(SliderContext)

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
            <Title>{title}</Title>
          </SliderPanel>

          <SliderDescription>
            <DescriptionTitle>Description :</DescriptionTitle>

            <DescriptionParagraph>{description}</DescriptionParagraph>
          </SliderDescription>

          <ButtonsPanel>
            <ButtonsWrapper>
              <ArrowIconLeft onClick={prevSlide} />
              <ArrowIconRight onClick={nextSlide} />
            </ButtonsWrapper>

            <SlideId>{id}</SlideId>
          </ButtonsPanel>

          <SliderRightBar slideId={id} codeUrl={codeUrl} liveUrl={liveUrl} />

          <UsedTechnologiesPanel>
            <DescriptionTitle>Used Technologies</DescriptionTitle>
          </UsedTechnologiesPanel>

          <TechnologiesPanel
            iconSources={technologies.map(name => ({ name }))}
          />
        </SliderWrapper>
      </BackgroundWrapper>
    </>
  )
}
export default ProjectsSection
