import { navigate } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import LeftArrowSVG from "../../../assets/images/left-arrow.svg"
import projectDetailsData from "../../../providers/slider_provider/projectDetailsData"
import { clearProjectScrollPosition } from "../../../utils/scrollPosition"
import TechnologyIcon from "../../TechnologyIcon/TechnologyIcon.component"
import {
  ContentSection,
  Description,
  GoBackButton,
  HeaderSection,
  InsideArrowsContainer,
  InsideLeftArrow,
  InsideRightArrow,
  OutsideLeftArrow,
  OutsideRightArrow,
  PageWrapper,
  ProblemsSection,
  ProjectTitle,
  SectionTitle,
  SliderButton,
  SliderButtons,
  SliderButtonsContainer,
  SliderImage,
  SliderSection,
  SliderWrapper,
  TechnologiesGrid,
  TechnologiesSection,
} from "./ProjectDetailsScreen.styles"
import { useProjectDetailsLayout } from "./useProjectDetailsLayout"

const ProjectDetailsScreen = ({ projectId }) => {
  const [currentProject, setCurrentProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const wrapperRef = useRef(null)

  // Initialize animations
  useProjectDetailsLayout(wrapperRef, currentProject)

  useEffect(() => {
    const parsedProjectId = parseInt(projectId)
    const project = projectDetailsData[parsedProjectId]

    if (project) {
      setCurrentProject(project)

      // If someone navigated directly to this page (e.g., via URL or refresh),
      // clear any existing scroll position to prevent unwanted scrolling when going back
      if (typeof window !== "undefined" && window.history.length === 1) {
        clearProjectScrollPosition()
      }
    } else {
      // If project not found, redirect to home
      navigate("/")
    }
  }, [projectId])

  const handleGoBack = () => {
    navigate("/")
    // Note: The scroll restoration will be handled by the home page component
    // when it detects there's a stored scroll position
  }

  const handlePrevImage = () => {
    if (currentProject && currentProject.images) {
      setCurrentImageIndex(prev =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (currentProject && currentProject.images) {
      setCurrentImageIndex(prev =>
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  if (!currentProject) {
    return (
      <PageWrapper>
        <div>Loading...</div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper ref={wrapperRef}>
      <HeaderSection>
        <ProjectTitle>{currentProject.title}</ProjectTitle>
        <GoBackButton onClick={handleGoBack}>
          <LeftArrowSVG />
          Go back
        </GoBackButton>
      </HeaderSection>

      <SliderSection data-slider-section>
        <SliderWrapper>
          <SliderImage bgUrl={currentProject.images[currentImageIndex]} />
        </SliderWrapper>

        <SliderButtonsContainer>
          {/* Inside arrows - shown on tablets/mobile when outside arrows are hidden */}
          {currentProject.images.length > 1 && (
            <InsideArrowsContainer>
              <InsideLeftArrow data-left-arrow onClick={handlePrevImage}>
                <LeftArrowSVG />
              </InsideLeftArrow>
              <InsideRightArrow data-right-arrow onClick={handleNextImage}>
                <LeftArrowSVG />
              </InsideRightArrow>
            </InsideArrowsContainer>
          )}

          <SliderButtons>
            {currentProject.liveUrl && (
              <SliderButton
                href={currentProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                Go live
              </SliderButton>
            )}
            {currentProject.codeUrl && (
              <SliderButton
                href={currentProject.codeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </SliderButton>
            )}
          </SliderButtons>
        </SliderButtonsContainer>

        {/* Outside arrows - shown on desktop/large screens only */}
        {currentProject.images.length > 1 && (
          <>
            <OutsideLeftArrow data-left-arrow onClick={handlePrevImage}>
              <LeftArrowSVG />
            </OutsideLeftArrow>
            <OutsideRightArrow data-right-arrow onClick={handleNextImage}>
              <LeftArrowSVG />
            </OutsideRightArrow>
          </>
        )}
      </SliderSection>

      <ContentSection data-content-section>
        <SectionTitle data-section-title>Description</SectionTitle>
        <Description data-description>{currentProject.description}</Description>

        <ProblemsSection>
          <SectionTitle data-section-title>
            Problems I struggled with
          </SectionTitle>
          <Description data-description>{currentProject.problems}</Description>
        </ProblemsSection>

        <TechnologiesSection>
          <SectionTitle data-section-title>
            Technologies used in the project
          </SectionTitle>
          <TechnologiesGrid data-technologies-grid>
            {currentProject.technologies.map(tech => (
              <TechnologyIcon key={tech.id} name={tech.name} />
            ))}
          </TechnologiesGrid>
        </TechnologiesSection>
      </ContentSection>
    </PageWrapper>
  )
}

export default ProjectDetailsScreen
