import styled from "styled-components"
import FormFailedSVG from "./../../assets/images/form-failed.svg"

const FormFailedIcon = styled(FormFailedSVG)`
  width: 500px;
  margin: 50px 0;

  @media screen and (max-width: 1100px) {
    width: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 300px !important;
    margin: 0;
  }

  @media screen and (max-width: 350px) {
    width: 280px;
  }
`

export { FormFailedIcon }
