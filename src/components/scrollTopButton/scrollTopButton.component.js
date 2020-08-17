import React, { useContext } from "react"
import { ElipseWrapper, Elipse, Arrow } from "./scrollTopButton.styles"
import { scrollToSection } from "./../../utils/scrollToSection"
import NavigationContext from "./../../contexts/navigation.context"

const ScrollTopButton = props => {
  const { isNavigationVisible } = useContext(NavigationContext)

  return (
    <ElipseWrapper
      isButtonVisible={window.scrollY >= 100 && isNavigationVisible}
      onClick={scrollToSection("#introduction", 80)}
    >
      <Elipse />
      <Arrow />
    </ElipseWrapper>
  )
}
export default ScrollTopButton
