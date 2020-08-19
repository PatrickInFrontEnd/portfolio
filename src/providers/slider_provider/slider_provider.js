import React, { useState, useEffect } from "react"
import SliderContext from "./../../contexts/slider.context"
import sliderData from "./sliderData"
import { filterById } from "./../../utils/filter"

const SliderProvider = props => {
  const [data, setSliderData] = useState(sliderData)
  const [currentSlide, setCurrentSlide] = useState(data[0])
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isAnimating, setAnimationStatus] = useState(false)

  const toggleAnimationStatus = () =>
    setAnimationStatus(prevStatus => !prevStatus)

  const nextSlide = () => {
    if (isAnimating) return
    setCurrentIndex(prevIndex => {
      return prevIndex >= data.length ? 1 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    if (isAnimating) return
    setCurrentIndex(prevIndex => {
      return prevIndex <= 1 ? data.length : prevIndex - 1
    })
  }

  useEffect(() => {
    setCurrentSlide(data.filter(filterById(currentIndex))[0])
  }, [currentIndex, data])

  return (
    <SliderContext.Provider
      value={{
        animating: isAnimating,
        nextSlide,
        prevSlide,
        toggleAnimationStatus,
        currentSlide,
      }}
    >
      {props.children}
    </SliderContext.Provider>
  )
}

export default SliderProvider
