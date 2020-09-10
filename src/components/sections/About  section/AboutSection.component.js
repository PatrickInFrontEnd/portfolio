import React, { useRef } from "react"
import { AboutMeWrapper, AboutSectionIcon } from "./About.styles"
import DescriptionContainer from "./DescriptionContainer.component"
import { SectionDividerPrimaryColor } from "../../SectionDivider/SectionDivider.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import { useAboutSectionLayout } from "./useAboutSectionLayout"

const AboutMeSection = props => {
  const wrapperRef = useRef(null)
  useAboutSectionLayout(wrapperRef)

  return (
    <div ref={wrapperRef}>
      <SectionDividerPrimaryColor id="about" />
      <AboutMeWrapper>
        <SectionHeader noStretch extraMargin="0 0 20px">
          About me
        </SectionHeader>
        <AboutSectionIcon />
        <DescriptionContainer />
      </AboutMeWrapper>
    </div>
  )
}
export default AboutMeSection
