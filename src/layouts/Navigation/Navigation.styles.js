import styled, { css } from "styled-components"
import { flexCenter } from "./../../components/mixins/mixins"

const NavTitle = styled.span`
  display: block;
  text-decoration: none;
  font: ${({ theme }) => `${theme.fWeight.regular} ${theme.fSize.XXS} Lobster`};
  color: ${({ theme }) => theme.color.white};
`

const NavIcon = styled.span`
  display: block;
  height: 100%;

  .icon_svg {
    transition: 0.3s;
    fill: ${({ theme }) => theme.color.white};
  }
`

const NavItem = styled.span`
  position: relative;
  margin: 0 60px;
  cursor: pointer;
  transition: 0.3s;

  ${NavIcon} {
    transition: 0.3s;
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translate(100%, -50%);
  }

  &:hover {
    transform: scale(0.9);
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
  padding: 0 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.navyLightBlue};
  transition: 0.8s;
  opacity: 1;

  @media screen and (max-width: 1300px) {
    justify-content: center;
  }

  @media screen and (max-width: 1150px) {
    padding: 0;
  }

  @media screen and (max-width: 1050px) {
    padding: 0;
  }

  @media screen and (min-width: 1021px) {
    ${({ navVisible }) => handleNavigationVisibility(navVisible)}
  }

  @media screen and (max-width: 1020px) {
    ${flexCenter};
    justify-content: space-around;
    top: unset;
    bottom: 0;
    opacity: 0;

    ${NavItem} {
      height: 80%;
      width: 90%;
      margin: 0;
    }

    ${NavTitle} {
      display: none;
    }

    .icon_svg {
      width: 30px;
      height: 30px;
    }

    .icon_skills,
    .icon_projects {
      width: 40px;
      height: 40px;
    }

    .icon_projects {
      transform: translateY(1px) !important;
    }

    .icon_phone {
      transform: translateY(-1px) !important;
    }

    ${NavIcon} {
      ${flexCenter};
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%);
    }

    ${({ navVisible }) => handleMobileViewNavigation(navVisible)}
  }

  @media screen and (max-width: 500px) {
    .icon_svg {
      width: 20px;
      height: 20px;
    }

    .icon_skills,
    .icon_projects {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 400px) {
    height: 70px;
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

function handleMobileViewNavigation(isVisible) {
  return isVisible
    ? css`
        transform: translateY(0);
        opacity: 1;
      `
    : css`
        transform: translateY(100%);
        opacity: 0;
      `
}

export { NavBar, NavItem, NavIcon, NavTitle }
