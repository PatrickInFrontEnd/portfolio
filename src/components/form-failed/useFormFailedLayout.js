import { useEffect } from "react"
import { Button } from "./../Button/Button.styles"
import { Header } from "./../form-success/Form-success.styles"
import { FormFailedIcon } from "./form-failed.styles"

export const useFormFailedLayout = wrapperRef =>
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default

      const defaultVars = {
        duration: 0.4,
        ease: "power2.out",
      }

      const wrapper = wrapperRef.current
      const headerElement = wrapper.querySelector(`${Header}`)
      const formIcon = wrapper.querySelector(`${FormFailedIcon}`)
      const human = formIcon.querySelector(`#human`)
      const formGreyMessage = formIcon.querySelector(`#grey_message`)
      const formRedMessage = formIcon.querySelector(`#red_message`)
      const button = wrapper.querySelector(`${Button}`)

      const tl = gsap.timeline({ defaults: defaultVars })

      tl.from(headerElement, { opacity: 0, y: "-100%" })
        .from(human, {
          opacity: 0,
        })
        .from(formGreyMessage, { x: "-100px", opacity: 0 })
        .from(formRedMessage, { x: "100px", opacity: 0 })
        .from(button, { y: "-100%", opacity: 0 })
    }

    initAnimation()
  }, [wrapperRef])
