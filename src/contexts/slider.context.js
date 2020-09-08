import { createContext } from "react"

const SliderContext = createContext({
  data: [],
  currentSlide: null,
  nextSlide: () => {},
  previousSlide: () => {},
  setSlide: () => {},
  isAnimating: false,
  toggleAnimationStatus: () => {},
})

export default SliderContext
