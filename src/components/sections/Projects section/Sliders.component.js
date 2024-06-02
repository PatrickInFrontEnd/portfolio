import React, { useContext, useRef, useEffect } from "react"
import {
  SlideWrapper,
  SlidesWrapper,
  ButtonsWrapper,
  LinkIcon,
  ImagePreview,
  ContentWrapper,
  Description,
  ImagePreviewWrapper,
  SlideTitle,
  TechnologiesContainer,
} from "./Projects.styles"
import SlideCounter from "./SlideCounter.component"
import SliderContext from "../../../contexts/slider.context"
import TechnologyIcon from "./../../TechnologyIcon/TechnologyIcon.component"
import LiveIcon from "./../../../assets/images/icon_live.svg"
import CodeIcon from "./../../../assets/images/icon_code_github.svg"
import gsap from "gsap"
import { useTheme } from "styled-components"

const SliderContainer = props => {
  const { data } = useContext(SliderContext)

  const wrapperRef = useRef(null)
  const theme = useTheme()

  useEffect(() => {
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
  }, [theme])

  return (
    <SlidesWrapper ref={wrapperRef}>
      {data.map(props => {
        const { id, title, bgUrl, technologies, liveUrl, codeUrl } = props

        return (
          <SlideWrapper key={id}>
            <SlideTitle>{title}</SlideTitle>
            <ContentWrapper>
              <TechnologiesContainer>
                <Description>Used technologies</Description>
                {technologies.map(({ name, id }) => (
                  <TechnologyIcon key={id} name={name} />
                ))}
              </TechnologiesContainer>
              <ImagePreviewWrapper>
                {liveUrl ? <a href={liveUrl} target="_blank" rel="noreferrer">
                  <ImagePreview bgUrl={bgUrl} />
                </a> :  <ImagePreview bgUrl={bgUrl} />}

                <ButtonsWrapper>
                  {liveUrl ? <a target="_blank" rel="noreferrer" href={liveUrl}>
                    <LinkIcon>
                      <span>Live link</span>
                      <LiveIcon />
                    </LinkIcon>
                  </a> : null}

                  {codeUrl ? <a target="_blank" rel="noreferrer" href={codeUrl}>
                    <LinkIcon>
                      <span>Code link</span>
                      <CodeIcon />
                    </LinkIcon>
                  </a>: null}
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
