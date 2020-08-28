import { useEffect } from "react"
import {
  ShadowElement,
  Photo,
  PhotosWrapper,
  DescriptionWrapper,
  DescriptionHeader,
  P,
} from "./About.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const useAboutSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const defaultVars = { duration: 0.6, ease: "power2.easeInOut" }

    const wrapper = wrapperRef.current
    const shadowElement = wrapper.querySelector(`${ShadowElement}`)
    const photosWrapper = wrapper.querySelectorAll(`${PhotosWrapper}`)
    const photoElements = wrapper.querySelectorAll(`${Photo}`)
    const descriptionElement = wrapper.querySelector(`${DescriptionWrapper}`)
    const descriptionHeader = wrapper.querySelector(`${DescriptionHeader}`)
    const pElements = wrapper.querySelectorAll(`${P}`)

    if (window.innerWidth > 1600) handlePcLayout()
    else handleMobileLayout()

    function handlePcLayout() {
      //NOTE: setting basic styles before animation
      gsap.set([shadowElement, photoElements], {
        autoAlpha: 0,
      })

      const photosTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "10% center",
        },
        defaults: defaultVars,
      })

      photosTimeline
        .fromTo(
          shadowElement,
          { y: "150%", autoAlpha: 0 },
          { y: "0%", autoAlpha: 1 }
        )
        .fromTo(
          photoElements,
          { x: "-200%", autoAlpha: 0 },
          { x: "0%", autoAlpha: 1, delay: 0.3 }
        )

      setDescriptionTimeline()
    }

    function handleMobileLayout() {
      //NOTE: initial styles before animating

      gsap.set(shadowElement, { autoAlpha: 0 })
      gsap.set(photoElements, { autoAlpha: 0 })
      gsap.set(photoElements[1], { y: "30%" })
      gsap.set(photoElements[0], { y: "-30%" })

      setDescriptionTimeline()

      const photosTimeline = gsap.timeline({
        defaults: defaultVars,
        scrollTrigger: {
          trigger: photosWrapper,
          start: "20% center",
        },
      })

      photosTimeline
        .fromTo(
          shadowElement,
          { x: "-150%", autoAlpha: 0 },
          { x: "0%", autoAlpha: 1 }
        )
        .to(photoElements, { y: "0%", autoAlpha: 1, delay: 0.2 })
    }

    function setDescriptionTimeline() {
      gsap.set(descriptionHeader, {
        x: "-150%",
        autoAlpha: 0,
        scale: 0.1,
        borderBottom: "4px solid transparent",
      })
      const descriptionHeaderTl = gsap.timeline({
        defaults: defaultVars,
        scrollTrigger: {
          trigger: descriptionHeader,
          start: "top 80%",
        },
      })

      descriptionHeaderTl
        .to(descriptionHeader, {
          x: "0%",
          autoAlpha: 1,
        })
        .to(descriptionHeader, {
          scale: 1,
        })
        .to(descriptionHeader, { borderBottom: "4px solid #fff" })

      pElements.forEach((el, i) => {
        const valueFrom = i % 2 === 0 ? "-150px" : "150px"

        gsap.fromTo(
          el,
          {
            x: valueFrom,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.easeInOut",
          },
          {
            x: "0",
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        )
      })
    }
  }, [wrapperRef])
