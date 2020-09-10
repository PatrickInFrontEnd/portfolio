import React from "react"
import {
  LeftBarWrapper,
  IntroductionIcon,
  IntroductionTitle,
} from "./Introduction.styles"
import TriangleHeader from "./../../TriangleHeader/TriangleHeader.component"

const LeftBarContainer = props => (
  <LeftBarWrapper>
    <TriangleHeader>
      <IntroductionTitle>Welcome to my website!</IntroductionTitle>
    </TriangleHeader>
    <IntroductionIcon />
  </LeftBarWrapper>
)
export default LeftBarContainer
