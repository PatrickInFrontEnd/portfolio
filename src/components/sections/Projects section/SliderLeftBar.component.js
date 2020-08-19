import React from "react"
import {
  LeftBarWrapper,
  SliderPanel,
  Title,
  SliderDescription,
  DescriptionTitle,
  DescriptionParagraph,
  ButtonsPanel,
  ButtonsWrapper,
  SlidesCounter,
} from "./Projects.styles"
import ArrowIconLeft from "./../../../assets/images/icon_arrow_left.svg"
import ArrowIconRight from "./../../../assets/images/icon_arrow_right.svg"

const LeftBarContainer = props => (
  <LeftBarWrapper>
    <SliderPanel id="slider_title">
      <Title>Vacation booking</Title>
    </SliderPanel>

    <SliderDescription>
      <DescriptionTitle>Description :</DescriptionTitle>

      <DescriptionParagraph>
        Vacation landing page - created for learning purposes.
      </DescriptionParagraph>
    </SliderDescription>
    <ButtonsPanel>
      <ButtonsWrapper>
        <ArrowIconLeft />
        <ArrowIconRight />
      </ButtonsWrapper>
      <SlidesCounter>1</SlidesCounter>
    </ButtonsPanel>
  </LeftBarWrapper>
)
export default LeftBarContainer
