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
      gsap.set([shadowElement, photoElements, descriptionElement], {
        autoAlpha: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "10% center",
        },
        defaults: defaultVars,
      })

      tl.fromTo(
        shadowElement,
        { y: "150%", autoAlpha: 0 },
        { y: "0%", autoAlpha: 1 }
      )
        .fromTo(
          photoElements,
          { x: "-200%", autoAlpha: 0 },
          { x: "0%", autoAlpha: 1 }
        )
        .to(photoElements[1], { y: "52%" })
        .to(photoElements[0], { y: "-52%" })
        .fromTo(
          descriptionElement,
          { translateX: "200%", autoAlpha: 0 },
          { translateX: "0", autoAlpha: 1 }
        )
    }

    function handleMobileLayout() {
      //NOTE: initial styles before animating
      gsap.set(descriptionHeader, {
        x: "-150%",
        autoAlpha: 0,
        scale: 0.1,
        borderBottom: "4px solid transparent",
      })
      gsap.set(shadowElement, { autoAlpha: 0 })
      gsap.set(photoElements, { autoAlpha: 0 })

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
        .fromTo(
          photoElements,
          { x: "-200%", autoAlpha: 0 },
          { x: "0%", autoAlpha: 1 }
        )
        .to(photoElements[1], { y: "52%" })
        .to(photoElements[0], { y: "-52%" })
    }
  }, [wrapperRef])
