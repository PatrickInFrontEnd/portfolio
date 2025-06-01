import { useEffect } from "react"
import { defaults } from "../../../utils/animationConstants"
import { AboutSectionIcon, NumberOfParagraphWrapper, P } from "./About.styles"

export const useAboutSectionLayout = wrapperRef =>
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      const wrapper = wrapperRef.current
      const pElements = wrapper.querySelectorAll(`${P}`)

      const icon = wrapper.querySelector(`${AboutSectionIcon}`)
      const iconHuman = wrapper.querySelector(`#aboutme_icon_human`)
      const iconLaptop = wrapper.querySelector(`#introduction_icon_laptop`)
      const iconApple = wrapper.querySelector(`#aboutme_icon_apple`)
      const iconFloor = wrapper.querySelector(`#aboutme_icon_floor`)
      const iconBookShelfs = wrapper.querySelector(`#aboutme_icon_shelfs`)
      const iconFirstShelf = wrapper.querySelector(`#aboutme_icon_firstshelf`)
      const iconSecondShelf = wrapper.querySelector(`#aboutme_icon_secondshelf`)
      const iconThirdShelf = wrapper.querySelector(`#aboutme_icon_thirdshelf`)

      if (window.innerWidth <= 900) {
        handleMobileLayout()
      } else {
        handlePcLayout()
      }

      function setIconTimeline() {
        const tlIcon = gsap.timeline({
          defaults,
          scrollTrigger: {
            trigger: icon,
            start: "top 50%",
          },
        })

        tlIcon
          .from(iconFloor, { x: "-100px", autoAlpha: 0 })
          .from(iconBookShelfs, { x: "-100px", autoAlpha: 0 })
          .from([iconFirstShelf, iconSecondShelf, iconThirdShelf], {
            y: "-100px",
            autoAlpha: 0,
            stagger: 0.2,
          })
          .from(iconHuman, { y: "-100px", x: "100px", z: "40px", autoAlpha: 0 })
          .from(iconLaptop, { y: "-100px", autoAlpha: 0 })
          .from(iconApple, { x: "100px", autoAlpha: 0 })
      }

      function handlePcLayout() {
        setIconTimeline()
      }

      function handleMobileLayout() {
        setIconTimeline()

        pElements.forEach((el, i) => {
          const valueFrom = i % 2 === 0 ? "-100px" : "100px"

          const tl = gsap.timeline({
            defaults,
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
            },
          })

          const numberWrapper = el.querySelector(`${NumberOfParagraphWrapper}`)

          tl.from(numberWrapper, { x: valueFrom, autoAlpha: 0 })
        })
      }
    }

    initAnimation()
  }, [wrapperRef])
