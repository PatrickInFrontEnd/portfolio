import gsap from "gsap"
import { isAnObject } from "./../../../utils/isAnObject"

const animate = (refs, vars = undefined) => {
  let tweenVars = {
    y: "-=100",
    autoAlpha: 0,
    duration: 0.5,
    ease: "power4.easeOut",
  }

  if (isAnObject(vars)) {
    tweenVars = { ...tweenVars, ...vars }
  }

  const tween = gsap.to(refs, tweenVars)

  return tween
}

const fadeOut = (
  refs,
  vars = {
    y: "-=100",
    autoAlpha: 0,
    duration: 0.5,
    ease: "power4.easeOut",
  }
) => animate(refs, vars)

const fadeIn = (
  refs,
  vars = {
    y: "0",
    autoAlpha: 1,
    duration: 0.5,
    ease: "power4.easeOut",
  }
) => animate(refs, vars)

const vanish = (
  refs,
  vars = { autoAlpha: 0, duration: 0.5, ease: "power4.easeOut", y: 0 }
) => animate(refs, vars)

const appear = (
  refs,
  vars = { autoAlpha: 1, duration: 0.5, ease: "power4.easeOut", y: 0 }
) => animate(refs, vars)

export { animate, fadeOut, fadeIn, vanish, appear }
