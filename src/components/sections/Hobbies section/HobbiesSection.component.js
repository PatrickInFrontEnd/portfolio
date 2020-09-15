import React, { useRef } from "react"
import HobbyPanelsContainer from "./HobbyPanels.container"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import { HobbyContainer } from "./Hobbies.styles"
import { useHobbiesSectionLayout } from "./useHobbiesSectionLayout"

const MyHobbiesSection = props => {
  const wrapperRef = useRef(null)
  useHobbiesSectionLayout(wrapperRef)

  return (
    <HobbyContainer ref={wrapperRef} id="hobbies">
      <SectionHeader noStretch>My hobbies</SectionHeader>
      <HobbyPanelsContainer />
    </HobbyContainer>
  )
}

export default MyHobbiesSection
