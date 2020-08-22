import styled, { css } from "styled-components"
import { getBackgroundUrl, flexCenter } from "./../../mixins/mixins"

const HobbyWrapper = styled.div`
  width: 100%;
  height: 520px;
  ${flexCenter};
  justify-content: space-around;
  ${({ reversed }) => (reversed ? reverseHobbyPanel() : "")};
  border-bottom: 4px solid
    ${({ reversed }) => (reversed ? "#0089b7" : "#00588c")};

  ${({ backgroundUrl }) => getBackgroundUrl(backgroundUrl)};
  background-size: cover;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: unset;
    min-height: 520px;
    padding: 40px 0;
  }
`

const reverseHobbyPanel = () => css`
  flex-direction: row-reverse;
`

const IconWrapper = styled.span`
  ${flexCenter};
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mediumWhite};

  @media screen and (max-width: 1100px) {
    min-width: 200px;
    min-height: 200px;
    width: 200px;
    height: 200px;
  }
`

const Icon = styled.img`
  display: block;
  width: 60%;
  height: 60%;
`

const DescriptionWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  min-width: 650px;
  max-width: 650px;
  height: 80%;
  margin: auto 0;

  @media screen and (max-width: 1100px) {
    min-width: unset;
    max-width: unset;
    padding: 0 50px;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XXXL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  text-align: center;
  margin-bottom: 80px;

  @media screen and (max-width: 1400px) {
    font-size: ${({ theme }) => theme.fSize.XXL};
  }

  @media screen and (max-width: 1100px) {
    margin: 20px 0 40px;
  }
`

const P = styled.p`
  font-size: ${({ theme }) => theme.fSize.S};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  text-align: justify;
  text-align-last: center;

  @media screen and (max-width: 1400px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 450px) {
    text-align: center;
    padding: 0 20px;
  }
`
export { HobbyWrapper, IconWrapper, Icon, DescriptionWrapper, Title, P }
