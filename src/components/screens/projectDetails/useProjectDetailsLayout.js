import { useLayoutEffect } from "react"
import { defaults } from "../../../utils/animationConstants"

export const useProjectDetailsLayout = (wrapperRef, currentProject) =>
  useLayoutEffect(() => {
    // Only run on client-side and when project is loaded
    if (typeof window === "undefined" || !currentProject) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default

      const wrapper = wrapperRef.current
      if (!wrapper) return

      const title = wrapper.querySelector("h1")
      const goBackButton = wrapper.querySelector("button")
      const sliderSection = wrapper.querySelector("[data-slider-section]")
      const leftArrow = wrapper.querySelector("[data-left-arrow]")
      const rightArrow = wrapper.querySelector("[data-right-arrow]")
      const contentSection = wrapper.querySelector("[data-content-section]")
      const sectionTitles = wrapper.querySelectorAll("[data-section-title]")
      const descriptions = wrapper.querySelectorAll("[data-description]")
      const technologiesGrid = wrapper.querySelector("[data-technologies-grid]")

      // Set initial states
      gsap.set([title, goBackButton, sliderSection], {
        autoAlpha: 0,
        y: 50,
      })

      gsap.set([contentSection], {
        autoAlpha: 0,
        y: 30,
      })

      gsap.set([sectionTitles, descriptions], {
        autoAlpha: 0,
        y: 20,
      })

      if (technologiesGrid) {
        gsap.set(technologiesGrid, {
          autoAlpha: 0,
          y: 30,
        })
      }

      if (leftArrow && rightArrow) {
        gsap.set([leftArrow, rightArrow], {
          autoAlpha: 0,
          scale: 0.8,
        })
      }

      // Create animation timeline
      const tl = gsap.timeline({ defaults })

      tl.to(title, {
        autoAlpha: 1,
        y: 0,
      })
        .to(
          goBackButton,
          {
            autoAlpha: 1,
            y: 0,
          },
          "-=0.3"
        )
        .to(
          sliderSection,
          {
            autoAlpha: 1,
            y: 0,
          },
          "-=0.2"
        )

      if (leftArrow && rightArrow) {
        tl.to(
          [leftArrow, rightArrow],
          {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.1,
          },
          "-=0.2"
        )
      }

      // Animate content section
      tl.to(
        contentSection,
        {
          autoAlpha: 1,
          y: 0,
        },
        "-=0.1"
      )
        .to(
          sectionTitles,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
          },
          "-=0.3"
        )
        .to(
          descriptions,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
          },
          "-=0.5"
        )

      if (technologiesGrid) {
        tl.to(
          technologiesGrid,
          {
            autoAlpha: 1,
            y: 0,
          },
          "-=0.2"
        )
      }
    }

    initAnimation()
  }, [currentProject, wrapperRef])
