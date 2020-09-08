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
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.color.primaryBlue};
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

const ContactFormWrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;

  * {
    z-index: 1;
  }

  @media screen and (max-width: 1580px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 150px 0 0;
  }

  @media screen and (max-width: 1150px) {
    align-items: center;
    padding: 0;
  }
`

const LeftBarWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  min-width: 900px;
  min-height: 900px;
  width: 50vw;
  height: 60vh;

  @media screen and (max-width: 1580px) {
    position: absolute;
    top: -10%;
    right: -10%;
  }

  @media screen and (max-width: 1480px) {
    right: -15%;
  }

  @media screen and (max-width: 1300px) {
    top: -15%;
  }

  @media screen and (max-width: 1150px) {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    margin: 0 0 50px;
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
    left: 40px;
    top: -30px;
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
    &:nth-of-type(1) {
      left: 80px;
    }

    &:nth-of-type(2) {
      display: none;
    }
  }

  @media screen and (max-width: 1150px) {
    &:nth-of-type(1) {
      left: 80px;
      top: unset;
      bottom: 20px;
    }

    &:nth-of-type(2) {
      display: block;
      right: 80px;
      bottom: 20px;
      transform: rotateX(180deg);
    }
  }

  @media screen and (max-width: 850px) {
    &:nth-of-type(1) {
      left: 60px;
    }

    &:nth-of-type(2) {
      right: 60px;
    }
  }

  @media screen and (max-width: 750px) {
    &:nth-of-type(1) {
      left: 20px;
    }

    &:nth-of-type(2) {
      right: 20px;
    }
  }

  @media screen and (max-width: 650px) {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      display: none;
    }
  }
`

const PersonMessageIcon = styled(PersonMessageSVG)`
  position: relative;
  left: -15%;
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

  @media screen and (max-width: 1150px) {
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
  margin-left: 150px;

  @media screen and (max-width: 1150px) {
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (max-width: 940px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.S};
    margin-top: 20px;
  }
`

const Form = styled.form`
  width: 600px;
  height: 900px;
  padding: 100px 0 0;
  margin: 0 0 100px 150px;
  background-color: ${({ theme }) => theme.color.darkGreenBlue};
  ${flexCenter};
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1800px) {
    margin: 0 50px 100px 0px;
  }

  @media screen and (max-width: 1580px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 1370px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 1300px) {
    width: 500px;
    height: 750px;
  }

  @media screen and (max-width: 1150px) {
    margin: 0 0 100px 0;
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
      height: 140px;
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 470px;
  height: 80px;
  margin-bottom: 90px;

  &:last-of-type {
    margin-bottom: 0;
    margin-top: 40px;
    height: 150px;
  }

  @media screen and (max-width: 1300px) {
    height: 60px;
    width: 75%;

    &:last-of-type {
      margin-top: 30px;
      height: 140px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`

const Label = styled.label`
  position: absolute;
  top: -60px;
  left: -10px;
  font-size: ${({ theme }) => theme.fSize.M};

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fSize.S};
    top: -50px;
  }

  @media screen and (max-width: 650px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
  }
`

const inputStyles = css`
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fSize.XXS};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
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
  line-height: 100%;
  overflow: auto;
  resize: none;

  &:focus ~ ${Border} {
    transform: translate(10px, -10px) !important;
  }

  @media screen and (max-width: 1300px) {
    height: 150px;
  }
`

const SubmitButton = styled(Button)`
  margin-top: 100px;
  z-index: 2;

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
    font-size: ${({ theme }) => theme.fSize.miniS};
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
