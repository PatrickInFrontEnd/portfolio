import styled from "styled-components"
import { flexCenter, getBackgroundUrl } from "./../mixins/mixins"

const Wrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: center;
  width: 152px;
  min-height: 41px;
  height: auto;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  padding-left: 23px;
  padding-top: 7px;
  padding-bottom: 7px;

  @media screen and (max-width: 1280px) {
    width: 120px;
    min-height: 34px;
    padding-left: 18px;
  }

  @media screen and (max-width: 900px) {
    width: 110px;
    min-height: 32px;
    padding-left: 16px;
  }

  @media screen and (max-width: 750px) {
    width: 100px;
    min-height: 30px;
    padding-left: 14px;
  }

  @media screen and (max-width: 600px) {
    width: 90px;
    min-height: 28px;
    padding-left: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 85px;
    min-height: 26px;
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  @media screen and (max-width: 380px) {
    width: 80px;
    min-height: 24px;
    padding-left: 8px;
  }
`

const IconName = styled.span`
  font: ${({ theme: { fSize, fWeight } }) =>
    `${fWeight.medium} ${fSize.static[4]} Montserrat, Poppins, Arial, sans-serif`};
  text-transform: capitalize;
  text-align: center;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.1;
  max-width: 100%;
  padding: 0 4px;

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }

  @media screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fSize.miniXXS};
  }

  @media screen and (max-width: 750px) {
    font-size: ${({ theme }) => theme.fSize.miniXXS};
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.miniXXS};
    line-height: 1;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fSize.miniXXS};
    padding: 0 2px;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
    padding: 0 1px;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: -28px;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.mediumWhite};
  border-radius: 50%;
  width: 55px;
  height: 55px;

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: 70% 70%;

  @media screen and (max-width: 1280px) {
    width: 44px;
    height: 44px;
    left: -22px;
  }

  @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
    left: -20px;
  }

  @media screen and (max-width: 750px) {
    width: 36px;
    height: 36px;
    left: -18px;
  }

  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
    left: -16px;
    border-width: 1.5px;
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
    left: -15px;
    border-width: 1.2px;
    bottom: 1px;
  }

  @media screen and (max-width: 380px) {
    width: 28px;
    height: 28px;
    left: -14px;
    border-width: 1px;
  }
`

export { IconName, IconWrapper, Wrapper }
