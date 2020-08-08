import gsap, { Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export const scrollToSection = (hash, offset = 80) => () => {
  if (!hash || typeof hash !== "string") return

  const target = document.querySelector(hash)
  if (!target) {
    console.error(
      `Element named ${hash} does not exist in your document. Try to write appropriate name hash.`
    )
    return
  }

  const positionY = target.getBoundingClientRect().top

  const targetProps =
    positionY < 0 ? { y: target, offsetY: offset } : { y: target }

  gsap.to(window, {
    scrollTo: targetProps,
    duration: 1,
    ease: Power4.easeInOut,
  })
}
