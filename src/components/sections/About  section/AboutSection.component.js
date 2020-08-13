import React from "react"
import { AboutMeWrapper } from "./About.styles"
import PhotosContainer from "./PhotosContainer.component"
import DescriptionContainer from "./DescriptionContainer.component"
import { graphql, useStaticQuery } from "gatsby"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import AboutIcon from "./../../../assets/images/icon_user.svg"

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

  return (
    <>
      <SectionHeader id="about">
        About me
        <AboutIcon
          style={{
            width: "50px",
            height: "50px",
            right: "-85%",
            top: "50%",

            transform: "translate(-50%, -50%)",
          }}
        />
      </SectionHeader>

      <AboutMeWrapper backgroundUrl={file.childImageSharp.fluid.src}>
        <PhotosContainer />
        <DescriptionContainer />
      </AboutMeWrapper>
    </>
  )
}
export default AboutMeSection
