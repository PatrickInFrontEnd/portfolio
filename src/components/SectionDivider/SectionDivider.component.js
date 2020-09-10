import React from "react"
import {
  SectionHeaderWrapper,
  PrimaryBackground,
  SecondaryBackground,
} from "./SectionDivider.styles"

const SectionDividerPrimaryColor = props => (
  <SectionHeaderWrapper id={props.id || ""}>
    <PrimaryBackground />
  </SectionHeaderWrapper>
)

const SectionDividerSecondaryColor = props => (
  <SectionHeaderWrapper id={props.id || ""}>
    <SecondaryBackground />
  </SectionHeaderWrapper>
)
export { SectionDividerPrimaryColor, SectionDividerSecondaryColor }
