import React, { useRef } from "react"
import { Wrapper, FormSuccessIcon, Header } from "./Form-success.styles"
import { Button } from "./../Button/Button.styles"
import { Link } from "gatsby"
import { useFormSuccessLayout } from "./useContactFormLayout"

const FormSuccessComponent = props => {
  const wrapperRef = useRef(null)

  useFormSuccessLayout(wrapperRef)

  return (
    <Wrapper ref={wrapperRef}>
      <Header>You have submitted the form!</Header>
      <FormSuccessIcon />
      <Button
        as={Link}
        to="/"
        style={{ textDecoration: "none", display: "flex" }}
      >
        Go back
      </Button>
    </Wrapper>
  )
}
export default FormSuccessComponent
