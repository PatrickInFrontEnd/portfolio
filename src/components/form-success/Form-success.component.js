import React, { useRef } from "react"
import { useTheme } from "styled-components"
import { ButtonLink } from "./../Button/Button.styles"
import { FormSuccessIcon, Header, Wrapper } from "./Form-success.styles"
import { useContactFormLayout } from "./useContactFormLayout"

const FormSuccessComponent = props => {
  const wrapperRef = useRef(null)

  useContactFormLayout(wrapperRef)

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
