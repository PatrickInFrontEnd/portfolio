import { useEffect } from "react"
import { HobbyWrapper, IconWrapper, DescriptionWrapper } from "./Hobbies.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const useHobbiesSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const defaultVars = { duration: 0.6, ease: "power2.easeInOut" }
    const wrapper = wrapperRef.current
    const panels = wrapper.querySelectorAll(`${HobbyWrapper}`)

    panels.forEach((panel, i) => {
      const iconElement = panel.querySelector(`${IconWrapper}`)
      const descriptionElement = panel.querySelector(`${DescriptionWrapper}`)
      const isPanelEven = i % 2 === 0

      const valueFromChildren = isPanelEven ? -150 : 150
      //NOTE: initial styles for animation
      gsap.set(iconElement, {
        x: `${valueFromChildren}px`,
        autoAlpha: 0,
      })
      gsap.set(descriptionElement, {
        x: `${-valueFromChildren}px`,
        autoAlpha: 0,
      })

      const tl = gsap.timeline({
        defaults: defaultVars,
        scrollTrigger: {
          trigger: panel,
          start: "top 70%",
        },
      })

      tl.to(iconElement, { x: "0", autoAlpha: 1 }).to(descriptionElement, {
        x: "0",
        autoAlpha: 1,
      })
    })
  }, [wrapperRef])
