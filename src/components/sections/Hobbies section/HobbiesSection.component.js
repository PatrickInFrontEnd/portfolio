import React from "react"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import HobbiesIcon from "./../../../assets/images/icon_camera.svg"
import HobbyPanelsContainer from "./HobbyPanels.container"

const MyHobbiesSection = props => (
  <>
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
  </>
)

export default MyHobbiesSection
