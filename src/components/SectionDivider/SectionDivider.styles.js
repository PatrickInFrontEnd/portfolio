import styled from "styled-components"
import PrimaryColorSVG from "./../../assets/images/section_header_primary.svg"
import SecondaryColorSVG from "./../../assets/images/section_header_secondary.svg"

const SectionHeaderWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 90px;
`
const PrimaryBackground = styled(PrimaryColorSVG)`
  position: absolute;
`

const SecondaryBackground = styled(SecondaryColorSVG)`
  position: absolute;
`

export { SectionHeaderWrapper, PrimaryBackground, SecondaryBackground }
