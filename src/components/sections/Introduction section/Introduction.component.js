import React from "react"
import {
  IntroductionSectionWrapper,
  BackgroundImage,
  ShadowElement,
} from "./Introduction.styles"
import { useStaticQuery, graphql } from "gatsby"
import IntroductionHeader from "./IntroductionHeader.component"
import Description from "./Description.component"

const queryForBgcImg = graphql`
  query queryForBgcImg {
    file(relativePath: { eq: "introduction_section.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IntroductionSection = props => {
  const { file } = useStaticQuery(queryForBgcImg)

  const bgcImage = file.childImageSharp.fluid

  return (
    <IntroductionSectionWrapper id="introduction">
      <BackgroundImage fluid={bgcImage} />
      <ShadowElement />
      <IntroductionHeader />
      <Description />
    </IntroductionSectionWrapper>
  )
}

export default IntroductionSection
