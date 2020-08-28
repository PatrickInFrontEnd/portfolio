import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ src }) => (src ? `background-image: url(${src})` : "")};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  @media screen and (max-width: 1080px) {
    padding: 40px;
  }

  @media screen and (max-width: 980px) {
    padding: 40px 0;
  }
`
const ProjectsHeader = styled.header`
  width: 60%;
  height: 90px;
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.skyBlueAlpha};
  border-radius: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 1220px) {
    width: 80%;
  }

  @media screen and (max-width: 1080px) {
    width: 100vw;
    border-radius: 0px;
    margin-bottom: 50px;
  }
`

const ProjectsHeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-family: Poppins, Montserrat, Arial, sans-serif;
  letter-spacing: 10px;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.XS};
    font-weight: ${({ theme }) => theme.fWeight.semiBold};
    letter-spacing: 5px;
  }
`

const SliderWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 200px 300px 100px 100px;
  grid-template-areas:
    "title slide"
    "description slide"
    "buttonpanel slide"
    "technologies technologypanel";
  grid-gap: 20px;

  @media screen and (max-width: 1220px) {
    grid-template-columns: 400px 1fr;
    grid-template-rows: 60vh 100px 100px;
    grid-template-areas:
      "slide slide"
      "buttonpanel title"
      "technologies technologypanel";
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: 400px 1fr;
    grid-template-rows: 50vh 100px 100px;
    grid-template-areas:
      "slide slide"
      "buttonpanel title"
      "technologies technologypanel";
    grid-gap: 0;
  }

  @media screen and (max-width: 980px) {
    grid-template-rows: minmax(320px, 50vh) 120px 80px 100px;
    grid-template-areas:
      "slide slide"
      "technologypanel technologypanel"
      "technologies technologies"
      "buttonpanel buttonpanel";
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "slide"
      "technologypanel"
      "technologies"
      "buttonpanel ";
  }
`

/* NOTE: slider left panel*/

const SliderPanel = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.blackAlpha};

  &#title {
    grid-area: title;
  }

  @media screen and (max-width: 1080px) {
    &#title {
      border-bottom: 1px solid ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: 980px) {
    &#title {
      display: none;
    }
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

const SliderDescription = styled(SliderPanel)`
  height: 100%;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 30px;
  grid-area: description;

  @media screen and (max-width: 1220px) {
    display: none;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`

const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.medium};

  @media screen and (max-width: 1080px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  padding: 0 20px 0 0;

  @media screen and (max-width: 1080px) {
    text-align: center;
    line-height: 150%;
    padding: 0;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0;
    font-size: ${({ theme }) => theme.fSize.miniS};
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    font-size: ${({ theme }) => theme.fSize.miniXS};
  }
`

const ButtonsPanel = styled(SliderPanel)`
  height: 100px;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 40px;
  grid-area: buttonpanel;

  @media screen and (max-width: 1080px) {
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: 980px) {
    border-top: 1px solid ${({ theme }) => theme.color.white};
    border-bottom: none;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`

const ButtonsWrapper = styled.div`
  width: 150px;
  height: 100%;
  ${flexCenter};
  justify-content: space-between;

  svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
    stroke: ${({ theme }) => theme.color.white};
    transition: 0.3s;

    &:hover {
      stroke: transparent;
      fill: ${({ theme }) => theme.color.white};
    }
  }
`

const SlideId = styled.span`
  ${flexCenter};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: 1080px) {
    margin-left: 80px;
  }
`

const UsedTechnologiesPanel = styled(ButtonsPanel)`
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 20px 0 0;
  grid-area: technologies;

  @media screen and (max-width: 1220px) {
    padding: 0;
    align-items: center;
    border: none;

    ${DescriptionTitle} {
      font-size: ${({ theme }) => theme.fSize.XS};
    }
  }

  @media screen and (max-width: 1080px) {
    ${DescriptionTitle} {
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    ${DescriptionTitle} {
      display: block;
    }
  }
`

const TechnologyPanel = styled(ButtonsPanel)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 30px;
  overflow-x: auto;
  overflow-y: visible;
  grid-area: technologypanel;
  height: 100%;

  @media screen and (max-width: 1220px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 1080px) {
    align-items: center;
    border-bottom: none;
  }

  @media screen and (max-width: 980px) {
    border-top: none;
    border-bottom: none;
  }

  @media screen and (max-width: 850px) {
    padding: 0 15px;
  }
`

const TechnologyIcon = styled.span`
  display: block;
  width: 70px;
  height: 70px;
  margin-right: 30px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  ${({ src, theme }) =>
    src
      ? `background-image: url(${src})`
      : `background-color:${theme.color.black}`};

  background-size: 60% 60%;
  background-repeat: no-repeat;
  background-position: center;

  :last-of-type {
    margin-right: 100%;
  }

  @media screen and (max-width: 1080px) {
    margin: 0 20px 0 0;

    :last-of-type {
      margin-right: 0;
    }
  }
`

/* NOTE: slider right panel */

const SliderImageWrapper = styled.div`
  position: relative;
  width: 100%;
  grid-area: slide;
  ${({ src, theme }) =>
    src
      ? `background-image: url(${src});`
      : `background-color:${theme.color.white};`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const LinkP = styled.p`
  ${flexCenter};
  color: ${({ theme }) => theme.color.mediumLightBlue};
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  width: 100%;
  height: 100%;
  transition: 0.3s;

  @media screen and (max-width: 1220px) {
    display: none;
  }
`

const LinkIcon = styled.span`
  ${flexCenter};
  min-width: 60px;
  width: 60px;
  height: 100%;
  border-left: 2px solid ${({ theme }) => theme.color.mediumLightBlue};

  svg {
    fill: ${({ theme }) => theme.color.mediumLightBlue};
    animation: 1.5s bounce infinite;
    transition: 0.3s;
  }

  @media screen and (max-width: 1080px) {
    border: none;
    width: 100%;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    20% {
      transform: translateY(-4px);
    }

    40% {
      transform: translateY(4px);
    }

    100% {
      transform: translateY(0);
    }
  }
`

const LinkButton = styled.a`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : `0`)};
  right: ${({ right }) => (right ? right : `0`)};
  ${flexCenter};
  justify-content: space-between;
  width: 210px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.mediumLightBlue};
  background-color: ${({ theme }) => theme.color.black};
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s all;
  text-decoration: none;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mediumLightBlue};

    ${LinkIcon} {
      border-color: ${({ theme }) => theme.color.white};
      svg {
        fill: ${({ theme }) => theme.color.white};
      }
    }

    ${LinkP} {
      color: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: 1400px) {
    &:nth-of-type(1) {
      right: unset;
      left: 50px;
    }

    &:nth-of-type(2) {
      right: 50px;
    }
  }

  @media screen and (max-width: 1220px) {
    width: 60px;
    justify-content: center;
    &:nth-of-type(1) {
      left: unset;
      bottom: 100px;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      right: 30px;
    }
  }
`

export {
  BackgroundWrapper,
  ProjectsHeader,
  ProjectsHeaderTitle,
  SliderWrapper,
  SliderPanel,
  Title,
  SliderDescription,
  DescriptionTitle,
  DescriptionParagraph,
  ButtonsPanel,
  ButtonsWrapper,
  SlideId,
  UsedTechnologiesPanel,
  SliderImageWrapper,
  TechnologyPanel,
  TechnologyIcon,
  LinkP,
  LinkIcon,
  LinkButton,
}
