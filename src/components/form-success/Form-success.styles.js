import styled, { css } from "styled-components"
import { flexCenter } from "./../mixins/mixins"
import FormSuccessSVG from "./../../assets/images/form-success.svg"
import { Header as H2 } from "./../Header/Header.styles"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  ${flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.navyBlue};

  ${({ isFormFailed }) =>
    isFormFailed
      ? css`
          justify-content: space-around;
        `
      : ""}

  @media screen and (max-width: 600px) {
    justify-content: space-around;
  }
`

const FormSuccessIcon = styled(FormSuccessSVG)`
  margin: 140px auto 80px auto;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 300px;
    width: 80%;
    margin: 100px auto 100px auto;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto;
  }
`

const Header = styled(H2)`
  text-align: center;
  padding: 0 20px;
  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.M};
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fSize.S};
  }

  @media screen and (max-width: 420px) {
    font-size: ${({ theme }) => theme.fSize.XS};
  }
`

export { Wrapper, FormSuccessIcon, Header }
