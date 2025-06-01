import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const queryForImg = graphql`
  {
    file(relativePath: { eq: "my_skills.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: CONSTRAINED)
      }
    }
  }
`

const LaptopIcon = props => {
  const { file } = useStaticQuery(queryForImg)
  const image = getImage(file.childImageSharp)

  return (
    <GatsbyImage
      className="laptop-icon-image"
      image={image}
      alt="Laptop icon"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  )
}
export default LaptopIcon
