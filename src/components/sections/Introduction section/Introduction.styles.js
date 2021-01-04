import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"
import IntroductionSVG from "./../../../assets/images/introduction_icon.svg"
import { TriangleHeader } from "./../../TriangleHeader/TriangleHeader.styles"

const IntroductionSectionWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  background-attachment: fixed;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1020px) {
    min-height: 100vh;
  }
`

/* NOTE: Refactored left bar starts here */

const LeftBarWrapper = styled.div`
  width: 70vw;
  min-width: 950px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 0 150px;

  @media screen and (max-width: 1670px) {
    margin: 0 0 0 100px;
  }

  @media screen and (max-width: 1570px) {
    min-width: 750px;
    margin: 0 50px 0 100px;

    ${TriangleHeader} {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1440px) {
    margin: 0 20px 0 100px;
    min-width: 650px;
  }

  @media screen and (max-width: 1300px) {
    margin: 0 20px 0 80px;
    min-width: unset;
    width: 550px;
  }

  @media screen and (max-width: 1130px) {
    min-width: 750px;
    margin: 50px 0 0;
  }

  @media screen and (max-width: 900px) {
    min-width: unset;
    width: 650px;
  }

  @media screen and (max-width: 750px) {
    width: 550px;
  }

  @media screen and (max-width: 630px) {
    width: 100%;
    padding: 0 40px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 0 20px;
    margin: 25px auto;
  }
`

const IntroductionIcon = styled(IntroductionSVG)`
  width: 750px;
  margin-top: 80px;

  @media screen and (max-width: 1570px) {
    width: 100%;
    margin-top: 30px;
  }

  @media screen and (max-width: 1300px) {
    margin: 0;
  }

  @media screen and (max-width: 1130px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 750px) {
    height: 100%;
    margin: 60px auto 50px;
  }

  @media screen and (max-width: 630px) {
    width: 100%;
    height: 100%;
  }
`

const IntroductionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.bold};

  @media screen and (max-width: 1570px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 350px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

/* Right bar starts here*/

const IntroductionWrapper = styled.div`
  width: 60vw;
  height: 100%;
  padding: 40px 50px;
  ${flexCenter};
  flex-direction: column;
  z-index: 2;

  @media screen and (max-width: 1300px) {
    width: 40%;
    padding: 0;
  }

  @media screen and (max-width: 1130px) {
    width: 100%;
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
  padding: 45px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;

  @media screen and (max-width: 1130px) {
    max-width: 800px;
    align-items: center;
    padding: 45px 45px 0 45px;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    text-align: center;
    padding: 45px 45px 55px 45px;
  }

  @media screen and (max-width: 670px) {
    padding: 0 50px 80px;
    min-height: unset;
  }

  @media screen and (max-width: 560px) {
    padding: 0 20px 120px;
  }

  @media screen and (max-width: 380px) {
    padding: 0 20px 80px;
  }
`

const ContentHeader = styled.h3`
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-size: ${({ theme }) => theme.fSize.M};

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 1130px) {
    font-size: ${({ theme }) => theme.fSize.XL};
  }

  @media screen and (max-width: 750px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`

const ContentMiniHeader = styled.h4`
  margin-top: 60px;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.S};

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 1130px) {
    font-size: ${({ theme }) => theme.fSize.L};
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
    max-width: 300px;
    padding: 0;
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 1130px) {
    font-size: ${({ theme }) => theme.fSize.XS};
    max-width: unset;
    text-align: center;
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
  padding: 0;
  margin-top: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1220px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 1130px) {
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 20px;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 560px) {
    justify-content: space-around;
    padding: 0;
    margin-top: 60px;
    margin-bottom: 0;
  }
`

const IntroductionLinkWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;
  margin-right: 200px;

  @media screen and (max-width: 1220px) {
    margin-right: 150px;
  }

  @media screen and (max-width: 1130px) {
    &:last-of-type {
      margin-right: 0;
    }
  }

  span > svg {
    fill: none;
  }

  &:hover {
    span > svg {
      stroke: ${({ theme }) => theme.color.extraLightBlue};
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

  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`

const IntroductionLink = styled.p`
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  color: ${({ theme }) => theme.color.extraLightBlue};
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
    width: unset;
    font-size: ${({ theme }) => theme.fSize.miniS};
    text-align: center;
    margin: 0;

    ~ span svg {
      height: 25px;

      &:first-of-type {
        position: relative;
        right: -8px;
      }
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
  IntroductionWrapper,
  IntroductionHeader,
  IntroductionText,
  LeftBarWrapper,
  IntroductionIcon,
  IntroductionTitle,
  DescriptionWrapper,
  IntroductionContent,
  IntroductionLinksWrapper,
  IntroductionLinkWrapper,
  IntroductionLink,
  ContentHeader,
  ContentMiniHeader,
  ContentParagraph,
  DescriptionParagraphWrapper,
  DescriptionP,
}
