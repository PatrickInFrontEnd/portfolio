import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ src }) => (src ? `background-image: url(${src})` : "")};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
const ProjectsHeader = styled.header`
  width: 60%;
  height: 90px;
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.skyBlueAlpha};
  border-radius: 20px;
  margin-bottom: 100px;
`

const ProjectsHeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-family: Poppins, Montserrat, Arial, sans-serif;
  letter-spacing: 10px;
  text-transform: uppercase;
`

/* NOTE: slider left panel*/

const SliderWrapper = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: space-between;
`

const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
  width: 400px;
  height: 100%;
`

const SliderPanel = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 0 30px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.blackAlpha};

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.medium};
`

const SliderDescription = styled(SliderPanel)`
  height: 390px;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
`

const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.medium};
`

const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  padding: 0 20px 0 0;
`

const ButtonsPanel = styled(SliderPanel)`
  height: 100px;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 40px;
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

const SlidesCounter = styled.span`
  ${flexCenter};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
`

const UsedTechnologiesPanel = styled(ButtonsPanel)`
  justify-content: center;
`

/* NOTE: slider right panel */

const SliderImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 730px;
  margin: 0 0 20px 20px;
  ${({ src }) =>
    src ? `background-image: url(${src});` : `background-color:#fff`};
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
`

const TechnologyPanel = styled(ButtonsPanel)`
  width: 100%;
  ${flexCenter};
  justify-content: flex-start;
  flex-direction: row;
  position: absolute;
  bottom: -120px;
  left: 0;
`

const TechnologyIcon = styled.span`
  width: 70px;
  height: 70px;
  margin-right: 30px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.color.white};
  ${({ src, theme }) =>
    src
      ? `background-image: url(${src})`
      : `background-color:${theme.color.black}`};

  background-size: cover;
  background-repeat: no-repeat;

  &:last-of-type {
    margin-right: 0;
  }
`

export {
  BackgroundWrapper,
  ProjectsHeader,
  ProjectsHeaderTitle,
  SliderWrapper,
  LeftBarWrapper,
  SliderPanel,
  Title,
  SliderDescription,
  DescriptionTitle,
  DescriptionParagraph,
  ButtonsPanel,
  ButtonsWrapper,
  SlidesCounter,
  UsedTechnologiesPanel,
  SliderImageWrapper,
  TechnologyPanel,
  TechnologyIcon,
  LinkP,
  LinkIcon,
  LinkButton,
}
