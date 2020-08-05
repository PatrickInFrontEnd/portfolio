import React, { useEffect } from "react"
import { NavBar, NavItem, NavIcon } from "./Navigation.styles"
import ProjectsIcon from "./../../assets/images/icon_projects.svg"
import HobbiesIcon from "./../../assets/images/icon_camera.svg"
import ContactIcon from "./../../assets/images/icon_phone.svg"
import SkillsIcon from "./../../assets/images/icon_skills.svg"
import AboutMeIcon from "./../../assets/images/icon_user.svg"
import gsap, { Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const NavigationBar = props => {
  const scrollToSection = hash => () => {
    if (!hash || typeof hash !== "string") return

    const target = hash

    gsap.to(window, {
      scrollTo: { y: target, offsetY: 80 },
      duration: 1,
      ease: Power4.easeInOut,
    })
  }

  return (
    <NavBar>
      <NavItem onClick={scrollToSection("#projects")}>
        Projects
        <NavIcon>
          <ProjectsIcon style={{ transform: "translateY(5px)" }} />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#skills")}>
        Skills
        <NavIcon>
          <SkillsIcon />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#about")}>
        About me
        <NavIcon>
          <AboutMeIcon />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#hobbies")}>
        My hobbies
        <NavIcon>
          <HobbiesIcon />
        </NavIcon>
      </NavItem>
      <NavItem onClick={scrollToSection("#contact")}>
        Contact
        <NavIcon>
          <ContactIcon />
        </NavIcon>
      </NavItem>
    </NavBar>
  )
}

export default NavigationBar
