import styled from "styled-components"
import { flexCenter } from "./../../mixins/mixins"

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  ${flexCenter};
  flex-direction: column;
  justify-content: space-around;
`

const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`
const SocialMediaWrapper = styled.div`
  min-height: 400px;
  width: 100%;
  ${flexCenter};
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
`

export { ContactWrapper, ContactTitle, SocialMediaWrapper, Media, Description }
