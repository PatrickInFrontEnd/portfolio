import { useEffect } from "react"
import gsap from "gsap"
import { Header } from "./Form-success.styles"
import { Button } from "./../Button/Button.styles"

export const useFormSuccessLayout = wrapperRef =>
  useEffect(() => {
    const defaultVars = {
      duration: 0.6,
      ease: "power2.easeInOut",
    }

    const wrapper = wrapperRef.current
    const headerElement = wrapper.querySelector(`${Header}`)
    const human = wrapper.querySelectorAll(`.human`)
    const formBorder = wrapper.querySelector(`.checklist.border`)
    const formTick = wrapper.querySelectorAll(`.checklist.tick`)
    const formMessages = wrapper.querySelectorAll(`.checklist.message`)
    const button = wrapper.querySelector(`${Button}`)

    const tl = gsap.timeline({ defaults: defaultVars })

    tl.from(headerElement, { opacity: 0, y: "-100%" })
      .from(human, {
        opacity: 0,
      })
      .from(formBorder, { x: "-400px", opacity: 0 })
      .addLabel("formTick")
      .from(formTick, { x: "-400px", opacity: 0 })
      .from(formMessages, { x: "100px", opacity: 0 }, "formTick")
      .from(button, { x: "-100%", opacity: 0 })
  }, [wrapperRef])
