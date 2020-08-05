import React from "react"
import ThemeProvider from "./../themes/theme.provider"
import NavigationBar from "./Navigation/Navigation.component"

const Layout = props => (
  <ThemeProvider>
    <NavigationBar />
    {props.children}
  </ThemeProvider>
)

export default Layout
