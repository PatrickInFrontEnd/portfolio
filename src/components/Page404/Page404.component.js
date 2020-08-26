import React from "react"
import {
  GoBackLink,
  Title,
  Wrapper,
  IconError,
  IconGoBack,
  NavHeader,
} from "./Page404.styles"

const Page404 = props => (
  <>
    <NavHeader>Wrong route..</NavHeader>
    <Wrapper>
      <IconError />
      <Title>
        Whoops... There is no such a route that exists, but not to worry!
      </Title>
      <GoBackLink to={"/"}>
        Go back to the main page <IconGoBack />{" "}
      </GoBackLink>
    </Wrapper>
  </>
)
export default Page404
