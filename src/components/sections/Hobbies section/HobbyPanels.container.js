import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import hobbyData from "./data"
import HobbyPanel from "./HobbyPanel.component"
import { mapToPNGSource } from "./../../../utils/mapToPNGsource"
import { sortImagesASC } from "./../../../utils/sort"

const queryForImgages = graphql`
  {
    allFile(filter: { relativePath: { regex: "/hobby_[1-9].(png|jpg)/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`

const HobbyPanelsContainer = props => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForImgages)

  const sources = edges.map(mapToPNGSource).sort(sortImagesASC)

  return sources.map(({ src, id }, i) => {
    return (
      <HobbyPanel
        key={id}
        reversed={id % 2 === 0}
        iconSrc={src}
        title={hobbyData[i].title}
        description={hobbyData[i].description}
      />
    )
  })
}

export default HobbyPanelsContainer
