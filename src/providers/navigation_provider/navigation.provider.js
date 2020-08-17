import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useDebouncedState } from "./../../utils/useDebounce"
import NavigationContext from "./../../contexts/navigation.context"

const NavigationProvider = ({ children }) => {
  const [isNavVisible, setNavVisibility] = useState(true)
  const [currentY, setCurrentY] = useState(0)
  const debouncedCurrY = useDebouncedState(currentY, 200)

  useScrollPosition(({ prevPos, currPos }) => {
    const isVisible = currPos.y > prevPos.y
    if (isNavVisible !== isVisible && currentY >= 80)
      setNavVisibility(isVisible)

    if (currPos.y === 0) setCurrentY(currPos.y)
    else setCurrentY(-currPos.y)
  })

  return (
    <NavigationContext.Provider
      value={{
        isNavigationVisible: isNavVisible,
        currentY: debouncedCurrY,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
