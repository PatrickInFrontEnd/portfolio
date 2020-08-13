import React from "react"
import {
  DescriptionWrapper,
  DescriptionHeader,
  Title,
  ParagraphsWrapper,
  P,
} from "./About.styles"

const DescriptionContainer = props => (
  <DescriptionWrapper>
    <DescriptionHeader>
      <Title>Something about me...</Title>
    </DescriptionHeader>
    <ParagraphsWrapper>
      <P>
        My name is Patrick. I am interested in frontend development since 2017.
      </P>
      <P>I have recently graduated from school as a "Computer specialist".</P>
      <P>
        Currently I try to gain more and more knowledge about web frameworks
        like React or Gatsby.
      </P>
      <P>
        Every day I try to cultivate my skills so that my projects are going to
        be better and better.
      </P>
      <P>
        I am a humble person. I try to understand others' problems so that I can
        help to solve them.
      </P>
      <P>
        I can work in group or alone. I find help of other people very useful as
        it helps me to keep close to good practises so that I can become more
        professional developer.
      </P>
    </ParagraphsWrapper>
  </DescriptionWrapper>
)
export default DescriptionContainer
