import styled, { css } from "styled-components"
import { flexCenter } from "./../../mixins/mixins"

const HobbyContainer = styled.div``

const HobbyWrapper = styled.div`
  width: 100%;
  min-height: 520px;
  ${flexCenter};
  justify-content: space-around;
  ${({ reversed }) => (reversed ? reverseHobbyPanel() : "")};
  background-color: ${({ theme }) => theme.color.lightBlue};

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    min-height: 520px;
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    min-height: 450px;
  }
`

const reverseHobbyPanel = () => css`
  flex-direction: row-reverse;
`

const IconWrapper = styled.span`
  ${flexCenter};
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mediumWhite};

  @media screen and (max-width: 1600px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 1100px) {
    width: 200px;
    height: 200px;
    margin-top: 40px;
  }

  @media screen and (max-width: 600px) {
    min-width: 150px;
    min-height: 150px;
    width: 100px;
    height: 100px;
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
  height: 80%;
  min-width: 650px;
  max-width: 650px;

  @media screen and (max-width: 1100px) {
    min-width: unset;
    max-width: unset;
    padding: 0 50px;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`

const Title = styled.h2`
  position: relative;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  text-align: center;

  &::before {
    content: "";
    width: 40%;
    height: 110%;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.color.primaryBlue};
    z-index: -1;
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`

const P = styled.p`
  font-size: ${({ theme }) => theme.fSize.S};
  font-weight: ${({ theme }) => theme.fWeight.semiBold};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  text-align: justify;
  text-align-last: center;
  max-width: 400px;

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
export {
  HobbyWrapper,
  IconWrapper,
  Icon,
  DescriptionWrapper,
  Title,
  P,
  HobbyContainer,
}
