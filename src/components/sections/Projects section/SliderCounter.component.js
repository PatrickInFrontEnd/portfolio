import React from "react"
import { SliderCounterWrapper, NumberOfSlide } from "./Projects.styles"

const SliderCounterContainer = ({ slideNumber }) => (
  <SliderCounterWrapper>
    <NumberOfSlide>{slideNumber}</NumberOfSlide>
  </SliderCounterWrapper>
)

export default SliderCounterContainer
