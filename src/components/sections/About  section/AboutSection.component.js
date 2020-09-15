import React, { useRef } from "react"
import { AboutMeWrapper, AboutSectionIcon } from "./About.styles"
import DescriptionContainer from "./DescriptionContainer.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import { useAboutSectionLayout } from "./useAboutSectionLayout"

const AboutMeSection = props => {
  const wrapperRef = useRef(null)
  useAboutSectionLayout(wrapperRef)

  return (
    <AboutMeWrapper ref={wrapperRef} id="about">
      <SectionHeader noStretch extraMargin="0 0 20px">
        About me
      </SectionHeader>
      <AboutSectionIcon />
      <DescriptionContainer />
    </AboutMeWrapper>
  )
}
export default AboutMeSection
