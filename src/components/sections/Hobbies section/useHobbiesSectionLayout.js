import { useEffect } from "react"
import { HobbyWrapper, IconWrapper, DescriptionWrapper } from "./Hobbies.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { defaults } from "./../../../utils/animationConstants"
import { TriangleBorder } from "./../../TriangleHeader/TriangleHeader.styles"

export const useHobbiesSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current
    const panels = wrapper.querySelectorAll(`${HobbyWrapper}`)

    const headerBorder = wrapper.querySelector(`${TriangleBorder}`)

    const headerTriangleTl = gsap.timeline({
      defaults,
      scrollTrigger: {
        trigger: headerBorder,
        start: "top 60%",
      },
    })

    headerTriangleTl.from(headerBorder, {
      x: "-50px",
      rotate: "360deg",
      autoAlpha: 0,
    })

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
  }, [wrapperRef])
