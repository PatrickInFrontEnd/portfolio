import { useEffect } from "react"
import {
  ShadowElement,
  Photo,
  PhotosWrapper,
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
    const pElements = wrapper.querySelectorAll(`${P}`)

    setDescriptionTimeline()

    function setDescriptionTimeline() {
      pElements.forEach((el, i) => {
        const valueFrom =
          window.innerWidth < 1600
            ? i % 2 === 0
              ? "-150px"
              : "150px"
            : "-150px"

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
