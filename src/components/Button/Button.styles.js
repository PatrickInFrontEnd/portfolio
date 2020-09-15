import React from "react"
import styled, { css } from "styled-components"
import { flexCenter } from "./../mixins/mixins"
import { Link } from "gatsby"

const getBorderColor = (bgColor, theme) => css`
  & > span {
    color: ${bgColor ? bgColor : theme.color.lightGreenBlue};
  }
`

const getAlignment = alignment => {
  switch (alignment) {
    case "space-around": {
      return css`
        justify-content: space-around;
      `
    }
    case "space-between": {
      return css`
        justify-content: space-between;
      `
    }

    case "start": {
      return css`
        justify-content: flex-start;
      `
    }

    case "end": {
      return css`
        justify-content: flex-end;
      `
    }
    default: {
      return css`
        justify-content: center;
      `
    }
  }
}

export const Button = styled.button`
  ${flexCenter};
  justify-content: space-around;
  position: relative;
  ${({ justify }) => (justify ? getAlignment(justify) : "")};
  width: ${({ width }) => (width ? width : "400px")};
  height: ${({ height }) => (height ? height : "80px")};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.color.lightGreenBlue};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  border: none;
  cursor: pointer;

  ${({ bgColor, theme }) => getBorderColor(bgColor, theme)};

  & > span {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 100%;
    border: 2px solid;
    transform: translate(-10px, 10px);
    transition: 0.3s;
  }

  &:hover > span {
    transform: translate(10px, -10px) !important;
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.S};
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.XS};
    height: 60px;
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    width: 240px;
  }
`
const styledLink = { textDecoration: "none", display: "flex" }

export const ButtonLink = props => (
  <Button as={Link} {...props} style={styledLink}>
    <span />
    {props.children}
  </Button>
)

export default props => (
  <Button {...props}>
    <span />
    {props.children}
  </Button>
)
