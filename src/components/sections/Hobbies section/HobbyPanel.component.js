import React from "react"

import {
  HobbyWrapper,
  IconWrapper,
  Icon,
  DescriptionWrapper,
  Title,
  P,
} from "./Hobbies.styles"

const HobbyPanel = ({ reversed, iconSrc, title, description }) => {
  return (
    <HobbyWrapper reversed={reversed}>
      <IconWrapper>
        <Icon src={iconSrc} alt={`${title} icon`} />
      </IconWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <P>{description}</P>
      </DescriptionWrapper>
    </HobbyWrapper>
  )
}
export default HobbyPanel
