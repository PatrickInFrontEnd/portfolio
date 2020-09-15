import { useLayoutEffect } from "react"
import {
  TriangleHeader,
  TriangleBorder,
} from "./../../TriangleHeader/TriangleHeader.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { defaults } from "./../../../utils/animationConstants"

export const useIntroductionSectionLayout = wrapperRef =>
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current
    const introductionHeader = wrapper.querySelector(`${TriangleHeader}`)
    const introductionTriangleBorder = introductionHeader.querySelector(
      `${TriangleBorder}`
    )
    const iconHuman = wrapper.querySelector(`#introduction_icon_human`)
    const iconBorder = wrapper.querySelector(`#introduction_icon_border`)
    const iconMarks = wrapper.querySelector(`#introduction_icon_marks`)

    const tl = gsap.timeline({ defaults })

    tl.from(introductionHeader, {
      x: "100%",
      autoAlpha: 0,
    })
      .from(introductionTriangleBorder, { x: "-50px", autoAlpha: 0 })
      .from(iconBorder, {
        x: "100px",
        autoAlpha: 0,
      })
      .from(iconMarks, { scale: 0.1, autoAlpha: 0 })
      .from(iconHuman, {
        x: "100px",
        y: "-100px",
        autoAlpha: 0,
      })
  }, [wrapperRef])
