import React from "react"
import { ElipseWrapper, Elipse, Arrow } from "./scrollTopButton.styles"
import { scrollToSection } from "./../../utils/scrollToSection"

const ScrollTopButton = props => (
  <ElipseWrapper onClick={scrollToSection("#introduction", 80)}>
    <Elipse />
    <Arrow />
  </ElipseWrapper>
)
export default ScrollTopButton
