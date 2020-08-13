import React from "react"
import { TechnologiesWrapper } from "./SkillsSection.styles"
import { graphql, useStaticQuery } from "gatsby"
import TechnologyPanel from "./TechnologyPanel.component"
import LaptopIcon from "./LaptopIcon.component"
import { getImageNumber } from "./../../../utils/getImageNumber"

const queryForImgages = graphql`
  query queryForSkillImages {
    allFile(filter: { relativePath: { regex: "/skills_[1-9]|1[0-2].png/" } }) {
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

const TechnologiesContainer = props => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForImgages)

  const sources = edges
    .map(({ node }) => ({
      src: node.childImageSharp.fluid.src,
      id: getImageNumber(node.relativePath),
    }))
    .sort((a, b) => a.id - b.id)

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
          <TechnologyPanel key={i} sources={srcArray} />
        ))}
      </TechnologiesWrapper>
      <LaptopIcon />
    </>
  )
}
export default TechnologiesContainer
