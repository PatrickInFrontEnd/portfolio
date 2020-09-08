import React, { useContext, useState } from "react"
import {
  NavBar,
  NavItem,
  NavTitle,
  NavigationWrapper,
  HamburgerWrapper,
} from "./Navigation.styles"
import { scrollToSection } from "./../../utils/scrollToSection"
import NavigationContext from "./../../contexts/navigation.context"

const NavigationBar = props => {
  const { isNavigationVisible } = useContext(NavigationContext)

  const [navigationItems, setNavigationItems] = useState([
    { title: "Projects", hash: "#projects" },
    { title: "Skills", hash: "#skills" },
    { title: "About me", hash: "#about" },
    { title: "My hobbies", hash: "#hobbies" },
    { title: "Contact", hash: "#contact" },
  ])

  const handleNavItemClick = hash => () => {
    scrollToSection(hash)
    if (window.innerWidth <= 1020) toggleNavActive()
  }

  const [isNavActive, setIsNavActive] = useState(false)

  const toggleNavActive = () => setIsNavActive(prev => !prev)

  return (
    <NavBar
      navVisible={isNavigationVisible || isNavActive}
      active={isNavActive}
    >
      <NavigationWrapper active={isNavActive}>
        {navigationItems.map(({ title, hash }, i) => (
          <NavItem key={i} onClick={handleNavItemClick(hash)}>
            <NavTitle>{title}</NavTitle>
          </NavItem>
        ))}
      </NavigationWrapper>
      <HamburgerWrapper onClick={toggleNavActive} active={isNavActive}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerWrapper>
    </NavBar>
  )
}

export default NavigationBar
