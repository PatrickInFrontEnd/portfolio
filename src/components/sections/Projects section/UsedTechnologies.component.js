import React from "react"
import {
  TechnologyWrapper,
  UsedTechnologiesPanel,
  DescriptionTitle,
  TechnologyPanel,
  TechnologyIcon,
} from "./Projects.styles"

const TechnologyPanelContainer = props => (
  <TechnologyWrapper>
    <UsedTechnologiesPanel>
      <DescriptionTitle>Used Technologies</DescriptionTitle>
    </UsedTechnologiesPanel>
    <TechnologyPanel>
      <TechnologyIcon />
    </TechnologyPanel>
  </TechnologyWrapper>
)
export default TechnologyPanelContainer
