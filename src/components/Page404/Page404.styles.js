import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"
import { Link } from "gatsby"
import Icon404 from "./../../assets/images/page_not_found.svg"
import ArrowLeftIcon from "./../../assets/images/icon_arrow_left.svg"

const Wrapper = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.navyBlue};
  z-index: 1000000000000000;
  padding: 0 20px;

  @media screen and (max-width: 650px) and (orientation: landscape) {
    padding: 20px;
  }
`

const NavHeader = styled.h2`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fSize.semiBold};

  @media screen and (max-width: 1020px) {
    display: none;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fSize.semiBold};

  @media screen and (max-width: 1650px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 1250px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.S};
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
    text-align: center;
    margin-bottom: 20px;
  }
`
const IconGoBack = styled(ArrowLeftIcon)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
  animation: bounceBack 1s infinite;
  transition: 0.3s;
  fill: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 600px) {
    display: none;
  }

  @keyframes bounceBack {
    0% {
      transform: translate(0px, -50%);
    }
    40% {
      transform: translate(-10px, -50%);
    }
    100% {
      transform: translate(0px, -50%);
    }
  }
`

const GoBackLink = styled(Link)`
  ${flexCenter};
  position: relative;
  width: 350px;
  height: 100px;
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  text-align: center;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};

    ${IconGoBack} {
      fill: ${({ theme }) => theme.color.darkBlue};
    }
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`

const IconError = styled(Icon404)`
  width: 60vw;
  height: 60vh;

  @media screen and (max-width: 650px) {
    width: 80vw;
    height: 50vh;
  }
`

export { Wrapper, Title, GoBackLink, IconError, IconGoBack, NavHeader }
