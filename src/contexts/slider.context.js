import { createContext } from "react"

const SliderContext = createContext({
  currentSlide: null,
  nextSlide: () => {},
  prevSlide: () => {},
  animating: false,
  toggleAnimationStatus: () => {},
})

export default SliderContext
