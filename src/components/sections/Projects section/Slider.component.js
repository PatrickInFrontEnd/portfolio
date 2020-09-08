import React, { useContext, useRef } from "react"
import {
  SliderWrapper,
  NavigationArrow,
  SliderNavigationWrapper,
  NumberOfSlide,
  SlidesWrapper,
} from "./Projects.styles"
import SliderCounter from "./SliderCounter.component"
import SliderContext from "../../../contexts/slider.context"
import SlidesComponent from "./SlidesContainer.component"
import gsap from "gsap"

const SliderContainer = props => {
  const {
    currentSlide,
    data,
    nextSlide,
    previousSlide,
    isAnimating,
    toggleAnimationStatus,
  } = useContext(SliderContext)

  const wrapperRef = useRef(null)

  const handleNextSlide = () => {
    if (isAnimating) return
    animate("next")
  }
  const handlePreviousSlide = () => {
    if (isAnimating) return
    animate("previous")
  }

  const animate = (typeOfDirection = "next") => {
    const wrapper = wrapperRef.current
    const sliderNumber = wrapper.querySelectorAll(`${NumberOfSlide}`)
    const slidesContainer = wrapper.querySelector(`${SlidesWrapper}`)

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: "power2.easeInOut",
      },
    })

    tl.addLabel("startOfTheAnimation")
      .call(toggleAnimationStatus, [], "startOfTheAnimation")
      .to(sliderNumber, { y: "+=10px", autoAlpha: 0 }, "startOfTheAnimation")
      .call(typeOfDirection === "next" ? nextSlide : previousSlide)
      .addLabel("slideChanged")
      .to(sliderNumber, { y: "-=10px", autoAlpha: 1 }, "slideChanged")
      .call(toggleAnimationStatus, [], "+=0.3")
  }

  const slideNumber = currentSlide < 10 ? `0${currentSlide}` : currentSlide

  return (
    <div ref={wrapperRef}>
      <SliderWrapper>
        <SlidesComponent slides={data} slideNumber={currentSlide} />

        <SliderCounter slideNumber={slideNumber} />

        <SliderNavigationWrapper>
          <NavigationArrow turn="left" onClick={handlePreviousSlide} />
          <NavigationArrow turn="right" onClick={handleNextSlide} />
        </SliderNavigationWrapper>
      </SliderWrapper>
    </div>
  )
}

export default SliderContainer
