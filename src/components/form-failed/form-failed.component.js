import React, { useRef } from "react"
import { Wrapper, Header } from "./../form-success/Form-success.styles"
import { FormFailedIcon } from "./form-failed.styles"
import { ButtonLink } from "./../Button/Button.styles"
import { useFormFailedLayout } from "./useFormFailedLayout"
import { useTheme } from "styled-components"

const FailedFormPage = props => {
  const wrapperRef = useRef()

  useFormFailedLayout(wrapperRef)

  const theme = useTheme()
  return (
    <Wrapper isFormFailed ref={wrapperRef}>
      <Header>Something went wrong with your form submission...</Header>
      <FormFailedIcon />
      <ButtonLink bgColor={theme.color.primaryBlue} to="/">
        Go back
      </ButtonLink>
    </Wrapper>
  )
}
export default FailedFormPage
