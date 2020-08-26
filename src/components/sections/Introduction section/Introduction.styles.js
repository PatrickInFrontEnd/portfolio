import styled from "styled-components"
import { getBackgroundUrl, flexCenter } from "./../../mixins/mixins"

const IntroductionSectionWrapper = styled.section`
  position: relative;
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;
  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl) || ""};
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 1220px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 1020px) {
    min-height: 100vh;
  }
`

const ShadowElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightBlackAlpha};
  z-index: 1;
`
/* Left bar starts */

const IntroductionWrapper = styled.div`
  width: 60vw;
  height: 100%;
  padding: 40px 50px;
  ${flexCenter};
  flex-direction: column;
  z-index: 2;

  @media screen and (max-width: 1220px) {
    width: 100%;
    padding: 0;
  }
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

  @media screen and (max-width: 1220px) {
    max-width: unset;
    min-width: unset;
  }

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`

const IntroductionText = styled.span`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  color: ${({ color, theme }) => color || theme.color.white};
  margin-right: 15px;

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 720px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 430px) {
    &:last-of-type {
      position: relative;
      right: 6px;
    }
  }
`

const IntroductionContent = styled.div`
  position: relative;
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

  @media screen and (max-width: 1220px) {
    max-width: unset;
    border-top: none;
    padding: 50px 100px;
    margin-top: 0;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 670px) {
    padding: 50px;
  }

  @media screen and (max-width: 560px) {
    padding: 50px 20px;
  }
`

const ContentHeader = styled.h3`
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-size: ${({ theme }) => theme.fSize.XL};

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.XXL};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fSize.XL};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`

const ContentMiniHeader = styled.h4`
  margin-top: 60px;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.S};

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }
`

const ContentParagraph = styled.p`
  margin-top: 80px;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.XXS};
  max-width: 340px;
  line-height: 140%;

  @media screen and (max-width: 1220px) {
    max-width: 400px;
    padding: 0;
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }
`

const IntroductionLinksWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 40px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1220px) {
    position: absolute;
    top: 30%;
    right: -25%;
    transform: translateY(-50%);
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    right: -30%;
  }

  @media screen and (max-width: 800px) {
    right: -35%;
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    position: static;
    flex-direction: row;
    top: unset;
    right: unset;
  }

  @media screen and (max-width: 560px) {
    justify-content: space-around;
    padding: 0;
  }
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

  @media screen and (max-width: 1220px) {
    margin-bottom: 150px;

    svg {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 0;

    svg {
      margin-top: 0;
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
    transform: translate(-70%, 100%);

    svg {
      transition: 0.3s;
      stroke: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
    text-align: center;

    ~ span svg {
      height: 25px;
    }
  }
`
/* Right bar starts */
const DescriptionWrapper = styled.div`
  width: 40vw;
  max-width: 750px;
  min-height: calc(100vh - 80px);
  padding-top: 12vh;
  ${flexCenter};
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.lightBlackAlpha};
  border-left: 2px solid ${({ theme }) => theme.color.navyLightBlue};
  z-index: 2;

  @media screen and (max-width: 1220px) {
    width: 100%;
    padding-top: 90px;
    max-width: unset;
    margin: 0 auto;
    border-right: 2px solid ${({ theme }) => theme.color.navyLightBlue};
  }

  @media screen and (max-width: 1220px) and (orientation: landscape) {
    padding-top: 50px;
  }

  @media screen and (max-width: 720px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 720px) and (orientation: landscape) {
    padding-top: 20px;
  }
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

  @media screen and (max-width: 720px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 720px) and (orientation: landscape) {
    width: 250px;
    height: 250px;
    margin-top: 0px;
  }

  @media screen and (max-width: 400px) {
    width: 280px;
    height: 280px;
  }

  @media screen and (max-width: 360px) {
    height: 250px;
    width: 250px;
    margin-top: 50px;
  }
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
  transform: translateX(-40%);
  z-index: 1;
  width: 80%;
  height: 80%;
  ${({ src }) => getBackgroundUrl(src)};
  background-repeat: no-repeat;
  background-size: cover;
`

const DescriptionParagraphWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: 40%;
  max-height: 250px;
  background-color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: 1220px) {
    max-height: unset;
    height: 300px;
    background-color: ${({ theme }) => theme.color.lightBlackAlpha};
  }

  @media screen and (max-width: 720px) {
    height: 370px;
    margin-top: 50px;
  }

  @media screen and (max-width: 400px) {
    height: 300px;
  }
`

const DescriptionP = styled.p`
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.XL};
    font-weight: ${({ theme }) => theme.fWeight.semiBold};
  }

  @media screen and (max-width: 720px) {
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 360px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 320px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

export {
  IntroductionSectionWrapper,
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
