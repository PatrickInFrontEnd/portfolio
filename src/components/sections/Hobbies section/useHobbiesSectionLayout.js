import { useEffect } from "react"
import { defaults } from "../../../utils/animationConstants"
import { DescriptionWrapper, HobbyWrapper, IconWrapper } from "./Hobbies.styles"

export const useHobbiesSectionLayout = wrapperRef =>
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

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
          defaults,
          scrollTrigger: {
            trigger: panel,
            start: "top center",
          },
        })

        tl.to([iconElement, descriptionElement], {
          x: "0",
          autoAlpha: 1,
        })
      })
    }

    initAnimation()
  }, [wrapperRef])
