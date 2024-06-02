import styled from "styled-components"
import { flexCenter } from "../../mixins/mixins"
import ArrowSVG from "./../../../assets/images/icon_arrow_white.svg"
import WaveSVG from "./../../../assets/images/wave_bgc.svg"
import { Button } from "./../../Button/Button.styles"

const SkillsSectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 80px 0 20px;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};

  @media screen and (max-width: 1300px) {
    padding: 50px 0 20px;
  }

  @media screen and (max-width: 1200px) {
    padding: 50px 0 0;
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

  @media screen and (max-width: 1200px) {
    margin: 30px auto 80px;
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
  padding: 40px 350px 150px;
  margin: 60px 0 0;
  ${flexCenter};
  justify-content: space-around;

  @media screen and (min-width: 2100px) {
    margin: 60px auto 0 auto;
    max-width: 1500px;
  }

  @media screen and (max-width: 1700px) {
    margin: 0;
  }

  @media screen and (max-width: 1300px) {
    background-color: ${({ theme }) => theme.color.mediumWhite};
    padding: 60px;
    min-height: unset;
    height: 80vh;
  }

  @media screen and (max-width: 1100px) {
    min-height: 680px;
    justify-content: space-between;
    padding: 0 100px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    padding: 150px 50px;
    min-height: unset;
    height: 650px;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    height: 400px;
    min-height: unset;
  }

  @media screen and (max-width: 400px) {
    height: 380px;
  }
`

const WaveIcon = styled(WaveSVG)`
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 100%;
  height: 900px;
  z-index: 0;
  fill: ${({ theme }) => theme.color.mediumWhite};

  @media screen and (max-width: 1300px) {
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
  height: 90px;
  margin-bottom: 50px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1500px) {
    height: 80px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 0px;
  }
`

const TechnologyIcon = styled.img`
  display: block;
  width: 90px;
  height: 90px;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 1500px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 1100px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 350px) {
    width: 50px;
    height: 50px;
  }
`

const LaptopPNG = styled.img`
  display: block;
  width: 500px;
  height: 80%;
  z-index: 1;

  @media screen and (max-width: 1500px) {
    width: 400px;
    height: 60%;
    margin-left: 100px;
  }

  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 60%;
    margin-left: 50px;
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
    height: 400px;
    margin-left: 20px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const SkillsDescriptionBar = styled.div`
  ${flexCenter};
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};
  padding: 20px 30px 60px;
  border-top: 4px solid ${({ theme }) => theme.color.white};

  @media screen and (max-width: 1300px) {
    min-height: 400px;
    padding: 40px 0 120px;
    border-top: none;
  }

  @media screen and (max-width: 750px) {
    padding: 40px 0 120px;
  }
`
const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  text-align: justify;
  text-align-last: center;
  line-height: 200%;
  width: 60%;
  margin: 50px auto 100px;

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    font-weight: ${({ theme }) => theme.fWeight.semibold};
    line-height: 150%;
    width: 70%;
    margin: 50px auto 80px;
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
    padding: 0 40px 20px;
    text-align-last: center;
  }

  @media screen and (max-width: 850px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    margin: 20px auto 80px;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
    padding: 0 30px 20px;
  }

  @media screen and (max-width: 500px) {
    margin: 0px auto 20px;
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
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 360px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 330px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
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

  @media screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`

const ButtonLink = styled(Button)`
  width: 400px;
  height: 100px;
  text-decoration: none;

  svg {
    width: 55px;
    height: 55px;
    fill: ${({ theme }) => theme.color.mediumWhite};
  }

  @media screen and (max-width: 1080px) {
    width: 350px;
    font-size: ${({ theme }) => theme.fSize.S};

    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 750px) {
    width: 300px;
    height: 80px;
    font-size: ${({ theme }) => theme.fSize.S};
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 60px;
    font-size: ${({ theme }) => theme.fSize.S};
    svg {
      width: 30px;
      height: 30px;
    }
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
  ArrowIcon,
  WaveIcon,
  ButtonLink,
}
