import React from "react"
import { useTheme } from "styled-components"
import {
  DescriptionWrapper,
  DescriptionParagraphWrapper,
  DescriptionP,
} from "./Introduction.styles"
import ProfilePhotoComponent from "./ProfilePhoto.component"

const DescriptionContainer = props => {
  const theme = useTheme()

  return (
    <DescriptionWrapper>
      <ProfilePhotoComponent />
      <DescriptionParagraphWrapper>
        <DescriptionP>Patryk Płuciennik</DescriptionP>
        <DescriptionP>20 years old</DescriptionP>
      </DescriptionParagraphWrapper>
    </DescriptionWrapper>
  )
}

export default DescriptionContainer
