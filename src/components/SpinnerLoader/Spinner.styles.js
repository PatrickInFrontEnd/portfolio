import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"
import SpinnerIcon from "./../../assets/images/spinner.svg"

const Wrapper = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.lightBlue};
`

const SpinnerWrapper = styled(SpinnerIcon)`
  width: 200px;
  height: 200px;
  /* border: 3px solid ${({ theme }) => theme.color.black}; */
  animation: rotateSpinner 4s infinite;

  @keyframes rotateSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export { Wrapper, SpinnerWrapper }
