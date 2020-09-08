import React, { useState } from "react"
import SliderContext from "./../../contexts/slider.context"
import sliderData from "./sliderData"

const SliderProvider = props => {
  const [data] = useState(sliderData)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isAnimating, setAnimationStatus] = useState(false)

  const toggleAnimationStatus = () => setAnimationStatus(prev => !prev)

  const nextSlide = () => {
    setCurrentSlide(prevSlide => {
      return prevSlide >= data.length ? 1 : prevSlide + 1
    })
  }

  const previousSlide = () => {
    setCurrentSlide(prevSlide => {
      return prevSlide <= 1 ? data.length : prevSlide - 1
    })
  }

  const setSlide = number => {
    if (number < 1 || number > data.length || typeof number !== "number") {
      console.error(
        `Your number is inappropriate. Allowed numbers: 1 - ${data.length}`
      )
    } else if (number === currentSlide) return
    else {
      setCurrentSlide(number)
    }
  }

  return (
    <SliderContext.Provider
      value={{
        data,
        isAnimating,
        toggleAnimationStatus,
        nextSlide,
        previousSlide,
        setSlide,
        currentSlide,
      }}
    >
      {props.children}
    </SliderContext.Provider>
  )
}

export default SliderProvider
