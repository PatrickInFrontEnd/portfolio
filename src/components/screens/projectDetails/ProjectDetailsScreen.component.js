import React, { useEffect, useRef } from "react"
import LeftArrowSVG from "../../../assets/images/left-arrow.svg"
import { isMobileImage } from "../../../utils/projectUtils"
import TechnologyIcon from "../../TechnologyIcon/TechnologyIcon.component"
import { useImageNavigation } from "./parts/useImageNavigation"
import { useImageTransition } from "./parts/useImageTransition"
import { useProjectData } from "./parts/useProjectData"
import { useSwipeNavigation } from "./parts/useSwipeNavigation"
import {
  ContentSection,
  Description,
  GoBackButton,
  HeaderSection,
  ImageCounter,
  ImageIndicator,
  ImageIndicators,
  InsideArrowsContainer,
  InsideLeftArrow,
  InsideRightArrow,
  MobileButtonsContainer,
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
  SolutionSection,
  SwipeHint,
  TechnologiesGrid,
  TechnologiesSection,
} from "./ProjectDetailsScreen.styles"
import { useProjectDetailsLayout } from "./useProjectDetailsLayout"

const ProjectDetailsScreen = ({ projectId }) => {
  const wrapperRef = useRef(null)
  const sliderWrapperRef = useRef(null)

  // Custom hooks for different concerns
  const {
    currentProject,
    projectNavigation,
    handleGoBack,
    isLoading,
  } = useProjectData(projectId)
  const {
    imageRef,
    secondImageRef,
    activeImageRef,
    isAnimating,
    animateImageTransition,
  } = useImageTransition()
  const {
    currentImageIndex,
    handlePrevImage,
    handleNextImage,
    handleImageIndicatorClick,
  } = useImageNavigation(
    currentProject,
    isAnimating,
    animateImageTransition,
    handleGoBack
  )

  // Initialize animations
  useProjectDetailsLayout(wrapperRef, currentProject)

  // Handle initial image load when project loads
  useEffect(() => {
    if (
      currentProject &&
      currentProject.images &&
      currentProject.images[0] &&
      imageRef.current
    ) {
      // Set initial image directly without animation
      imageRef.current.style.backgroundImage = `url(${currentProject.images[0]})`
      imageRef.current.style.opacity = "1"
    }
  }, [currentProject])

  // Add swipe navigation
  const hasMultipleImages =
    currentProject?.images && currentProject.images.length > 1

  useSwipeNavigation(
    sliderWrapperRef,
    handlePrevImage,
    handleNextImage,
    isAnimating,
    hasMultipleImages
  )

  if (isLoading) {
    return (
      <PageWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "18px",
          }}
        >
          Loading project details...
        </div>
      </PageWrapper>
    )
  }

  const currentImagePath = currentProject.images[currentImageIndex]
  const isCurrentImageMobile = isMobileImage(currentImagePath)

  return (
    <PageWrapper ref={wrapperRef}>
      <HeaderSection>
        <ProjectTitle>{currentProject.title}</ProjectTitle>
        <GoBackButton onClick={handleGoBack} title="Go back to projects (ESC)">
          <LeftArrowSVG />
          Go back
        </GoBackButton>
      </HeaderSection>

      <SliderSection data-slider-section>
        <SliderWrapper ref={sliderWrapperRef}>
          <SliderImage
            ref={imageRef}
            bgUrl={currentImagePath}
            isMobile={isCurrentImageMobile}
            title={`${currentProject.title} - Image ${
              currentImageIndex + 1
            } of ${currentProject.images.length}`}
          />
          <SliderImage
            ref={secondImageRef}
            bgUrl=""
            isMobile={isCurrentImageMobile}
            style={{ opacity: 0 }}
            title={`${currentProject.title} - Image ${
              currentImageIndex + 1
            } of ${currentProject.images.length}`}
          />

          {/* Image counter */}
          {hasMultipleImages && (
            <ImageCounter>
              {currentImageIndex + 1} / {currentProject.images.length}
            </ImageCounter>
          )}

          {/* Image indicators */}
          {hasMultipleImages && (
            <ImageIndicators>
              {currentProject.images.map((imagePath, index) => (
                <ImageIndicator
                  key={index}
                  active={index === currentImageIndex}
                  onClick={() => handleImageIndicatorClick(index)}
                  title={`Go to image ${index + 1}${
                    isMobileImage(imagePath) ? " (Mobile)" : ""
                  }`}
                  aria-label={`Go to image ${index + 1}${
                    isMobileImage(imagePath) ? " (Mobile)" : ""
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </ImageIndicators>
          )}

          {/* Swipe hint for touch devices */}
          {hasMultipleImages && <SwipeHint>Swipe to navigate images</SwipeHint>}
        </SliderWrapper>

        <SliderButtonsContainer>
          {/* Inside arrows - shown on tablets/mobile when outside arrows are hidden */}
          {hasMultipleImages && (
            <InsideArrowsContainer>
              <InsideLeftArrow
                data-left-arrow
                onClick={handlePrevImage}
                title="Previous image (←)"
                aria-label="Previous image"
                disabled={isAnimating}
              >
                <LeftArrowSVG />
              </InsideLeftArrow>
              <InsideRightArrow
                data-right-arrow
                onClick={handleNextImage}
                title="Next image (→)"
                aria-label="Next image"
                disabled={isAnimating}
              >
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
                title="View live project"
              >
                Go live
              </SliderButton>
            )}
            {currentProject.codeUrl && (
              <SliderButton
                href={currentProject.codeUrl}
                target="_blank"
                rel="noreferrer"
                title="View source code"
              >
                Code
              </SliderButton>
            )}
          </SliderButtons>
        </SliderButtonsContainer>

        {/* Mobile buttons container - shown below black box on small screens */}
        <MobileButtonsContainer>
          {currentProject.liveUrl && (
            <SliderButton
              href={currentProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              title="View live project"
            >
              Go live
            </SliderButton>
          )}
          {currentProject.codeUrl && (
            <SliderButton
              href={currentProject.codeUrl}
              target="_blank"
              rel="noreferrer"
              title="View source code"
            >
              Code
            </SliderButton>
          )}
        </MobileButtonsContainer>

        {/* Outside arrows - shown on desktop/large screens only */}
        {hasMultipleImages && (
          <>
            <OutsideLeftArrow
              data-left-arrow
              onClick={handlePrevImage}
              title="Previous image (←)"
              aria-label="Previous image"
              disabled={isAnimating}
            >
              <LeftArrowSVG />
            </OutsideLeftArrow>
            <OutsideRightArrow
              data-right-arrow
              onClick={handleNextImage}
              title="Next image (→)"
              aria-label="Next image"
              disabled={isAnimating}
            >
              <LeftArrowSVG />
            </OutsideRightArrow>
          </>
        )}
      </SliderSection>

      <ContentSection data-content-section>
        <SectionTitle data-section-title>Description</SectionTitle>
        <Description data-description>{currentProject.description}</Description>

        <ProblemsSection>
          <SectionTitle data-section-title>Challenges</SectionTitle>
          <Description data-description>
            {currentProject.challenges}
          </Description>
        </ProblemsSection>

        <SolutionSection>
          <SectionTitle data-section-title>Solution & Impact</SectionTitle>
          <Description data-description>
            {currentProject.solutionAndImpact}
          </Description>
        </SolutionSection>

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
