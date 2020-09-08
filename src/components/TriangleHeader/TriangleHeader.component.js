import React from "react"
import { TriangleHeader, TriangleBorder } from "./TriangleHeader.styles"

const TriangleHeaderComponent = props => (
  <TriangleHeader noStretch={props.noStretch}>
    <TriangleBorder />
    {props.children}
  </TriangleHeader>
)

export default TriangleHeaderComponent
