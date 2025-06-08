import { navigate } from "gatsby"
import React, { useContext, useEffect, useRef } from "react"
import { useTheme } from "styled-components"
import SliderContext from "../../../contexts/slider.context"
import { saveProjectScrollPosition } from "../../../utils/scrollPosition"
import CodeIcon from "./../../../assets/images/icon_code_github.svg"
import LiveIcon from "./../../../assets/images/icon_live.svg"
import LeftArrowSVG from "./../../../assets/images/left-arrow.svg"
import TechnologyIcon from "./../../TechnologyIcon/TechnologyIcon.component"
import {
  ButtonsWrapper,
  ContentWrapper,
  Description,
  HoverOverlay,
  ImagePreview,
  ImagePreviewWrapper,
  LinkIcon,
  ProjectDetailsButton,
  SlideTitle,
  SlideWrapper,
  SlidesWrapper,
  TechnologiesContainer,
} from "./Projects.styles"
import SlideCounter from "./SlideCounter.component"

const SliderContainer = props => {
  const { data } = useContext(SliderContext)

  const wrapperRef = useRef(null)
  const theme = useTheme()

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default

      const wrapper = wrapperRef.current
      const slides = wrapper.querySelectorAll(`${SlideWrapper}`)

      slides.forEach(slide => {
        gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top center",
            end: "bottom center",
            onEnter: handleOnEnter,
            onLeave: handleOnLeave,
            onEnterBack: handleOnEnter,
            onLeaveBack: handleOnLeave,
          },
        })

        function handleOnEnter() {
          gsap.to(slide, {
            backgroundColor: theme.color.darkBlue,
            duration: 0.3,
          })
        }

        function handleOnLeave() {
          gsap.to(slide, {
            backgroundColor: theme.color.lightBlue,
            duration: 0.3,
          })
        }
      })
    }

    initAnimation()
  }, [theme])

  const handleImageClick = projectId => {
    // Save the current scroll position and project ID before navigating
    saveProjectScrollPosition(projectId)
    navigate(`/project/${projectId}`)
  }

  return (
    <SlidesWrapper ref={wrapperRef}>
      {data.map(props => {
        const { id, title, bgUrl, technologies, liveUrl, codeUrl } = props

        return (
          <SlideWrapper key={id} data-project-id={id}>
            <SlideTitle>{title}</SlideTitle>
            <ContentWrapper>
              <TechnologiesContainer>
                <Description>Used technologies</Description>
                {technologies.map(({ name, id }) => (
                  <TechnologyIcon key={id} name={name} />
                ))}
              </TechnologiesContainer>
              <ImagePreviewWrapper>
                <ImagePreview
                  bgUrl={bgUrl}
                  onClick={() => handleImageClick(id)}
                  style={{ cursor: "pointer" }}
                >
                  <HoverOverlay>
                    <ProjectDetailsButton
                      bgColor="black"
                      width="250px"
                      height="70px"
                      justify="space-around"
                    >
                      <span />
                      Project details
                      <LeftArrowSVG />
                    </ProjectDetailsButton>
                  </HoverOverlay>
                </ImagePreview>

                <ButtonsWrapper>
                  {liveUrl ? (
                    <a target="_blank" rel="noreferrer" href={liveUrl}>
                      <LinkIcon>
                        <span>Live link</span>
                        <LiveIcon />
                      </LinkIcon>
                    </a>
                  ) : null}

                  {codeUrl ? (
                    <a target="_blank" rel="noreferrer" href={codeUrl}>
                      <LinkIcon>
                        <span>Code link</span>
                        <CodeIcon />
                      </LinkIcon>
                    </a>
                  ) : null}
                </ButtonsWrapper>
              </ImagePreviewWrapper>
            </ContentWrapper>
            <SlideCounter slideNumber={id} />
          </SlideWrapper>
        )
      })}
    </SlidesWrapper>
  )
}

/* DEPENDENCIES:



*/

export default SliderContainer
