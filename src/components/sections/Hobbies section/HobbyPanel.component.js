import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  DescriptionWrapper,
  HobbyWrapper,
  IconWrapper,
  P,
  Title,
} from "./Hobbies.styles"

const HobbyPanel = ({ reversed, iconImage, title, description }) => {
  return (
    <HobbyWrapper reversed={reversed}>
      <IconWrapper>
        {iconImage && (
          <GatsbyImage
            image={iconImage}
            alt={`${title} icon`}
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
            }}
          />
        )}
      </IconWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <P>{description}</P>
      </DescriptionWrapper>
    </HobbyWrapper>
  )
}

export default HobbyPanel
