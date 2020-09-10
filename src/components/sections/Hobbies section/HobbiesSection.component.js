import React, { useRef } from "react"
import HobbyPanelsContainer from "./HobbyPanels.container"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import { HobbyContainer } from "./Hobbies.styles"
import { SectionDividerSecondaryColor } from "../../SectionDivider/SectionDivider.component"
import { useHobbiesSectionLayout } from "./useHobbiesSectionLayout"

const MyHobbiesSection = props => {
  const wrapperRef = useRef(null)
  useHobbiesSectionLayout(wrapperRef)

  return (
    <HobbyContainer ref={wrapperRef}>
      <SectionDividerSecondaryColor id="hobbies" />
      <SectionHeader style={{ margin: "100px 0 50px" }} noStretch>
        My hobbies
      </SectionHeader>
      <HobbyPanelsContainer />
    </HobbyContainer>
  )
}

export default MyHobbiesSection
