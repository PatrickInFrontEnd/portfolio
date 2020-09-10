import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"
import ArrowFooterIcon from "./../../assets/images/arrow_footer_top.svg"

const FooterWrapper = styled.div`
  position: relative;
  padding: 40px;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.navyBlue};
  ${flexCenter};
  flex-direction: column;

  @media screen and (max-width: 650px) {
    padding: 20px 40px 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 20px 90px;
    height: unset;
    min-height: 300px;
  }
`

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  text-align: center;

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 920px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 850px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 470px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 450px) {
    margin: 0 auto;
    text-align: center;
  }
`

const DirectorLink = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  svg {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.miniS};

    svg {
      width: 60px;
      height: 60px;
      right: -80px;
    }
  }

  @media screen and (max-width: 450px) {
    margin: 0 auto;

    svg {
      width: 50px;
      height: 50px;
      right: 50%;
      top: 60px;
      transform: translate(50%, -50%);
    }
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }
`

const LicenseRights = styled.a`
  font-size: ${({ theme }) => theme.fSize.XS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  margin: 50px 0;
  text-decoration: none !important;
  color: ${({ theme }) => theme.color.white} !important;

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 920px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }
`
const BackToTopButtonWrapper = styled.span`
  position: absolute;
  ${flexCenter};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.navyBlue};
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 20;

  @media screen and (max-width: 750px) {
    top: -15px;
    width: 50px;
    height: 50px;
  }
`

const BackToTopButton = styled(ArrowFooterIcon)`
  animation: bounceToTop 2s infinite;

  @media screen and (max-width: 750px) {
    width: 20px;
    height: 20px;
  }

  @keyframes bounceToTop {
    0% {
      transform: translateY(0);
    }
    70% {
      transform: translateY(0);
    }

    85% {
      transform: translateY(-8px);
    }

    100% {
      transform: translateY(0);
    }
  }
`

export {
  FooterWrapper,
  FooterTitle,
  DirectorLink,
  LicenseRights,
  BackToTopButtonWrapper,
  BackToTopButton,
}
