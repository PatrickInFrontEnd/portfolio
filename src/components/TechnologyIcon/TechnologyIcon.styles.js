import styled from "styled-components"
import { flexCenter, getBackgroundUrl } from "./../mixins/mixins"

const Wrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: center;
  width: 220px;
  min-height: 60px;
  height: auto;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  padding-left: 30px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media screen and (max-width: 1280px) {
    width: 180px;
    min-height: 50px;
  }

  @media screen and (max-width: 750px) {
    width: 160px;
    padding-left: 15px;
  }

  @media screen and (max-width: 520px) {
    width: 50%;
    min-width: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 40%;
    min-width: 180px;
    min-height: 48px;
    padding-left: 12px;
  }
`

const IconName = styled.span`
  font: ${({ theme: { fSize, fWeight } }) =>
    `${fWeight.semiBold} ${fSize.S} Montserrat, Poppins, Arial, sans-serif`};
  text-transform: capitalize;
  text-align: center;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;
  max-width: 100%;
  padding: 0 5px;

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: -40px;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.mediumWhite};
  border-radius: 50%;
  width: 80px;
  height: 80px;

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: 70% 70%;

  @media screen and (max-width: 1280px) {
    width: 65px;
    height: 65px;
  }

  @media screen and (max-width: 750px) {
    left: -35px;
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 380px) {
    left: -25px;
  }

  @media screen and (max-width: 480px) {
    left: -29px;
    width: 58px;
    height: 58px;
    border-width: 1.6px;
    bottom: 2px;
  }
`

export { IconName, IconWrapper, Wrapper }
