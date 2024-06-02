import React from "react"
import { SliderCounterWrapper, NumberOfSlide } from "./Projects.styles"

const SliderCounterContainer = ({ slideNumber }) => {
  const formattedSlideNumber = slideNumber < 10 ? `0${slideNumber}` : slideNumber

  return (
  <SliderCounterWrapper>
    <NumberOfSlide>{formattedSlideNumber}</NumberOfSlide>
  </SliderCounterWrapper>
)}

export default SliderCounterContainer
