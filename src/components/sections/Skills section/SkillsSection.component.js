import React from "react"
import {
  SkillsSectionWrapper,
  SkillsTitle,
  IconsWrapper,
  Border,
} from "./SkillsSection.styles"
import { graphql, useStaticQuery } from "gatsby"
import TechnologiesContainer from "./Technologies.container"
import SkillsDescriptionBar from "./SkillsDescription.component"

const queryForBgcImg = graphql`
  {
    file(relativePath: { eq: "wave.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`

const SkillsSection = props => {
  const { file } = useStaticQuery(queryForBgcImg)

  return (
    <SkillsSectionWrapper>
      <SkillsTitle>
        my skillset
        <Border position="top" />
        <Border position="bottom" />
      </SkillsTitle>
      <IconsWrapper background={file.childImageSharp.fluid.src}>
        <TechnologiesContainer />
      </IconsWrapper>
      <SkillsDescriptionBar />
    </SkillsSectionWrapper>
  )
}
export default SkillsSection
