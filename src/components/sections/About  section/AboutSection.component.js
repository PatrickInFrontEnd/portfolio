import React, { useRef } from "react"
import { AboutMeWrapper } from "./About.styles"
import PhotosContainer from "./PhotosContainer.component"
import DescriptionContainer from "./DescriptionContainer.component"
import { graphql, useStaticQuery } from "gatsby"
import { SectionDividerPrimaryColor } from "../../SectionDivider/SectionDivider.component"
import { useAboutSectionLayout } from "./useAboutSectionLayout"

const queryForImg = graphql`
  {
    file(relativePath: { eq: "about_me_section.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`

const AboutMeSection = props => {
  const { file } = useStaticQuery(queryForImg)

  const wrapperRef = useRef(null)
  useAboutSectionLayout(wrapperRef)
  return (
    <>
      <SectionDividerPrimaryColor id="about" />

      <AboutMeWrapper
        ref={wrapperRef}
        backgroundUrl={file.childImageSharp.fluid.src}
      >
        <PhotosContainer />
        <DescriptionContainer />
      </AboutMeWrapper>
    </>
  )
}
export default AboutMeSection
