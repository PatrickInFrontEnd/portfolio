import React from "react"
import NavigationProvider from "./src/providers/navigation_provider/navigation.provider"
import ThemeProvider from "./src/providers/theme_provider/theme.provider"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <NavigationProvider>{element}</NavigationProvider>
  </ThemeProvider>
)
