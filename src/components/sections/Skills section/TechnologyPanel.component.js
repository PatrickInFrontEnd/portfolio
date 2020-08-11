import React from "react"
import { TechnologyIcon, TechnologyPanel } from "./SkillsSection.styles"

const TechnologiesPanel = ({ sources }) => (
  <TechnologyPanel>
    {sources.map(({ src, id }) => (
      <TechnologyIcon src={src} key={id} alt="Technology icon" />
    ))}
  </TechnologyPanel>
)
export default TechnologiesPanel
