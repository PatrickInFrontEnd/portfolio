import styled from "styled-components"
import {
  flexCenter,
  absoluteCenter,
  getBackgroundUrl,
} from "./../../mixins/mixins"

const AboutMeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  ${flexCenter};
  flex-direction: column;

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
  width: 100%;
  padding: 100px 0;
  ${flexCenter};

  @media screen and (max-width: 860px) {
    padding: 0;
  }
`

const ShadowBackground = styled.div`
  height: 100%;
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
  width: 100%;
  height: 100%;
  ${flexCenter};
  justify-content: space-around;

  @media screen and (max-width: 860px) {
    min-height: 800px;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`

const Photo = styled.div`
  display: block;
  width: 100%;
  max-width: 700px;
  height: 500px;

  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl)};
  background-size: cover;
  background-position: top center;

  @media screen and (max-width: 1600px) {
    width: 600px;
    height: 500px;
  }

  @media screen and (max-width: 1300px) {
    width: 500px;
    height: 400px;
  }

  @media screen and (max-width: 1180px) {
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: 860px) {
    width: 450px;
    height: 350px;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
    width: 100%;
    &:nth-of-type(1) {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 300px;
  }
`

const DescriptionWrapper = styled.div`
  width: 100%;
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
  padding: 50px 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, 1fr);
  grid-gap: 40px;
  width: 100%;
  height: 100%;
  padding: 120px 80px;

  @media screen and (max-width: 1600px) {
    grid-auto-rows: unset;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding: 50px;
  }

  @media screen and (max-width: 1300px) {
    grid-auto-rows: unset;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const P = styled.p`
  ${flexCenter};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-size: ${({ theme }) => theme.fSize.S};
  text-align: center;
  line-height: 160%;
  padding: 30px 50px;
  border: 2px solid ${({ theme }) => theme.color.white};

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 0;
    padding: 20px 40px;
    width: 350px;
    height: 100%;
  }

  @media screen and (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 1100px) {
    padding: 20px;
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 450px) {
    padding: 15px 10px;
    width: 90%;
    font-size: ${({ theme }) => theme.fSize.miniS};
  }

  @media screen and (max-width: 350px) {
    width: 100%;
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
