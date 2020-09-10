import React, { useState } from "react"
import {
  DescriptionWrapper,
  ParagraphsWrapper,
  P,
  NumberOfParagraphWrapper,
  NumberOfParagraph,
} from "./About.styles"
import { data } from "./paragraphsData"

const DescriptionContainer = props => {
  const [paragraphsData] = useState(data)

  const paragraphsItems = paragraphsData.map((p, index) => {
    const number = index + 1
    const paragraphNumber = index < 10 ? `0${number}` : number

    return (
      <P key={index}>
        <span>{p}</span>
        <NumberOfParagraphWrapper>
          <NumberOfParagraph>{paragraphNumber}</NumberOfParagraph>
        </NumberOfParagraphWrapper>
      </P>
    )
  })
  return (
    <DescriptionWrapper>
      <ParagraphsWrapper>{paragraphsItems}</ParagraphsWrapper>
    </DescriptionWrapper>
  )
}
export default DescriptionContainer
