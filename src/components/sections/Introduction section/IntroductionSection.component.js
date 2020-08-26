import React, { useRef } from "react"
import {
  IntroductionSectionWrapper,
  ShadowElement,
} from "./Introduction.styles"
import { useStaticQuery, graphql } from "gatsby"
import IntroductionHeaderComponent from "./IntroductionHeader.component"
import Description from "./Description.component"
import { useIntroductionLayout } from "./useIntroductionLayout"

const queryForBgcImg = graphql`
  query queryForBgcImg {
    file(relativePath: { eq: "introduction_section.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          src
        }
      }
    }
  }
`

const IntroductionSection = props => {
  const { file } = useStaticQuery(queryForBgcImg)

  const bgcImage = file.childImageSharp.fluid.src

  const wrapperRef = useRef(null)

  useIntroductionLayout(wrapperRef)

  return (
    <IntroductionSectionWrapper
      backgroundUrl={bgcImage}
      id="introduction"
      ref={wrapperRef}
    >
      <ShadowElement />
      <IntroductionHeaderComponent />
      <Description />
    </IntroductionSectionWrapper>
  )
}

export default IntroductionSection
