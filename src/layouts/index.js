import React from "react"
import ThemeProvider from "../providers/theme_provider/theme.provider"
import NavigationBar from "./Navigation/Navigation.component"
import NavigationProvider from "./../providers/navigation_provider/navigation.provider"

const Layout = props => (
  <ThemeProvider>
    <NavigationProvider>
      <NavigationBar />
      {props.children}
    </NavigationProvider>
  </ThemeProvider>
)

export default Layout
