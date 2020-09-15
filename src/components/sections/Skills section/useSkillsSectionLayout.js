import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TechnologyIcon, TechnologiesWrapper } from "./SkillsSection.styles"
import { defaults } from "./../../../utils/animationConstants"

export const useSkillsSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current

    const technologyIconsWrapper = wrapper.querySelector(
      `${TechnologiesWrapper}`
    )
    const technologyIcons = wrapper.querySelectorAll(`${TechnologyIcon}`)

    const laptopIcon = `#laptopIcon`

    //NOTE: initial styles for animation
    gsap.set(technologyIcons, {
      x: "-100px",
      autoAlpha: 0,
    })
    gsap.set(laptopIcon, { x: "200px", autoAlpha: 0 })

    const technologyContainerTl = gsap.timeline({
      scrollTrigger: {
        trigger: technologyIconsWrapper,
        start: "40% 80%",
      },
      defaults,
    })

    if (window.innerWidth > 900) {
      technologyContainerTl
        .to(technologyIcons, {
          x: 0,
          autoAlpha: 1,
        })
        .to(laptopIcon, {
          x: 0,
          autoAlpha: 1,
        })
    } else {
      technologyContainerTl.to(technologyIcons, {
        x: 0,
        autoAlpha: 1,
        stagger: 0.1,
      })
    }
  }, [wrapperRef])
