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

const TechnologiesPanel = React.forwardRef(({ iconSources }, ref) => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForIconImages)

  const namedImages = edges.map(({ node }) => ({
    name: getImageName(node),
    src: node.childImageSharp.fluid.src,
  }))

  const technologyIcons = () => {
    return Array.isArray(iconSources)
      ? iconSources.map(({ name, id }) => {
          if (!name || typeof name !== "string") return null
          const [icon] = namedImages.filter(filterByName(name))

          const source = icon.src

          return <TechnologyIcon key={id} src={source || ""} />
        })
      : null
  }

  return <TechnologyPanel ref={ref}>{technologyIcons()}</TechnologyPanel>
})
export default TechnologiesPanel
