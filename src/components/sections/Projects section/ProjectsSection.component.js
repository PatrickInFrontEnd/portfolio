import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react"
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
import { fadeOut, fadeIn, vanish, appear } from "../../../utils/animationUtils"
import gsap from "gsap"

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
    toggleAnimationStatus,
    animating,
    currentSlide: { id, title, description, codeUrl, liveUrl, technologies },
  } = useContext(SliderContext)

  //NOTE: auto animating state
  const [autoAnimate, setAutoAnimationStatus] = useState(true)

  //NOTE: reference to tweens
  let technologyIconPanel = useRef(null),
    sliderImageElement = useRef(null),
    sliderIdElement = useRef(null),
    sliderTitleElement = useRef(null),
    sliderDescriptionElement = useRef(null)

  const animateNextSlide = useCallback(
    e => {
      if (animating) return
      if (e) {
        e.stopPropagation()
      }

      toggleAnimationStatus()

      const tl = gsap.timeline({ onComplete: toggleAnimationStatus })

      const targets =
        window.innerWidth < 650
          ? [technologyIconPanel, sliderImageElement, sliderTitleElement].map(
              ref => ref.current
            )
          : [
              technologyIconPanel,
              sliderImageElement,
              sliderTitleElement,
              sliderDescriptionElement,
            ].map(ref => ref.current)

      tl.add(fadeOut(targets, { stagger: 0.2 }))
        .add(vanish(sliderIdElement.current))
        .addLabel("sliderFadedOut")
        .call(nextSlide, [], "sliderFadedOut")
        .addLabel("dataHasChanged")
        .add(appear(sliderIdElement.current), "dataHasChanged+=.4")
        .add(fadeIn(targets.reverse(), { stagger: 0.2, y: "0", autoAlpha: 1 }))
    },
    [animating, nextSlide, toggleAnimationStatus]
  )

  const animatePrevSlide = useCallback(
    e => {
      if (animating) return
      if (e) {
        e.stopPropagation()
      }

      toggleAnimationStatus()

      const tl = gsap.timeline({ onComplete: toggleAnimationStatus })

      const targets =
        window.innerWidth < 650
          ? [technologyIconPanel, sliderImageElement, sliderTitleElement].map(
              ref => ref.current
            )
          : [
              technologyIconPanel,
              sliderImageElement,
              sliderTitleElement,
              sliderDescriptionElement,
            ].map(ref => ref.current)

      tl.add(fadeOut(targets, { stagger: 0.2, y: "+=100" }))
        .add(vanish(sliderIdElement.current))
        .addLabel("sliderFadedOut")
        .call(prevSlide, [], "sliderFadedOut")
        .addLabel("dataHasChanged")
        .add(appear(sliderIdElement.current), "dataHasChanged+=.4")
        .add(fadeIn(targets.reverse(), { stagger: 0.2, y: "0", autoAlpha: 1 }))
    },
    [animating, prevSlide, toggleAnimationStatus]
  )

  const handleNextSlideClick = e => {
    if (autoAnimate) setAutoAnimationStatus(false)
    animateNextSlide(e)
  }

  const handlePrevSlideClick = e => {
    if (autoAnimate) setAutoAnimationStatus(false)
    animatePrevSlide(e)
  }

  //NOTE: auto animating the slider

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = animateNextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    if (autoAnimate !== false) {
      const interval = setInterval(play, 10000)
      return () => clearInterval(interval)
    }
  }, [autoAnimate])

  const replayAutoAnimating = () => {
    if (!autoAnimate) setAutoAnimationStatus(true)
  }

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

      <BackgroundWrapper
        onMouseLeave={replayAutoAnimating}
        src={file.childImageSharp.fluid.src}
      >
        <ProjectsHeader>
          <ProjectsHeaderTitle>my projects</ProjectsHeaderTitle>
        </ProjectsHeader>
        <SliderWrapper>
          <SliderPanel ref={sliderTitleElement} id="title">
            <Title>{title}</Title>
          </SliderPanel>

          <SliderDescription ref={sliderDescriptionElement}>
            <DescriptionTitle>Description :</DescriptionTitle>

            <DescriptionParagraph>{description}</DescriptionParagraph>
          </SliderDescription>

          <ButtonsPanel>
            <ButtonsWrapper>
              <ArrowIconLeft onClick={handlePrevSlideClick} />
              <ArrowIconRight onClick={handleNextSlideClick} />
            </ButtonsWrapper>

            <SlideId ref={sliderIdElement}>{id}</SlideId>
          </ButtonsPanel>

          <SliderRightBar
            ref={sliderImageElement}
            slideId={id}
            codeUrl={codeUrl}
            liveUrl={liveUrl}
          />

          <UsedTechnologiesPanel>
            <DescriptionTitle>Used Technologies</DescriptionTitle>
          </UsedTechnologiesPanel>

          <TechnologiesPanel
            ref={technologyIconPanel}
            iconSources={technologies}
          />
        </SliderWrapper>
      </BackgroundWrapper>
    </>
  )
}
export default ProjectsSection
