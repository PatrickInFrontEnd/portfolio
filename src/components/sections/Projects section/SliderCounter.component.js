import React, { createRef } from "react"
import {
  SliderCounterWrapper,
  NumberOfSlide,
  CounterBackground,
} from "./Projects.styles"

const SliderCounterContainer = ({ slideNumber }) => (
  <SliderCounterWrapper>
    <NumberOfSlide>{slideNumber}</NumberOfSlide>
  </SliderCounterWrapper>
)

export default SliderCounterContainer
