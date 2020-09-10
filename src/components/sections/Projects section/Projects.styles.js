import styled, { css } from "styled-components"
import { flexCenter, getBackgroundUrl } from "./../../mixins/mixins"
import ProjectsSVG from "./../../../assets/images/projects_icon.svg"
import SliderArrow from "./../../../assets/images/slider_arrow.svg"

const ProjectsSectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding: 40px 50px 100px;

  @media screen and (max-width: 1340px) {
    padding: 40px 0px 100px;
  }

  @media screen and (max-width: 900px) {
    padding: 40px 0px 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 40px 0px 0px;
  }
`

const ProjectsIcon = styled(ProjectsSVG)`
  display: block;
  margin: 80px auto;

  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 40px;
  }

  @media screen and (max-width: 980px) {
    height: 400px;
    margin: 40px auto 80px;
  }

  @media screen and (max-width: 450px) {
    padding: 0 20px;
    height: 300px;
    margin: 40px auto 80px;
  }

  @media screen and (max-width: 380px) {
    height: 200px;
    margin: 40px auto 80px;
  }
`

//NOTE: slider starts here

const SliderCounterWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primaryBlue};

  @media screen and (max-width: 750px) {
    width: 35px;
    height: 35px;
    bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    right: 20%;
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
    top: -40%;
    left: -8px;
  }
`

const ArrowLeftStyles = css`
  left: -70px;
  transform: translateY(-50%) rotateY(0deg);

  @media screen and (max-width: 750px) {
    left: -60px;
  }

  @media screen and (max-width: 500px) {
    left: -50px;
  }
`
const ArrowRightStyles = css`
  right: -70px;
  transform: translateY(-50%) rotateY(180deg);

  @media screen and (max-width: 750px) {
    right: -60px;
  }

  @media screen and (max-width: 500px) {
    right: -50px;
  }
`

const Arrow = styled(SliderArrow)`
  position: absolute;
  top: 50%;
  fill: ${({ theme }) => theme.color.mediumWhite};

  ${({ turn }) => (turn === "right" ? ArrowRightStyles : ArrowLeftStyles)};

  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`

const SliderWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  min-height: 750px;
  max-height: 750px;
  background-color: #000;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 100%;
    min-height: 650px;
    max-height: unset;
  }

  @media screen and (max-width: 1080px) {
    min-height: unset;
    height: 90vh;
  }
`

const SlidesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  transition: 0.6s;
`
const SlideDetailsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  transition: 0.3s;
  opacity: 0;
  background-color: ${({ theme }) => theme.color.darkGrey};

  @media screen and (max-width: 1280px) {
    padding: 60px 0 80px;
    opacity: 1;
  }
`
const SlideDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1280px) {
    height: calc(100% - 30px);
    overflow: auto;
  }
`

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: cover;

  &:hover ${SlideDetailsWrapper} {
    opacity: 1;
  }
`

const Title = styled.h2`
  font: ${({ theme: { fSize, fWeight } }) =>
    `${fWeight.semiBold} ${fSize.XL} Montserrat, Poppins, Arial, sans-serif`};
  letter-spacing: 5px;

  @media screen and (max-width: 650px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 360px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

const IconsContainer = styled.div`
  height: 300px;
  width: 800px;
  margin: 100px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
  grid-column-gap: 80px;
  grid-row-gap: 60px;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 250px);
    align-content: center;
    justify-content: center;
    grid-auto-rows: 60px;
    grid-gap: 15px;
    margin: 80px 0;
  }

  @media screen and (max-width: 900px) {
    width: 500px;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 160px);
    grid-row-gap: 15px;
    grid-column-gap: 45px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 80px 0;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const ImagePreview = styled.div`
  display: none;
  width: 70%;
  min-height: 400px;

  @media screen and (max-width: 1280px) {
    display: block;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 900px) {
    width: 85%;
    min-height: 300px;
  }

  @media screen and (max-width: 650px) {
    width: 90%;
  }

  @media screen and (max-width: 550px) {
    height: 40vh;
    min-height: 350px;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    min-height: 35vh;
  }

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: cover;
`

const ButtonsWrapper = styled.div`
  ${flexCenter};
  justify-content: space-around;
  width: 250px;
  height: 80px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 40px;
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

  @media screen and (max-width: 1080px) {
    border: none;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    min-width: 50px;
    width: 50px;
    height: 50px;
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

const SliderNavigationWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media screen and (max-width: 750px) {
    width: 120px;
    height: 60px;
  }

  @media screen and (max-width: 500px) {
    left: 30%;
  }
`

const rotateLeft = css`
  transform: translateY(-50%) rotateY(180deg);
  left: 20px;

  @media screen and (max-width: 750px) {
    left: 15px;
  }
`

const rotateRight = css`
  transform: translateY(-50%) rotateY(0deg);
  right: 20px;

  @media screen and (max-width: 750px) {
    right: 15px;
  }
`

const NavigationArrow = styled(SliderArrow)`
  position: absolute;
  top: 50%;
  transition: 0.3s;
  cursor: pointer;
  fill: ${({ theme }) => theme.color.mediumWhite};

  &:hover {
    fill: ${({ theme }) => theme.color.primaryBlue};
  }

  ${({ turn }) => (turn === "left" ? rotateLeft : rotateRight)};

  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`

export {
  LinkIcon,
  ProjectsSectionWrapper,
  ProjectsIcon,
  SliderCounterWrapper,
  Arrow,
  NumberOfSlide,
  SliderWrapper,
  SlidesWrapper,
  SlideContainer,
  SlideDetailsWrapper,
  SlideDetailsContent,
  ImagePreview,
  Title,
  IconsContainer,
  ButtonsWrapper,
  SliderNavigationWrapper,
  NavigationArrow,
}
