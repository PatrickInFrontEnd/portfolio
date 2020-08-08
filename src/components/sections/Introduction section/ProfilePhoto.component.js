import React from "react"
import {
  DescriptionPhotoWrapper,
  DescriptionPhoto,
  DescriptionBorder,
} from "./Introduction.styles"
import { graphql, useStaticQuery } from "gatsby"

const queryForProfileImg = graphql`
  query queryForProfileImg {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 1400, quality: 100) {
          src
        }
      }
    }
  }
`

const ProfilePhotoComponent = props => {
  const { file } = useStaticQuery(queryForProfileImg)
  const src = file.childImageSharp.fluid.src

  return (
    <DescriptionPhotoWrapper>
      <DescriptionBorder>
        <DescriptionPhoto src={src} />
      </DescriptionBorder>
    </DescriptionPhotoWrapper>
  )
}

export default ProfilePhotoComponent
