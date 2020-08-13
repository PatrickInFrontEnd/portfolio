import styled, { css } from "styled-components"
import { flexCenter } from "../../mixins/mixins"
import ArrowSVG from "./../../../assets/images/icon_arrow_white.svg"
import WaveSVG from "./../../../assets/images/wave_bgc.svg"

const SkillsSectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};
`

const Border = styled.span`
  display: block;
  width: 50%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.white};

  ${({ position }) => getBorderPosition(position)};
`

function getBorderPosition(pos) {
  switch (pos) {
    case "top": {
      return css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `
    }
    case "bottom": {
      return css`
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
      `
    }
    default: {
      return ""
    }
  }
}

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
`

const IconsWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 900px;
  padding: 150px 300px;
  margin-bottom: 100px;
  ${flexCenter};
  justify-content: space-around;
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
`

const TechnologyIcon = styled.img`
  display: block;
  width: 100px;
  height: 100%;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`

const LaptopPNG = styled.img`
  display: block;
  width: 500px;
  height: 80%;
  z-index: 1;
`

const SkillsDescriptionBar = styled.div`
  ${flexCenter};
  justify-content: space-around;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.color.mediumDarkBlue};
  padding: 30px 30px 0 30px;
  border-top: 4px solid ${({ theme }) => theme.color.white};
`
const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  text-align: justify;
  line-height: 180%;

  ${({ width, height, margin }) => {
    if (width) {
      return css`
        width: ${width};
      `
    }
    if (height) {
      return css`
        height: ${height};
      `
    }
    if (margin) {
      return css`
        margin: ${margin};
      `
    }
    return ""
  }}
`
const DetailsWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin-left: 150px;
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
`

export {
  SkillsSectionWrapper,
  SkillsTitle,
  IconsWrapper,
  TechnologyPanel,
  TechnologyIcon,
  TechnologiesWrapper,
  Border,
  LaptopPNG,
  SkillsDescriptionBar,
  Paragraph,
  DetailsWrapper,
  LinkWrapper,
  LinkTitle,
  ArrowIcon,
  WaveIcon,
}
