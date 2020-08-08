import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./theme"
const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    body{
        width:100%;
        padding-top:80px;
        font-size: ${({ theme }) => theme.fSize.XXS};
        font-family : Montserrat, Poppins, Arial, Helvetica, sans-serif;
        font-weight: ${({ theme }) => theme.fWeight.medium};
        color: ${({ theme }) => theme.color.white};
    }
`

const Provider = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </ThemeProvider>
)

export default Provider
