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
  UsedTechnologiesPanel,
} from "./Projects.styles"
import ArrowIconLeft from "./../../../assets/images/icon_arrow_left.svg"
import ArrowIconRight from "./../../../assets/images/icon_arrow_right.svg"

const LeftBarContainer = props => (
  <LeftBarWrapper>
    <SliderPanel>
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
    <UsedTechnologiesPanel>
      <DescriptionTitle>Used Technologies</DescriptionTitle>
    </UsedTechnologiesPanel>
  </LeftBarWrapper>
)
export default LeftBarContainer
