import styled from "styled-components"
import {
  flexCenter,
  absoluteCenter,
  getBackgroundUrl,
} from "./../../mixins/mixins"
import { ShadowElement } from "../Introduction section/Introduction.styles"

const AboutMeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 30px;
  ${flexCenter};

  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl)};
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 1600px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`

const PhotosWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 1200px;
  ${flexCenter};

  @media screen and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 800px) {
    height: 800px;
  }

  @media screen and (max-width: 500px) {
    height: 650px;
  }
`

const ShadowBackground = styled(ShadowElement)`
  height: 80%;
  ${absoluteCenter};
  z-index: 0;
  background-color: ${({ theme }) => theme.color.mediumBlackAlpha};

  @media screen and (max-width: 1600px) {
    width: 101%;
    height: 100%;
  }
`
const PhotoWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 100%;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }
`

const Photo = styled.div`
  ${absoluteCenter};
  display: block;
  width: 100%;
  height: 500px;

  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl)};
  background-size: cover;
  background-position: top center;

  @media screen and (max-width: 1000px) {
    height: 400px;
    width: 500px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 300px;
  }
`

const DescriptionWrapper = styled.div`
  width: 800px;
  min-height: 1300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: 1600px) {
    width: 100%;
    min-height: unset;
    padding: 20px 0 0px;
  }
`

const DescriptionHeader = styled.header`
  width: 100%;
  min-height: 150px;
  height: 150px;
  border-bottom: 4px solid ${({ theme }) => theme.color.white};
  ${flexCenter};
`

const Title = styled.h2`
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  font-size: ${({ theme }) => theme.fSize.XXL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fSize.XL};
  }

  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }
`

const ParagraphsWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 80px;
  margin: auto 0;

  @media screen and (max-width: 1600px) {
    padding: 50px 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, 1fr);
    grid-gap: 40px;
  }

  @media screen and (max-width: 1100px) {
    grid-auto-rows: unset;
    grid-template-columns: 50%;
    padding: 50px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 70%;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 100%;
  }
`

const P = styled.p`
  ${flexCenter};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.S};

  margin-bottom: 50px;
  line-height: 160%;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 0;
    padding: 20px 40px;
    width: 100%;
    height: 100%;
    text-align: justify;
    text-align-last: center;
    border: 2px solid #fff;
  }

  @media screen and (max-width: 1100px) {
    text-align: center;
    width: unset;
    height: unset;
    padding: 20px;
    display: block;
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }
`
export {
  AboutMeWrapper,
  PhotosWrapper,
  ShadowBackground as ShadowElement,
  PhotoWrapper,
  Photo,
  DescriptionWrapper,
  DescriptionHeader,
  Title,
  ParagraphsWrapper,
  P,
}
