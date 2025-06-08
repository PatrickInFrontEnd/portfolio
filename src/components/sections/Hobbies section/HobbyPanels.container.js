import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { mapToPNGSource } from "./../../../utils/mapToPNGsource"
import { sortImagesASC } from "./../../../utils/sort"
import hobbyData from "./data"
import HobbyPanel from "./HobbyPanel.component"

const queryForImgages = graphql`
  {
    allFile(filter: { relativePath: { regex: "/hobby_[1-9].(png|jpg)/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
              quality: 100
              layout: CONSTRAINED
            )
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

  return sources.map(({ image, id }, i) => {
    return (
      <HobbyPanel
        key={id}
        reversed={id % 2 === 0}
        iconImage={image}
        title={hobbyData[i].title}
        description={hobbyData[i].description}
      />
    )
  })
}

export default HobbyPanelsContainer
