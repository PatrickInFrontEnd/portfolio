import styled, { css } from "styled-components"
import TriangleIcon from "./../../assets/images/triangle.svg"

const TriangleTitleStyles = css`
  position: relative;
  z-index: 1;
`

const NotStretchingStyles = css`
  display: inline-block;
`

const addMargin = margin => css`
  margin: ${margin};
`

const TriangleHeader = styled.header`
  ${TriangleTitleStyles};
  ${({ noStretch }) => (noStretch ? NotStretchingStyles : "")};
  ${({ extraMargin }) => addMargin(extraMargin)};
`

const TriangleBorder = styled(TriangleIcon)`
  width: 60%;
  height: 110%;
  position: absolute;
  bottom: 0;
  left: -30%;
  z-index: -1;
`

export { TriangleHeader, TriangleBorder }
