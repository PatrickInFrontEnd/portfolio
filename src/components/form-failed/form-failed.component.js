import React, { useRef } from "react"
import { Wrapper, Header } from "./../form-success/Form-success.styles"
import { FormFailedIcon } from "./form-failed.styles"
import { ButtonLink } from "./../Button/Button.styles"
import { useFormFailedLayout } from "./useFormFailedLayout"

const FailedFormPage = props => {
  const wrapperRef = useRef()

  useFormFailedLayout(wrapperRef)

  return (
    <Wrapper isFormFailed ref={wrapperRef}>
      <Header>Something went wrong with your form submission...</Header>
      <FormFailedIcon />
      <ButtonLink to="/">Go back</ButtonLink>
    </Wrapper>
  )
}
export default FailedFormPage
