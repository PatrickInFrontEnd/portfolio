import { useEffect } from "react"
import { ProjectsIcon } from "./Projects.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { defaults } from "./../../../utils/animationConstants"

export const useProjectsSectionLayout = wrapperRef =>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current

    const icon = wrapper.querySelector(`${ProjectsIcon}`)
    const iconHuman = wrapper.querySelector(`#projects_icon_human`)
    const iconBorder = wrapper.querySelector(`#projects_icon_border`)
    const iconFloor = wrapper.querySelector(`#projects_icon_floor`)
    const iconCircle = wrapper.querySelector(`#blue_circle`)
    const iconBlueTile = wrapper.querySelector(`#blue_tile`)
    const iconBlueTileBorder = wrapper.querySelector(`#border_blue_tile`)

    const tlProjectsIcon = gsap.timeline({
      defaults: { ...defaults, autoAlpha: 0 },
      scrollTrigger: {
        trigger: icon,
        start: "30% 50%",
      },
    })

    tlProjectsIcon
      .from(iconBorder, { x: "100px" })
      .from(iconCircle, {})
      .from(iconBlueTileBorder, { y: "50px", x: "-50px" })
      .from([iconHuman, iconBlueTile, iconFloor], { x: "-50px" })
  }, [wrapperRef])
