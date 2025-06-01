import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { filterByName } from "./../../utils/filter"
import { getImageName } from "./../../utils/getImageName"
import { IconName, IconWrapper, Wrapper } from "./TechnologyIcon.styles"

const queryForIconImages = graphql`
  {
    allFile(
      filter: {
        relativePath: { regex: "/[1-9a-zA-Z_-]{0,}skills_[1-9]|1[0-2].png/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

const TechnologyIcon = ({ name }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForIconImages)

  const namedImages = edges.map(({ node }) => ({
    name: getImageName(node),
    src: node.childImageSharp.gatsbyImageData.images.fallback.src,
  }))

  const [icon] = namedImages.filter(filterByName(name))

  return (
    <Wrapper>
      <IconWrapper bgUrl={icon.src} />
      <IconName>{icon.name}</IconName>
    </Wrapper>
  )
}
export default TechnologyIcon
