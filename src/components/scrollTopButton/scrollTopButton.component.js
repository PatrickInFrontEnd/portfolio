import React, { useContext, useEffect, useState } from "react"
import { ElipseWrapper, Elipse, Arrow } from "./scrollTopButton.styles"
import { scrollToSection } from "./../../utils/scrollToSection"
import NavigationContext from "./../../contexts/navigation.context"

const ScrollTopButton = props => {
  const { isNavigationVisible, currentY } = useContext(NavigationContext)
  const [documentHeight, setDocumentHeight] = useState(0)

  useEffect(() => {
    setDocumentHeight(document.documentElement.scrollHeight)
  }, [])

  return (
    <ElipseWrapper
      isButtonVisible={
        typeof window !== "undefined" &&
        currentY >= 100 &&
        currentY + window.innerHeight < documentHeight - 400 &&
        isNavigationVisible
      }
      onClick={() => scrollToSection("#introduction", 80)}
    >
      <Elipse />
      <Arrow />
    </ElipseWrapper>
  )
}
export default ScrollTopButton
