import React, { useRef, useEffect } from "react"
import {
  SlidesWrapper,
  SlideContainer,
  SlideDetailsWrapper,
  Title,
  IconsContainer,
  ButtonsWrapper,
  LinkIcon,
} from "./Projects.styles"
import LiveIcon from "./../../../assets/images/icon_live.svg"
import CodeIcon from "./../../../assets/images/icon_code_github.svg"
import TriangleHeader from "../../TriangleHeader/TriangleHeader.component"
import TechnologyIcon from "../../TechnologyIcon/TechnologyIcon.component"
import gsap from "gsap"

const SlidesContainer = ({ slides, slideNumber }) => {
  const wrapper = useRef(null)

  useEffect(() => {
    const computedXValue = -((slideNumber - 1) * 100)

    gsap.to(wrapper.current, { x: `${computedXValue}%`, duration: 0.3 })
  }, [slideNumber])

  return (
    <SlidesWrapper ref={wrapper}>
      {slides.map(({ id, title, bgUrl, technologies, liveUrl, codeUrl }) => {
        return (
          <SlideContainer key={id} bgUrl={bgUrl}>
            <SlideDetailsWrapper>
              <TriangleHeader>
                <Title>{title}</Title>
              </TriangleHeader>

              <IconsContainer>
                {technologies.map(({ id, name }) => (
                  <TechnologyIcon key={id} name={name} />
                ))}
              </IconsContainer>
              <ButtonsWrapper>
                <a target="_blank" href={liveUrl}>
                  <LinkIcon hint="Live link">
                    <span>Live link</span>
                    <LiveIcon />
                  </LinkIcon>
                </a>

                <a target="_blank" href={codeUrl}>
                  <LinkIcon hint="Code link">
                    <span>Code link</span>
                    <CodeIcon />
                  </LinkIcon>
                </a>
              </ButtonsWrapper>
            </SlideDetailsWrapper>
          </SlideContainer>
        )
      })}
    </SlidesWrapper>
  )
}
export default SlidesContainer
