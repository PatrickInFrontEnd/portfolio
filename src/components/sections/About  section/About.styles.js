import styled, { css } from "styled-components"
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
`

const PhotosWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 1400px;
  ${flexCenter};
`

const ShadowBackground = styled(ShadowElement)`
  height: 80%;
  ${absoluteCenter};
  z-index: 0;
`
const PhotoWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 100%;
`

const Photo = styled.div`
  ${absoluteCenter};
  display: block;
  width: 100%;
  height: 45%;

  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl)};
  background-size: cover;
  background-position: top center;
`

const DescriptionWrapper = styled.div`
  width: 800px;
  min-height: 1300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.black};
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
`

const ParagraphsWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 80px;
  margin: auto 0;
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
