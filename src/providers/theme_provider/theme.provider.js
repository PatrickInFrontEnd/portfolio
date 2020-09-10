import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../../themes/theme"
const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    html{
      font-size:9px;

        @media screen and (max-width: 750px) {
          font-size: 8px;
        }
        
        @media screen and (max-width: 500px) {
          font-size: 7px;
        }
    }

    body{
        width:100%;
        padding-top:80px;
        font-size: ${({ theme }) => theme.fSize.XXS};
        font-family : Montserrat, Poppins, Arial, Helvetica, sans-serif;
        font-weight: ${({ theme }) => theme.fWeight.medium};
        background-color: ${({ theme }) => theme.color.darkBlue};
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
