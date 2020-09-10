import React from "react"
import {
  HobbyWrapper,
  IconWrapper,
  Icon,
  DescriptionWrapper,
  Title,
  P,
} from "./Hobbies.styles"
import TriangleHeader from "./../../TriangleHeader/TriangleHeader.component"

const HobbyPanel = ({ reversed, iconSrc, title, description }) => {
  return (
    <HobbyWrapper reversed={reversed}>
      <IconWrapper>
        <Icon src={iconSrc} alt={`${title} icon`} />
      </IconWrapper>
      <DescriptionWrapper>
        <TriangleHeader extraMargin="20px 0 40px">
          <Title>{title}</Title>
        </TriangleHeader>

        <P>{description}</P>
      </DescriptionWrapper>
    </HobbyWrapper>
  )
}
export default HobbyPanel
