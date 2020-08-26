import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  IntroductionHeader,
  IntroductionContent,
  DescriptionWrapper,
  DescriptionPhotoWrapper,
} from "./Introduction.styles"

export const useIntroductionLayout = wrapperRef =>
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const wrapper = wrapperRef.current

    const introductionTitle = wrapper.querySelector(`${IntroductionHeader}`)

    const introductionContent = wrapper.querySelector(`${IntroductionContent}`)

    const introductionDescriptionWrapper = wrapper.querySelector(
      `${DescriptionWrapper}`
    )

    const introductionPhoto = wrapper.querySelector(
      `${DescriptionPhotoWrapper}`
    )

    const tl = gsap
      .timeline({
        defaults: {
          ease: "power2.easeInOut",
          duration: 0.4,
        },
      })
      .set([introductionPhoto, introductionDescriptionWrapper], {
        autoAlpha: 0,
      })
      .set(introductionDescriptionWrapper, { x: "+=100%" })
      .set(introductionPhoto, { translateX: "100%" })

    if (window.innerWidth > 1220) {
      tl.fromTo(
        introductionTitle,
        {
          y: "-300px",
          x: "-500px",
          opacity: 0,
          rotate: "-50deg",
        },
        { y: "0", x: "0", opacity: 1, rotate: "0deg" }
      )
        .fromTo(
          introductionContent,
          { x: "-300px", opacity: 0 },
          { x: "0", opacity: 1 }
        )
        .from(introductionContent.children, {
          x: "-100px",
          autoAlpha: 0,
          stagger: 0.2,
        })
        .to(introductionDescriptionWrapper, { x: 0, autoAlpha: 1 })
        .to(introductionPhoto, { x: 0, autoAlpha: 1 })
    } else {
      tl.to(introductionDescriptionWrapper, {
        x: 0,
        autoAlpha: 1,
      }).to(introductionPhoto, { x: 0, autoAlpha: 1 })

      const tlIntroductionTitle = gsap.timeline({
        scrollTrigger: {
          trigger: introductionTitle,
          start: "top center",
        },
      })

      tlIntroductionTitle.fromTo(
        introductionTitle,
        {
          x: "-500px",
          opacity: 0,
          rotate: "-50deg",
          duration: 0.4,
          ease: "power2.easeInOut",
        },
        {
          x: "0",
          opacity: 1,
          rotate: "0deg",
        }
      )

      const tlIntroductionContent = gsap.timeline({
        scrollTrigger: {
          trigger: introductionContent,
          start: "10% center",
        },
        defaults: {
          ease: "power2.easeInOut",
          duration: 0.4,
        },
      })

      tlIntroductionContent
        .fromTo(
          introductionContent,
          {
            x: "-300px",
            opacity: 0,
          },
          { x: "0", opacity: 1 }
        )
        .from(introductionContent.children, {
          x: "-100px",
          autoAlpha: 0,
          stagger: 0.3,
        })
    }
  }, [wrapperRef])
