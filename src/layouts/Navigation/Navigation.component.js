import React, { useContext } from "react"
import { NavBar, NavItem, NavIcon, NavTitle } from "./Navigation.styles"
import ProjectsIcon from "./../../assets/images/icon_projects.svg"
import HobbiesIcon from "./../../assets/images/icon_camera.svg"
import ContactIcon from "./../../assets/images/icon_phone.svg"
import SkillsIcon from "./../../assets/images/icon_skills.svg"
import AboutMeIcon from "./../../assets/images/icon_user.svg"
import { scrollToSection } from "./../../utils/scrollToSection"
import NavigationContext from "./../../contexts/navigation.context"

const NavigationBar = props => {
  const { isNavigationVisible } = useContext(NavigationContext)

  return (
    <NavBar navVisible={isNavigationVisible}>
      <NavItem onClick={scrollToSection("#projects")}>
        <NavTitle>Projects</NavTitle>
        <NavIcon>
          <ProjectsIcon style={{ transform: "translateY(5px)" }} />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#skills")}>
        <NavTitle>Skills</NavTitle>
        <NavIcon>
          <SkillsIcon />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#about")}>
        <NavTitle>About me</NavTitle>
        <NavIcon>
          <AboutMeIcon />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#hobbies")}>
        <NavTitle>My hobbies</NavTitle>
        <NavIcon>
          <HobbiesIcon style={{ transform: "translateY(2px)" }} />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#contact")}>
        <NavTitle>Contact</NavTitle>
        <NavIcon>
          <ContactIcon style={{ transform: "translateY(1px)" }} />
        </NavIcon>
      </NavItem>
    </NavBar>
  )
}

export default NavigationBar
