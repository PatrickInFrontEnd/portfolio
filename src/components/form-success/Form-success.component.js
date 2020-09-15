import React, { useRef } from "react"
import { Wrapper, FormSuccessIcon, Header } from "./Form-success.styles"
import { ButtonLink } from "./../Button/Button.styles"
import { useFormSuccessLayout } from "./useContactFormLayout"
import { useTheme } from "styled-components"

const FormSuccessComponent = props => {
  const wrapperRef = useRef(null)

  useFormSuccessLayout(wrapperRef)

  const theme = useTheme()
  return (
    <Wrapper ref={wrapperRef}>
      <Header>You have submitted the form!</Header>
      <FormSuccessIcon />
      <ButtonLink bgColor={theme.color.primaryBlue} to="/">
        Go back
      </ButtonLink>
    </Wrapper>
  )
}
export default FormSuccessComponent
