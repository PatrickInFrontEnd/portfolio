import React from "react"
import { Wrapper, IconName, IconWrapper } from "./TechnologyIcon.styles"
import { graphql, useStaticQuery } from "gatsby"
import { getImageName } from "./../../utils/getImageName"
import { filterByName } from "./../../utils/filter"

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
            fluid(quality: 100) {
              src
            }
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
    src: node.childImageSharp.fluid.src,
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
