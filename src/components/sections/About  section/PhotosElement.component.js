import React from "react"
import { PhotoWrapper, Photo } from "./About.styles"
import { graphql, useStaticQuery } from "gatsby"
import { getImageNumber } from "./../../../utils/getImageNumber"

const queryForImgages = graphql`
  {
    allFile(filter: { relativePath: { regex: "/about_me_[1-9].(png|jpg)/" } }) {
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

const PhotosElement = props => {
  const {
    allFile: { edges },
  } = useStaticQuery(queryForImgages)

  const sources = edges
    .map(({ node }) => ({
      src: node.childImageSharp.fluid.src,
      id: getImageNumber(node.relativePath),
    }))
    .sort((a, b) => a.id - b.id)

  return (
    <PhotoWrapper>
      {sources.map(({ src, id }) => (
        <Photo key={id} backgroundUrl={src} />
      ))}
    </PhotoWrapper>
  )
}

export default PhotosElement
