import React from "react"
import {
  DescriptionWrapper,
  DescriptionParagraphWrapper,
  DescriptionP,
} from "./Introduction.styles"
import ProfilePhotoComponent from "./ProfilePhoto.component"

const DescriptionContainer = props => {
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
