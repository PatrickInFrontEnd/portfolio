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

  @media screen and (max-width: 1200px) {
    padding: 50px 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 20px;
  }
`

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: 1920px) {
    max-width: 1400px;
    margin: 0 auto 20px auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`

const ProjectTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 34px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 0;
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  min-height: 44px; /* Touch target size */

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 36px;
    height: 36px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    gap: 20px;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    gap: 16px;
    padding: 8px 0;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    gap: 12px;

    svg {
      width: 24px;
      height: 24px;
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

  @media screen and (max-width: 1024px) {
    margin: 50px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 40px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 30px 0;
  }
`

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 600px;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
  user-select: none;
  touch-action: pan-y pinch-zoom;

  @media (hover: none) and (pointer: coarse) {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
    border-radius: 4px 4px 0 0;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`

const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.color.mediumWhite};
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform, opacity, filter;
  transform-origin: center center;
`

const SliderButtonsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0 0 2px 2px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px;
    border-radius: 0 0 4px 4px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
  }

  @media screen and (max-width: 420px) {
    justify-content: space-between;
    padding: 4px 8px;
  }
`

const SliderButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  z-index: 2;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    gap: 12px;
  }

  @media screen and (max-width: 768px) {
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }

  @media screen and (max-width: 420px) {
    display: none;
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

// Outside arrows (original positioning)
const OutsideArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
  transition: opacity 0.3s ease;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 50px;
    height: 60px;
    fill: white;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

const OutsideLeftArrow = styled(OutsideArrowButton)`
  left: calc(50% - 700px - 75px);

  @media screen and (max-width: 1600px) {
    left: calc(60% - 650px - 75px);
  }

  @media screen and (max-width: 1400px) {
    left: calc(60% - 600px - 75px);
  }
`

const OutsideRightArrow = styled(OutsideArrowButton)`
  right: calc(50% - 700px - 75px);

  svg {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 1600px) {
    right: calc(60% - 650px - 75px);
  }

  @media screen and (max-width: 1400px) {
    right: calc(60% - 600px - 75px);
  }
`

// Inside arrows (black container positioning)
const InsideArrowsContainer = styled.div`
  display: none;
  gap: 12px;

  @media screen and (max-width: 1200px) {
    display: flex;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    justify-content: space-around;
    gap: 0;
  }
`

const InsideArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
  transition: opacity 0.3s ease;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 40px;
    height: 48px;
    fill: white;
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 32px;
      height: 38px;
    }
  }

  @media screen and (max-width: 480px) {
    svg {
      width: 26px;
      height: 32px;
    }
  }
`

const InsideLeftArrow = styled(InsideArrowButton)``

const InsideRightArrow = styled(InsideArrowButton)`
  svg {
    transform: rotate(180deg);
  }
`

const MobileButtonsContainer = styled.div`
  display: none;
  width: 100%;
  max-width: 1400px;
  padding: 16px 0;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 420px) {
    display: flex;
    gap: 12px;
  }

  /* Make buttons inside this container stretch to full width on mobile */
  @media screen and (max-width: 420px) {
    ${SliderButton} {
      flex: 1;
      width: auto;
      min-width: 0;
    }
  }
`

const ContentSection = styled.div`
  margin: 80px auto;
  border-left: 3px solid ${({ theme }) => theme.color.primaryBlue};
  border-right: 3px solid ${({ theme }) => theme.color.primaryBlue};
  padding: 0 50px 50px;

  @media screen and (min-width: 1920px) {
    max-width: 1400px;
  }

  @media screen and (max-width: 1024px) {
    margin: 60px auto;
    padding: 0 40px 40px;
  }

  @media screen and (max-width: 768px) {
    margin: 50px auto;
    padding: 0 30px 30px;
    border-left: 2px solid ${({ theme }) => theme.color.primaryBlue};
    border-right: 2px solid ${({ theme }) => theme.color.primaryBlue};
  }

  @media screen and (max-width: 480px) {
    margin: 20px auto;
    padding: 0 0 20px;
    border-left: none;
    border-right: none;
  }
`

const SectionTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.219em;
  margin-bottom: 24px;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
    line-height: 1.55;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 1.5;
  }
`

const ProblemsSection = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 36px;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const SolutionSection = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 36px;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const TechnologiesSection = styled.div``

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 46px 76px;
  margin-top: 40px;
  padding-left: 40px;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    gap: 36px 60px;
    margin-top: 32px;
    padding-left: 30px;
  }

  @media screen and (max-width: 768px) {
    gap: 30px 50px;
    margin-top: 28px;
    padding-left: 20px;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    gap: 24px 40px;
    margin-top: 24px;
    padding-left: 0;
    justify-content: center;
  }
`

const ImageIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 4;

  @media screen and (max-width: 768px) {
    bottom: 15px;
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    bottom: 10px;
    gap: 4px;
  }
`

const ImageIndicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ active, theme }) =>
    active ? theme.color.primaryBlue : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.primaryBlue};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`

const ImageCounter = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.color.white};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  z-index: 4;

  @media screen and (max-width: 768px) {
    top: 15px;
    right: 15px;
    padding: 6px 10px;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    font-size: 11px;
  }
`

const SwipeHint = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.color.white};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 400;
  z-index: 4;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  pointer-events: none;
  display: none;

  @media (hover: none) and (pointer: coarse) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    bottom: 50px;
    font-size: 11px;
    padding: 6px 12px;
  }

  @media screen and (max-width: 480px) {
    bottom: 40px;
    font-size: 10px;
    padding: 4px 10px;
  }
`

export {
  ContentSection,
  Description,
  GoBackButton,
  HeaderSection,
  ImageCounter,
  ImageIndicator,
  ImageIndicators,
  InsideArrowsContainer,
  InsideLeftArrow,
  InsideRightArrow,
  MobileButtonsContainer,
  OutsideLeftArrow,
  OutsideRightArrow,
  PageWrapper,
  ProblemsSection,
  ProjectTitle,
  SectionTitle,
  SliderButton,
  SliderButtons,
  SliderButtonsContainer,
  SliderImage,
  SliderSection,
  SliderWrapper,
  SolutionSection,
  SwipeHint,
  TechnologiesGrid,
  TechnologiesSection,
}
