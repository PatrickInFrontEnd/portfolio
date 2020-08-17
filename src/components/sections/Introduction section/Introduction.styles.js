import styled, { css } from "styled-components"
import Image from "gatsby-image"

const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const IntroductionSectionWrapper = styled.section`
  position: relative;
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;

  @media screen and (max-width: 1020px) {
    min-height: 100vh;
  }
`

const BackgroundImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`

const ShadowElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightBlackAlpha};
  z-index: -1;
`

const IntroductionWrapper = styled.div`
  width: 60vw;
  height: 100%;
  padding: 40px 50px;
  ${flexColumnCenter};
`

const IntroductionHeader = styled.header`
  width: 100%;
  min-width: 700px;
  max-width: 850px;
  height: 120px;
  background-color: ${({ theme }) => theme.color.blackAlpha};
  border: 2px solid ${({ theme }) => theme.color.navyLightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`

const IntroductionText = styled.span`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  color: ${({ color, theme }) => color || theme.color.white};
  margin-right: 15px;

  &:last-of-type {
    margin-right: 0;
  }
`

const IntroductionContent = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 620px;
  margin-top: 30px;
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.navyLightBlue};
`

const ContentHeader = styled.h3`
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-size: ${({ theme }) => theme.fSize.XL};
`

const ContentMiniHeader = styled.h4`
  margin-top: 60px;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.S};
`

const ContentParagraph = styled.p`
  margin-top: 80px;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.XXS};
  max-width: 340px;
  line-height: 140%;
`

const IntroductionLinksWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 40px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IntroductionLinkWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;

  &:hover {
    span > svg {
      stroke: ${({ theme }) => theme.color.lightBlue};
    }
  }
`

const IntroductionLink = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  color: ${({ theme }) => theme.color.lightBlue};
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ~ span {
    display: block;
    height: 45px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);

    svg {
      transition: 0.3s;
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`

const DescriptionWrapper = styled.div`
  width: 40vw;
  max-width: 750px;
  min-height: calc(100vh - 80px);
  padding-top: 12vh;
  ${flexColumnCenter};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.lightBlackAlpha};
  z-index: -1;
`

const DescriptionPhotoWrapper = styled.div`
  position: relative;
  height: 350px;
  width: 350px;
  padding: 20px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
`

const DescriptionBorder = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 92%;
  height: 92%;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.color.black};
  overflow: hidden;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 125, 139, 1) 0%,
    rgba(0, 156, 180, 1) 20%,
    rgba(0, 102, 139, 1) 70%,
    rgba(0, 63, 70, 1) 100%
  );
`

const DescriptionPhoto = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-45%);
  z-index: 1;
  width: 80%;
  height: 80%;
  ${({ src }) => (src ? `background-image: url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
`

const DescriptionParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  max-height: 250px;
  background-color: ${({ theme }) => theme.color.black};
`

const DescriptionP = styled.p`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export {
  IntroductionSectionWrapper,
  BackgroundImage,
  ShadowElement,
  IntroductionWrapper,
  IntroductionHeader,
  IntroductionText,
  DescriptionWrapper,
  IntroductionContent,
  IntroductionLinksWrapper,
  IntroductionLinkWrapper,
  IntroductionLink,
  ContentHeader,
  ContentMiniHeader,
  ContentParagraph,
  DescriptionPhotoWrapper,
  DescriptionPhoto,
  DescriptionBorder,
  DescriptionParagraphWrapper,
  DescriptionP,
}
