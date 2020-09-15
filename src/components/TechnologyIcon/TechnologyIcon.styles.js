import styled from "styled-components"
import { flexCenter, getBackgroundUrl } from "./../mixins/mixins"

const Wrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: center;
  width: 220px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  padding-left: 30px;

  @media screen and (max-width: 1280px) {
    width: 180px;
    height: 50px;
  }

  @media screen and (max-width: 750px) {
    width: 160px;
    padding-left: 15px;
  }

  @media screen and (max-width: 520px) {
    width: 50%;
    min-width: 200px;
  }
`

const IconName = styled.span`
  font: ${({ theme: { fSize, fWeight } }) =>
    `${fWeight.semiBold} ${fSize.S} Montserrat, Poppins, Arial, sans-serif`};
  text-transform: capitalize;

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.XS};
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
`

export { Wrapper, IconName, IconWrapper }
