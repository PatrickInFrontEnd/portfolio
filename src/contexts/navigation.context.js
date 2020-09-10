import { createContext } from "react"

const navigationContext = createContext({
  isNavigationVisible: false,
  currentY: 0,
  isNavActive: false,
  toggleNavActive: () => {},
})

export default navigationContext
