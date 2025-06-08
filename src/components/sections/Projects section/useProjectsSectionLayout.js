import { useEffect } from "react"
import { defaults } from "../../../utils/animationConstants"
import { ProjectsIcon } from "./Projects.styles"

export const useProjectsSectionLayout = wrapperRef =>
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

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
    }

    initAnimation()
  }, [wrapperRef])
