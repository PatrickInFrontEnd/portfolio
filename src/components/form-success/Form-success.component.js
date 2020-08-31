import React from "react"
import { Wrapper, FormSuccessIcon, Header } from "./Form-success.styles"
import { Button } from "./../Button/Button.styles"
import { Link } from "gatsby"

const FormSuccessComponent = props => (
  <Wrapper>
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
export default FormSuccessComponent
