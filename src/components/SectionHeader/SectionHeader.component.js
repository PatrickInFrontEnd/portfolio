import React from "react"
import { SectionHeaderWrapper, SectionTitle } from "./SectionHeader.styles"

const SectionHeaderContainer = props => (
  <SectionHeaderWrapper id={props.id || ""}>
    <SectionTitle>{props.children}</SectionTitle>
  </SectionHeaderWrapper>
)
export default SectionHeaderContainer
