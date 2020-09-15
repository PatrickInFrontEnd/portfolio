import styled, { css } from "styled-components"
import { flexCenter } from "./../../components/mixins/mixins"

const NavTitle = styled.span`
  display: block;
  text-decoration: none;
  font: ${({ theme }) =>
    `${theme.fWeight.medium} ${theme.fSize.XXXS} Montserrat`};
  color: ${({ theme }) => theme.color.white};
`

const NavItem = styled.span`
  position: relative;
  margin: 0 50px 0 0;
  cursor: pointer;
  transition: 0.3s;

  &:last-of-type {
    margin: 0;
  }

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 110%;
    position: absolute;
    left: -30px;
    bottom: 0px;
    background-color: ${({ theme }) => theme.color.primaryBlue};
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover::before {
    left: -10px;
    opacity: 1;
  }

  @media screen and (max-width: 1020px) {
    ${flexCenter};
    height: 40px;
    margin: 15px 0 !important;
    width: unset;
    margin: 0;

    &:first-of-type {
      margin: 5px 0;
    }

    &::before {
      width: 40px;
    }
  }

  @media screen and (max-width: 700px) and (orientation: landscape) {
    margin: 5px 0;
  }
`

const hamburgerActiveStyles = css`
  span {
    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%) rotate(45deg);
    }

    &:nth-of-type(3) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%) rotate(-45deg);
    }

    &:first-of-type {
      opacity: 0;
    }
  }
`
const navbarActiveStyles = css`
  display: flex;
`

const NavigationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1300px) {
    justify-content: center;
  }

  @media screen and (max-width: 1020px) {
    ${flexCenter};
    flex-direction: column;
    transition: 0.3s;
    padding: 40px 0;
    display: none;

    ${({ active }) => (active ? navbarActiveStyles : "")}
  }

  @media screen and (max-width: 700px) and (orientation: landscape) {
    ${({ active }) =>
      active
        ? `width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0;`
        : ""}
  }
`

const HamburgerWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  transform: translate(-15px, -15px);
  ${flexCenter};
  align-items: flex-end;
  flex-direction: column;
  width: 50px;
  height: 50px;
  padding: 10px;
  overflow: hidden !important;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    margin: 3px 0;
    background-color: ${({ theme }) => theme.color.mediumWhite};
    transition: 0.3s;

    &:first-of-type {
      width: 60%;
      margin: 0 0 3px;
    }

    &:last-of-type {
      margin: 3px 0 0 0;
    }
  }

  ${({ active }) => (active ? hamburgerActiveStyles : "")}

  @media screen and (min-width: 1021px) {
    display: none;
  }
`

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  width: 100%;
  height: 80px;
  min-height: 80px;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
  transition: 0.8s;
  opacity: 1;
  ${({ navVisible }) => handleNavigationVisibility(navVisible)}

  @media screen and (max-width: 1150px) {
    padding: 0;
  }

  @media screen and (max-width: 1050px) {
    padding: 0;
  }

  @media screen and (max-width: 1020px) {
    padding: 10px 0;
    height: auto;
  }

  @media screen and (max-width: 700px) and (orientation: landscape) {
    ${({ active }) => (active ? `height:100vh;` : ``)}
  }
`

function handleNavigationVisibility(isVisible) {
  return isVisible
    ? css`
        transform: translateY(0);
        opacity: 1;
      `
    : css`
        transform: translateY(-100%);
        opacity: 0;
      `
}

export { NavBar, NavItem, NavTitle, NavigationWrapper, HamburgerWrapper }
