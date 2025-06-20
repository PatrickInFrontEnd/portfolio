import styled from "styled-components"
import ProjectsSVG from "./../../../assets/images/projects_icon.svg"
import { Button } from "./../../Button/Button.styles"
import { flexCenter, getBackgroundUrl } from "./../../mixins/mixins"

const ProjectsSectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding-top: 40px;

  @media screen and (max-width: 1300px) {
    padding-top: 0;
  }
`

const ProjectsIcon = styled(ProjectsSVG)`
  width: 750px;
  display: block;
  margin: 80px auto;

  @media screen and (max-width: 1280px) {
    width: 70%;
    padding: 0 40px;
  }

  @media screen and (max-width: 1100px) {
    width: 80%;
    padding: 0 40px;
  }

  @media screen and (max-width: 980px) {
    height: 400px;
    margin: 40px auto 80px;
    width: 90%;
  }

  @media screen and (max-width: 650px) {
    padding: 0 20px;
    height: 300px;
    margin: 60px auto 80px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    margin: 40px auto 80px;
  }
`

//NOTE: slider starts here

const SlidesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SliderCounterWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.color.primaryBlue};

  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`

const NumberOfSlide = styled.span`
  position: absolute;
  top: -50%;
  left: -10px;
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-family: Poppins, Montserrat, Arial, sans-serif;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 750px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`

const SlideTitle = styled.h3`
  position: relative;
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  line-height: 1.4;
  margin: 40px auto;
  z-index: 1;
  padding: 0 30px;
  text-align: center;

  & > span {
    position: relative;
    display: inline;
  }

  & > span::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 1.4em;
    top: 0;
    left: -10px;
    z-index: -1;
    background-color: ${({ theme }) => theme.color.primaryBlue};
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 40px 0;
  padding: 0 80px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media screen and (max-width: 1550px) {
    flex-direction: column;
    height: unset;
    min-height: 500px;
    padding: 20px 80px 80px;
    margin: 0 0 40px;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    min-height: 500px;
    padding: 20px 0 50px;
    align-items: center;
  }
`

const TechnologiesContainer = styled.div`
  position: relative;
  width: 50%;
  min-width: 800px;
  margin-right: 40px;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 250px));
  grid-auto-rows: 80px;
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1880px) {
    min-width: unset;
    width: 550px;
    margin: 0 40px 0 0;
    grid-column-gap: 60px;
    grid-template-columns: repeat(2, minmax(200px, 250px));
  }

  @media screen and (max-width: 1550px) {
    min-width: unset;
    width: auto;
    margin: 0;
    grid-column-gap: 20px;
    grid-template-columns: repeat(3, minmax(140px, 180px));
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, minmax(120px, 180px));
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(3, minmax(80px, 120px));
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(3, minmax(70px, 120px));
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 20px 10px;

    & > * {
      margin: 0 auto 0 15px;
    }
  }
`

const Description = styled.span`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fSize.S};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1550px) {
    bottom: unset;
    top: 0px;
  }
`

const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 50%;
  min-width: 900px;
  height: 100%;

  @media screen and (max-width: 1650px) {
    min-width: 800px;
  }

  @media screen and (max-width: 1550px) {
    min-width: 50%;
    width: unset;
    height: auto;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
`

const ImagePreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: cover;

  &:hover ${HoverOverlay} {
    opacity: 1;
  }

  @media screen and (max-width: 1550px) {
    min-width: 800px;
    min-height: 400px;
  }

  @media screen and (max-width: 900px) {
    min-width: unset;
  }

  @media screen and (max-width: 700px) {
    min-height: 300px;
  }

  @media screen and (max-width: 600px) {
    min-height: 250px;
  }

  @media screen and (max-width: 450px) {
    min-height: 200px;
  }

  @media screen and (max-width: 350px) {
    min-height: 150px;
  }
`

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 0 150px;
  min-height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.color.lightBlue};

  @media screen and (max-width: 1550px) {
    padding: 0 0 100px;
  }

  @media screen and (max-width: 750px) {
    padding: 0 0 55px;
  }
`

const ButtonsWrapper = styled.div`
  position: absolute;
  ${flexCenter};
  justify-content: space-around;
  width: 200px;
  height: 80px;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 750px) {
    bottom: -120px;
  }

  @media screen and (max-width: 450px) {
    left: 30%;
    width: 160px;
  }
`

const LinkIcon = styled.span`
  ${flexCenter};
  display: block;
  position: relative;
  min-width: 60px;
  width: 60px;
  height: 100%;
  margin-right: 80px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0px;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.primaryBlue};
    animation: 1.5s bounce infinite;
    transition: 0.3s;
  }

  span {
    ${flexCenter};
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 100%;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.mediumWhite};
    font-size: ${({ theme }) => theme.fSize.XXS};
    transition: 0.3s;
    opacity: 0;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.color.white};
    }

    span {
      opacity: 1;
    }
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

  @media screen and (max-width: 750px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 600px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 400px) {
    margin-right: 40px;
  }
`

const ProjectDetailsButton = styled(Button)`
  font-size: ${({ theme }) => theme.fSize.XXXS};

  & > span {
    z-index: -1;
    border-color: black;
  }

  svg {
    width: 32px;
    height: 32px;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 768px) {
    width: 200px !important;
    height: 60px !important;
  }

  @media screen and (max-width: 600px) {
    width: 180px !important;
    height: 50px !important;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    width: 160px !important;
    height: 45px !important;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export {
  ButtonsWrapper,
  ContentWrapper,
  Description,
  HoverOverlay,
  ImagePreview,
  ImagePreviewWrapper,
  LinkIcon,
  NumberOfSlide,
  ProjectDetailsButton,
  ProjectsIcon,
  ProjectsSectionWrapper,
  SliderCounterWrapper,
  SlidesWrapper,
  SlideTitle,
  SlideWrapper,
  TechnologiesContainer,
}
