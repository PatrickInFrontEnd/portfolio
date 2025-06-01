import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { defaults } from "./../../../utils/animationConstants"

export const useSkillsSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current

    const technologyIconsWrapper = wrapper.querySelector(
      ".technologies-wrapper"
    )
    const technologyIcons = wrapper.querySelectorAll(".technology-icon-image")
    const laptopIcon = wrapper.querySelector(".laptop-icon-image")

    //NOTE: initial styles for animation
    gsap.set(technologyIcons, {
      x: "-100px",
      autoAlpha: 0,
    })

    // Only set laptop icon styles if it exists (not on mobile)
    if (laptopIcon) {
      gsap.set(laptopIcon, { x: "200px", autoAlpha: 0 })
    }

    const technologyContainerTl = gsap.timeline({
      scrollTrigger: {
        trigger: technologyIconsWrapper,
        start: "40% 80%",
      },
      defaults,
    })

    if (window.innerWidth > 900) {
      technologyContainerTl.to(technologyIcons, {
        x: 0,
        autoAlpha: 1,
      })

      // Only animate laptop if it exists
      if (laptopIcon) {
        technologyContainerTl.to(laptopIcon, {
          x: 0,
          autoAlpha: 1,
        })
      }
    } else {
      technologyContainerTl.to(technologyIcons, {
        x: 0,
        autoAlpha: 1,
        stagger: 0.1,
      })
    }
  }, [wrapperRef])
