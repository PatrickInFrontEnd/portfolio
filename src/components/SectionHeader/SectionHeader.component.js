import React from "react"
import { SectionHeader, Wrapper } from "./SectionHeader.styles"
import TriangleHeader from "./../TriangleHeader/TriangleHeader.component"

const SectionHeaderContainer = props => (
  <Wrapper>
    <TriangleHeader {...props}>
      <SectionHeader>{props.children}</SectionHeader>
    </TriangleHeader>
  </Wrapper>
)
export default SectionHeaderContainer
