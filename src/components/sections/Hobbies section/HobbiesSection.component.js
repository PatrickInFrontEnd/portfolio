import React, { useRef } from "react"
import { HobbyContainer } from "./Hobbies.styles"
import { SectionDividerSecondaryColor } from "../../SectionDivider/SectionDivider.component"
import HobbyPanelsContainer from "./HobbyPanels.container"
import { useHobbiesSectionLayout } from "./useHobbiesSectionLayout"

const MyHobbiesSection = props => {
  const wrapperRef = useRef(null)
  useHobbiesSectionLayout(wrapperRef)

  return (
    <HobbyContainer ref={wrapperRef}>
      <SectionDividerSecondaryColor id="hobbies" />
      <HobbyPanelsContainer />
    </HobbyContainer>
  )
}

export default MyHobbiesSection
