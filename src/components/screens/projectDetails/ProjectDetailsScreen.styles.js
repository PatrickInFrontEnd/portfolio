import styled from "styled-components"

const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
  font-family: Poppins, Montserrat, Arial, sans-serif;
  overflow-y: auto;
  z-index: 999;
  padding: 60px 250px;
`

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProjectTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 3px 0;
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 36px;
    height: 36px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    gap: 20px;

    svg {
      width: 18px;
      height: 21px;
    }
  }
`

const SliderSection = styled.div`
  position: relative;
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 40px 0;
  }
`

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  max-height: 600px;
  aspect-ratio: 16 / 9;
  border-radius: 2px 2px 0 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

const SliderButtonsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0 0 2px 2px;
  padding: 15px;
`

const SliderButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const SliderButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 139px;
  height: 36px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.color.primaryBlue : theme.color.primaryBlue};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  border-radius: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 32px;
    font-size: 14px;
  }
`

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 50px;
    height: 60px;
    fill: white;
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 40px;
      height: 50px;
    }
  }
`

const LeftArrow = styled(ArrowButton)`
  left: calc(50% - 700px - 75px);

  @media screen and (max-width: 1600px) {
    left: 20px;
  }

  @media screen and (max-width: 768px) {
    left: 10px;
  }
`

const RightArrow = styled(ArrowButton)`
  right: calc(50% - 700px - 75px);

  svg {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 1600px) {
    right: 20px;
  }

  @media screen and (max-width: 768px) {
    right: 10px;
  }
`

const ContentSection = styled.div`
  margin: 80px auto;
  border-left: 3px solid ${({ theme }) => theme.color.primaryBlue};
  border-right: 3px solid ${({ theme }) => theme.color.primaryBlue};
  padding: 0 50px 50px;

  @media screen and (max-width: 768px) {
    padding: 0 40px 40px;
  }
`

const SectionTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.219em;
  margin-bottom: 24px;
  color: #ffffff;
`

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  color: #ffffff;
`

const ProblemsSection = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
`

const TechnologiesSection = styled.div``

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 46px 76px;
  margin-top: 40px;
  padding-left: 40px;
  align-items: flex-start;
`

export {
  ArrowButton,
  ContentSection,
  Description,
  GoBackButton,
  HeaderSection,
  LeftArrow,
  PageWrapper,
  ProblemsSection,
  ProjectTitle,
  RightArrow,
  SectionTitle,
  SliderButton,
  SliderButtons,
  SliderButtonsContainer,
  SliderImage,
  SliderSection,
  SliderWrapper,
  TechnologiesGrid,
  TechnologiesSection,
}
