import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { TechnologyIconWrapper, TechnologyPanel } from "./SkillsSection.styles"

const TechnologiesPanel = ({ sources }) => (
  <TechnologyPanel>
    {sources.map(({ image, id }) => (
      <TechnologyIconWrapper key={id}>
        <GatsbyImage
          className="technology-icon-image"
          image={image}
          alt="Technology icon"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </TechnologyIconWrapper>
    ))}
  </TechnologyPanel>
)

export default TechnologiesPanel
