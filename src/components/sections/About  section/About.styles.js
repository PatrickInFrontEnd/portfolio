import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"
import AboutIcon from "./../../../assets/images/about_section_icon.svg"

const AboutMeWrapper = styled.div`
  width: 100%;
  padding: 60px 0 0;
  ${flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightBlue};
  margin-bottom: 40px;

  @media screen and (max-width: 1600px) {
    padding: 0;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 670px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 550px) {
    margin-bottom: 20px;
  }
`

const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1600px) {
    width: 100%;
    min-height: unset;
    padding: 20px 0 0px;
  }
`

const AboutSectionIcon = styled(AboutIcon)`
  width: 700px;
  margin: 50px auto 0;

  @media screen and (max-width: 1300px) {
    width: 80%;
    height: 400px;
  }

  @media screen and (max-width: 750px) {
    height: 350px;
    margin: 40px auto 0;
  }

  @media screen and (max-width: 450px) {
    height: 200px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
  }
`

const ParagraphsWrapper = styled.div`
  padding: 20px 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px;

  @media screen and (max-width: 1600px) {
    grid-auto-rows: unset;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding: 50px;
  }

  @media screen and (max-width: 1450px) {
    grid-auto-rows: unset;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    padding: 50px 20px;
  }
`

const P = styled.p`
  ${flexCenter};
  position: relative;
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.XXS};
  width: 400px;
  text-align: justify;
  line-height: 160%;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 0;
    width: 350px;
    height: 100%;
  }

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 1100px) {
    padding: 20px;
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 750px) {
    padding: 20px;
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 450px) {
    padding: 15px 10px;
    width: 90%;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`

const NumberOfParagraphWrapper = styled.span`
  display: block;
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primaryBlue};

  @media screen and (max-width: 1100px) {
    width: 30px;
    height: 30px;
    bottom: -20px;
    right: -20px;
  }

  @media screen and (max-width: 550px) {
    right: 50%;
    bottom: unset;
    top: -40px;
    transform: translateX(50%) !important;
  }
`

const NumberOfParagraph = styled.span`
  position: absolute;
  top: -30%;
  left: -10px;
  font-size: ${({ theme }) => theme.fSize.L};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-family: Poppins, Montserrat, Arial, sans-serif;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.S};
    top: -35%;
  }

  @media screen and (max-width: 750px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }
`

export {
  AboutMeWrapper,
  AboutSectionIcon,
  DescriptionWrapper,
  ParagraphsWrapper,
  P,
  NumberOfParagraphWrapper,
  NumberOfParagraph,
}
