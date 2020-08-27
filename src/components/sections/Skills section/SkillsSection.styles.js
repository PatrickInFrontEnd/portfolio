import styled, { css } from "styled-components"
import { flexCenter } from "../../mixins/mixins"
import ArrowSVG from "./../../../assets/images/icon_arrow_white.svg"
import WaveSVG from "./../../../assets/images/wave_bgc.svg"

const SkillsSectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};

  @media screen and (max-width: 1200px) {
    padding: 60px 0 0;
  }
`

const SkillsTitle = styled.h2`
  position: relative;
  ${flexCenter};
  height: 80px;
  margin: 30px auto 80px;
  letter-spacing: 20px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fWeight.bold};
  font-size: ${({ theme }) => theme.fSize.XL};
  font-family: Montserrat, Poppins, Arial, sans-serif;

  @media screen and (max-width: 1500px) {
    margin: 30px auto 40px;
  }

  @media screen and (max-width: 1400px) {
    margin: 30px auto 0px;
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 1000px) {
    margin: 0px auto 50px;
  }

  @media screen and (max-width: 800px) {
    letter-spacing: 10px;
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.M};
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

const IconsWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 900px;
  padding: 150px 300px;
  margin-bottom: 100px;
  ${flexCenter};
  justify-content: space-around;

  @media screen and (max-width: 1500px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1100px) {
    justify-content: space-between;
    padding: 150px 100px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    padding: 150px 50px;
    min-height: unset;
    height: 650px;
    background-color: #fff;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    height: 550px;
  }

  @media screen and (max-width: 400px) {
    height: 450px;
  }
`

const WaveIcon = styled(WaveSVG)`
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 100%;
  height: 1000px;
  z-index: 0;
  fill: ${({ theme }) => theme.color.mediumWhite};

  @media screen and (max-width: 1300px) {
    width: 120%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  z-index: 1;
`

const TechnologyPanel = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100px;
  margin-bottom: 50px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 0px;
  }
`

const TechnologyIcon = styled.img`
  display: block;
  width: 100px;
  height: 100%;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 1100px) {
    width: 80px;
    height: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }

  @media screen and (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`

const LaptopPNG = styled.img`
  display: block;
  width: 500px;
  height: 80%;
  z-index: 1;

  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 60%;
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const SkillsDescriptionBar = styled.div`
  ${flexCenter};
  justify-content: space-around;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};
  padding: 30px 30px 0 30px;
  border-top: 4px solid ${({ theme }) => theme.color.white};

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: unset;
    min-height: 400px;
    padding: 30px 0;
  }
`
const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  text-align: justify;
  line-height: 180%;
  width: 60%;
  margin: 0 100px 0 0px;

  @media screen and (max-width: 1500px) {
    line-height: 150%;
  }

  @media screen and (max-width: 1400px) {
    line-height: 130%;
  }

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    font-weight: ${({ theme }) => theme.fWeight.semibold};
    line-height: 150%;
    width: 100%;
    margin: 0 60px 0 10px;
  }

  @media screen and (max-width: 1200px) {
    margin: 0px 20px 30px;
    padding: 0 40px 20px;
    border-bottom: 4px solid ${({ theme }) => theme.color.white};
    text-align-last: center;
  }

  @media screen and (max-width: 700px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
    padding: 0 30px 20px;
  }
`
const DetailsWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  min-width: 400px;
  height: 100%;

  @media screen and (max-width: 1500px) {
    margin: 0 20px;
  }
`

const LinkedInTitle = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }
`

const ArrowIcon = styled(ArrowSVG)`
  fill: ${({ theme }) => theme.color.mediumWhite};
  margin: 50px 0;
  animation: 1.5s bounceArrow infinite;

  @keyframes bounceArrow {
    0% {
      transform: translateY(0);
    }

    20% {
      transform: translateY(15px);
    }

    100% {
      transform: translateY(0);
    }
  }
`

const LinkTitle = styled.span`
  ${flexCenter};
  width: 70%;
  height: 100%;
  color: ${({ theme }) => theme.color.mediumDarkBlue};
  font-size: ${({ theme }) => theme.fSize.S};
  font-weight: ${({ theme }) => theme.fWeight.bold};

  ~ svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.color.mediumDarkBlue};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }
`

const LinkWrapper = styled.a`
  ${flexCenter};
  justify-content: space-between;
  width: 360px;
  height: 90px;
  background-color: ${({ theme }) => theme.color.mediumWhite};
  border-radius: 20px;
  padding-right: 40px;
  text-decoration: none;

  &,
  & svg,
  & ${LinkTitle} {
    transition: 0.3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.black};

    ${LinkTitle} {
      color: ${({ theme }) => theme.color.white};
    }

    svg {
      fill: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }

  @media screen and (max-width: 400px) {
    width: 280px;
  }
`

export {
  SkillsSectionWrapper,
  SkillsTitle,
  IconsWrapper,
  TechnologyPanel,
  TechnologyIcon,
  TechnologiesWrapper,
  LaptopPNG,
  SkillsDescriptionBar,
  Paragraph,
  DetailsWrapper,
  LinkedInTitle,
  LinkWrapper,
  LinkTitle,
  ArrowIcon,
  WaveIcon,
}
