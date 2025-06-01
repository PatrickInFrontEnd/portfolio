import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { mapToPNGSource } from "./../../../utils/mapToPNGsource"
import { sortImagesASC } from "./../../../utils/sort"
import LaptopIcon from "./LaptopIcon.component"
import { LaptopIconWrapper, TechnologiesWrapper } from "./SkillsSection.styles"
import TechnologiesPanel from "./TechnologyPanel.component"

const queryForImgages = graphql`
  query queryForSkillImages {
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

const TechnologiesContainer = props => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForImgages)

  const sources = edges.map(mapToPNGSource).sort(sortImagesASC)

  const firstPanelSrc = sources.filter((el, i) => i < 3)
  const secondPanelSrc = sources.filter((el, i) => i >= 3 && i < 7)
  const thirdPanelSrc = sources.filter((el, i) => i >= 7 && i < 10)
  const fourthPanelSrc = sources.filter((el, i) => i >= 10 && i < 13)

  const panelSources = [
    firstPanelSrc,
    secondPanelSrc,
    thirdPanelSrc,
    fourthPanelSrc,
  ]

  return (
    <>
      <TechnologiesWrapper>
        {panelSources.map((srcArray, i) => (
          <TechnologiesPanel key={i} sources={srcArray} />
        ))}
      </TechnologiesWrapper>
      <LaptopIconWrapper id="laptopIcon">
        <LaptopIcon />
      </LaptopIconWrapper>
    </>
  )
}
export default TechnologiesContainer
