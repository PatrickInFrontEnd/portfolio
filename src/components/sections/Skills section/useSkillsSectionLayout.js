import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  SkillsTitle,
  TechnologyIcon,
  TechnologiesWrapper,
} from "./SkillsSection.styles"

export const useSkillsSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current

    const skillsTitleElement = wrapper.querySelector(`${SkillsTitle}`)

    const technologyIconsWrapper = wrapper.querySelector(
      `${TechnologiesWrapper}`
    )
    const technologyIcons = wrapper.querySelectorAll(`${TechnologyIcon}`)

    const laptopIcon = "#laptopIcon"

    //NOTE: initial styles for animation
    gsap.set(technologyIcons, {
      x: "-100px",
      autoAlpha: 0,
    })
    gsap.set(laptopIcon, { x: "200px", autoAlpha: 0 })

    const skillsTitleTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsTitleElement,
        start: "top 80%",
      },
      defaults: {
        duration: 0.6,
        ease: "power2.easeInOut",
      },
    })

    skillsTitleTl.fromTo(
      skillsTitleElement,
      { x: "-300px", autoAlpha: 0 },
      { x: "0", autoAlpha: 1 }
    )

    const technologyContainerTl = gsap.timeline({
      scrollTrigger: {
        trigger: technologyIconsWrapper,
        start: "40% 80%",
      },
      defaults: {
        duration: 0.2,
        ease: "power2.easeInOut",
      },
    })

    if (window.innerWidth > 900) {
      technologyContainerTl
        .to(technologyIcons, {
          x: 0,
          autoAlpha: 1,
          stagger: 0.2,
        })
        .to(laptopIcon, {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
        })
    } else {
      technologyContainerTl.to(technologyIcons, {
        x: 0,
        autoAlpha: 1,
        stagger: 0.3,
      })
    }
  }, [wrapperRef])
