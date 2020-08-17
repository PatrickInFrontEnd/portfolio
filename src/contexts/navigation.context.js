import { createContext } from "react"

const navigationContext = createContext({
  isNavigationVisible: false,
  currentY: 0,
})

export default navigationContext
