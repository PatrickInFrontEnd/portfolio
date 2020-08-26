import React, { useRef } from "react"
import { HobbyContainer } from "./Hobbies.styles"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import HobbiesIcon from "./../../../assets/images/icon_camera.svg"
import HobbyPanelsContainer from "./HobbyPanels.container"
import { useHobbiesSectionLayout } from "./useHobbiesSectionLayout"

const MyHobbiesSection = props => {
  const wrapperRef = useRef(null)
  useHobbiesSectionLayout(wrapperRef)

  return (
    <HobbyContainer ref={wrapperRef}>
      <SectionHeader id="hobbies">
        My hobbies
        <HobbiesIcon
          style={{
            width: "55px",
            height: "55px",
            right: "-65%",
            top: "50%",

            transform: "translate(0, -50%)",
          }}
        />
      </SectionHeader>
      <HobbyPanelsContainer />
    </HobbyContainer>
  )
}

export default MyHobbiesSection
