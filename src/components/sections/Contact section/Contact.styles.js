import styled, { css } from "styled-components"
import { flexCenter } from "./../../mixins/mixins"
import CirclesSVG from "./../../../assets/images/circles.svg"
import PersonMessageSVG from "./../../../assets/images/contact_icon.svg"
import { Button } from "./../../Button/Button.styles"
import { Header as H2 } from "./../../Header/Header.styles"

const ContactWrapper = styled.div`
  width: 100%;
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
    width: 90px;
    height: 90px;
    fill: ${({ theme }) => theme.color.primaryBlue};
  }

  @media screen and (max-width: 800px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 700px) {
    height: 200px;
    width: 150px;

    svg {
      width: 70px;
      height: 70px;
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

const ContactFormWrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  padding: 150px 0 0;

  * {
    z-index: 1;
  }

  @media screen and (max-width: 1580px) {
    align-items: flex-start;
    padding: 150px 0 0;
  }

  @media screen and (max-width: 1300px) {
    align-items: center;
    padding: 50px 0 0;
  }

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const LeftBarWrapper = styled.div`
  ${flexCenter};
  align-items: flex-start;
  margin-top: 100px;
  min-width: 800px;
  min-height: 800px;
  width: 50vw;
  height: 60vh;
  overflow: hidden;

  @media screen and (max-width: 1580px) {
    position: absolute;
    top: 0%;
    right: 0%;
  }

  @media screen and (max-width: 1480px) {
    right: -8%;
  }

  @media screen and (max-width: 1300px) {
    top: -15%;
    right: -15%;
  }

  @media screen and (max-width: 1180px) {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    margin: 0 auto;
    width: 100%;
    height: 450px;
    min-width: unset;
    min-height: unset;
    justify-content: flex-start;

    .stairs,
    .bush {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    margin: 0;
  }

  @media screen and (max-width: 450px) {
    margin: 0;
    height: 350px;
  }
`

const CirclesIcon = styled(CirclesSVG)`
  z-index: 0;
  position: absolute;

  &:nth-of-type(1) {
    left: 40%;
    top: -50px;
    transform: translateX(-50%);
  }

  &:nth-of-type(2) {
    right: 80px;
    bottom: 40px;
  }

  @media screen and (max-width: 1700px) {
    &:nth-of-type(2) {
      right: 40px;
      bottom: 40px;
    }
  }

  @media screen and (max-width: 1580px) {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      display: none;
    }
  }
`

const PersonMessageIcon = styled(PersonMessageSVG)`
  position: relative;
  left: -17%;
  width: 100%;
  height: 100%;
  margin: 100px 50px 30px;
  z-index: 1;

  @media screen and (max-width: 1650px) {
    margin: 100px 0 30px 50px;
  }

  @media screen and (max-width: 1580px) {
    margin: 50px 0 0;
  }

  @media screen and (max-width: 1300px) {
    width: 80%;
    height: 80%;
    margin: 80px 0 0;
  }

  @media screen and (max-width: 1180px) {
    position: absolute;
    width: 100%;
    min-width: 1000px;
    height: 800px;
    bottom: -460px;
    left: 40%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 650px) {
    height: 600px;
    bottom: -300px;
  }

  @media screen and (max-width: 450px) {
    height: 500px;
    bottom: -250px;
    transform: translateX(-54%);
  }

  @media screen and (max-width: 400px) {
    height: 450px;
    bottom: -230px;
    transform: translateX(-52%);
  }
`

const Header = styled(H2)`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1580px) {
    top: 0px;
  }

  @media screen and (max-width: 1300px) {
    top: -60px;
  }

  @media screen and (max-width: 1180px) {
    top: -20px;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 940px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 700px) {
    top: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.S};
    margin-top: 20px;
  }
`

const Form = styled.form`
  width: 500px;
  height: 650px;
  padding: 90px 0 0;
  margin: 0 0 0 150px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  ${flexCenter};
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1800px) {
    margin: 0 50px 100px 0px;
  }

  @media screen and (max-width: 1580px) {
    margin-left: 300px;
  }

  @media screen and (max-width: 1370px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 1180px) {
    margin: 0 0 30px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin: 0;
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  right: 0px;
  bottom: -40px;
  ${flexCenter};
  justify-content: flex-start;
  color: ${({ theme }) => theme.color.lightRed};
  font-size: ${({ theme }) => theme.fSize.miniXS};

  animation: slideInError 0.5s ease-in-out both;

  @keyframes slideInError {
    from {
      opacity: 0;
      right: -100px;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }
`

const Border = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.color.darkGrey};
  transform: translate(-10px, 10px);
  z-index: -1;
  transition: 0.3s;

  @media screen and (max-width: 1300px) {
    &#message_border {
      height: 120px;
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 70%;
  height: 50px;
  margin-bottom: 80px;

  &:last-of-type {
    margin-bottom: 0;
    height: 120px;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`

const Label = styled.label`
  position: absolute;
  top: -45px;
  left: -10px;
  font-family: Montserrat, Poppins, Arial, sans-serif;
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-weight: ${({ theme }) => theme.fWeight.bold};

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fSize.XXS};
  }

  @media screen and (max-width: 650px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 450px) {
    top: -40px;
    font-size: ${({ theme }) => theme.fSize.XXS};
  }
`

const inputStyles = css`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fSize.miniS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  outline: none;
  border: none;

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fSize.miniS};
  }
`

const Input = styled.input`
  ${inputStyles};

  &:focus ~ ${Border} {
    transform: translate(10px, -10px) !important;
  }

  @media screen and (max-width: 1300px) {
    height: 60px;
  }
`

const MessageInput = styled.textarea`
  ${inputStyles};
  padding: 20px 40px;
  line-height: 140%;
  overflow: auto;
  resize: none;
  height: unset;
  min-height: 100%;
  max-height: 400px;

  &:focus ~ ${Border} {
    transform: translate(10px, -10px) !important;
  }

  @media screen and (max-width: 1300px) {
    height: 150px;
  }
`

const SubmitButton = styled(Button)`
  width: 65%;
  height: 70px;
  font-size: ${({ theme }) => theme.fSize.XS};
  font-weight: ${({ theme }) => theme.fWeight.bold};
  font-family: Montserrat, Poppins, Arial, sans-serif;
  color: ${({ theme }) => theme.color.mediumWhite};
  background-color: ${({ theme }) => theme.color.primaryBlue};
  margin-top: 60px;
  z-index: 2;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.color.primaryBlue};
    transform: translate(-10px, 10px);
    transition: 0.3s;
  }

  &:hover::before {
    transform: translate(10px, -10px) !important;
  }

  &:focus::before {
    transform: translate(10px, -10px) !important;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey};
    cursor: unset;

    &::before {
      border-color: ${({ theme }) => theme.color.grey};
    }
  }

  @media screen and (max-width: 1300px) {
    height: 60px;
    width: 300px;
    margin-top: 60px;
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }

  @media screen and (max-width: 450px) {
    width: 70%;
    font-size: ${({ theme }) => theme.fSize.XS};
  }
`

export {
  ContactWrapper,
  ContactTitle,
  SocialMediaWrapper,
  Media,
  Description,
  ContactFormWrapper,
  LeftBarWrapper,
  CirclesIcon,
  Header,
  Form,
  InputWrapper,
  Border,
  Label,
  Input,
  MessageInput,
  PersonMessageIcon,
  SubmitButton,
  ErrorMessage,
}
