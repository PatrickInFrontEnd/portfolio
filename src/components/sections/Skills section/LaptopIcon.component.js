import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LaptopPNG } from "./SkillsSection.styles"

const queryForImg = graphql`
  {
    file(relativePath: { eq: "my_skills.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`

const LaptopIcon = props => {
  const { file } = useStaticQuery(queryForImg)

  return <LaptopPNG src={file.childImageSharp.fluid.src} alt="Laptop icon" />
}
export default LaptopIcon
