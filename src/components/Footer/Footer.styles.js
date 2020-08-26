import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"

const FooterWrapper = styled.div`
  position: relative;
  padding: 40px;
  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.color.navyBlue};
  ${flexCenter};
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 650px) {
    padding: 40px 40px 90px;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 20px 160px;
  }

  @media screen and (max-width: 350px) {
    padding: 20px 10px 160px;
  }
`

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.medium};

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
      right: 50%;
      top: 70px;
      transform: translate(50%, -50%);
    }
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }
`

const LicenseRights = styled.a`
  position: absolute !important;
  bottom: 40px;
  right: 60px;
  font-size: ${({ theme }) => theme.fSize.XS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  text-decoration: none !important;
  color: ${({ theme }) => theme.color.white} !important;

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 920px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 650px) {
    right: unset;
    left: 40px;
  }

  @media screen and (max-width: 450px) {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }
`

export { FooterWrapper, FooterTitle, DirectorLink, LicenseRights }
