import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  ${flexCenter};
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1300px) {
    min-height: unset;
  }
`

const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }
`
const SocialMediaWrapper = styled.div`
  min-height: 400px;
  width: 100%;
  ${flexCenter};

  @media screen and (max-width: 700px) {
    min-height: 300px;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0 50px;
  }
`

const Description = styled.span`
  ${flexCenter};
  padding: 5px 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  opacity: 0;
  transition: 1s;
  transform: translateY(-100px);

  @media screen and (max-width: 1300px) {
    display: none;
  }
`

const Media = styled.div`
  height: 300px;
  min-width: 150px;
  width: 30vw;
  ${flexCenter};
  justify-content: space-around;
  flex-direction: column;

  &:hover {
    ${Description} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  svg {
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.color.mediumLightBlue};
  }

  @media screen and (max-width: 800px) {
    svg {
      width: 90px;
      height: 90px;
    }
  }

  @media screen and (max-width: 700px) {
    height: 200px;
    width: 150px;

    svg {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 500px) {
    min-height: 300px;
  }

  @media screen and (max-width: 450px) {
    min-height: unset;
    height: 150px;
  }
`

export { ContactWrapper, ContactTitle, SocialMediaWrapper, Media, Description }
