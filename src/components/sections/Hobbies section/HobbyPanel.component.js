import React from "react"

import {
  HobbyWrapper,
  IconWrapper,
  Icon,
  DescriptionWrapper,
  Title,
  P,
} from "./Hobbies.styles"
import { graphql, useStaticQuery } from "gatsby"
import { mapToPNGSource } from "../../../utils/mapToPNGsource"
import { sortImagesASC } from "../../../utils/sort"
import { filterById } from "../../../utils/filter"

const queryForBackgroundImgages = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/hobbiesBGC_[1-9].(png|jpg)/" } }
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

const HobbyPanel = ({ reversed, iconSrc, title, description }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForBackgroundImgages)

  const bgSources = edges.map(mapToPNGSource).sort(sortImagesASC)

  const getEvenBgSrc = filterById(1)
  const getOddBgSrc = filterById(2)

  const sourceBackground = reversed
    ? bgSources.filter(getOddBgSrc)[0].src
    : bgSources.filter(getEvenBgSrc)[0].src

  return (
    <HobbyWrapper reversed={reversed} backgroundUrl={sourceBackground}>
      <IconWrapper>
        <Icon src={iconSrc} alt={`${title} icon`} />
      </IconWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <P>{description}</P>
      </DescriptionWrapper>
    </HobbyWrapper>
  )
}
export default HobbyPanel
