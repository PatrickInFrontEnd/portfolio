import React from "react"
import { TechnologyIcon, TechnologyPanel } from "./Projects.styles"
import { graphql, useStaticQuery } from "gatsby"
import { getImageName } from "../../../utils/getImageName"
import { filterByName } from "../../../utils/filter"

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

const TechnologiesPanel = ({ iconSources }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForIconImages)

  const namedImages = edges.map(({ node }) => ({
    name: getImageName(node),
    src: node.childImageSharp.fluid.src,
  }))

  return (
    <TechnologyPanel>
      {Array.isArray(iconSources)
        ? iconSources.map(({ name }, i) => {
            if (!name) return null
            const [icon] = namedImages.filter(filterByName(name))

            const source = icon.src

            return <TechnologyIcon key={i} src={source || ""} />
          })
        : null}
    </TechnologyPanel>
  )
}
export default TechnologiesPanel
