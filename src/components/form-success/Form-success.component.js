import React, { useRef } from "react"
import { Wrapper, FormSuccessIcon, Header } from "./Form-success.styles"
import { ButtonLink } from "./../Button/Button.styles"
import { useFormSuccessLayout } from "./useContactFormLayout"

const FormSuccessComponent = props => {
  const wrapperRef = useRef(null)

  useFormSuccessLayout(wrapperRef)

  return (
    <Wrapper ref={wrapperRef}>
      <Header>You have submitted the form!</Header>
      <FormSuccessIcon />
      <ButtonLink to="/">Go back</ButtonLink>
    </Wrapper>
  )
}
export default FormSuccessComponent
