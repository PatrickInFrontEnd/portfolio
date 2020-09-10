import React from "react"
import { TriangleHeader, TriangleBorder } from "./TriangleHeader.styles"

const TriangleHeaderComponent = props => (
  <TriangleHeader {...props}>
    <TriangleBorder />
    {props.children}
  </TriangleHeader>
)

export default TriangleHeaderComponent
