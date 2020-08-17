import React from "react"
import NavigationBar from "./Navigation/Navigation.component"

const Layout = props => (
  <>
    <NavigationBar />
    {props.children}
  </>
)

export default Layout
