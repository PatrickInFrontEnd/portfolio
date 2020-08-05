import styled from "styled-components"

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.navyLightBlue};
`

const NavIcon = styled.span`
  height: 100%;
  color: ${({ theme }) => theme.color.white};
`

const NavItem = styled.span`
  position: relative;
  text-decoration: none;
  font: ${({ theme }) => `${theme.fWeight.regular} ${theme.fSize.XXS} Lobster`};
  color: ${({ theme }) => theme.color.white};
  margin: 0 60px;
  cursor: pointer;

  ${NavIcon} {
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translate(100%, -50%);
  }
`

export { NavBar, NavItem, NavIcon }
