import gsap, { Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export const scrollToSection = (hash, offset = 80) => {
  if (!hash || typeof hash !== "string") return

  const target = document.querySelector(hash)

  if (!target) {
    console.error(
      `Element named ${hash} does not exist in your document. Try to write appropriate name hash.`
    )
    return
  }

  const targetProps = getScrollTargetProps(target, offset)

  gsap.to(window, {
    scrollTo: targetProps,
    duration: 1.5,
    ease: Power4.easeInOut,
  })
}

function getScrollTargetProps(target, offset = 80) {
  let targetProps
  const positionY = target.getBoundingClientRect().top

  targetProps = positionY < 0 ? { y: target, offsetY: offset } : { y: target }

  return targetProps || undefined
}
