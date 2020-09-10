import React, { useRef } from "react"
import {
  SkillsSectionWrapper,
  IconsWrapper,
  WaveIcon,
} from "./SkillsSection.styles"
import TechnologiesContainer from "./Technologies.container"
import SkillsDescriptionBar from "./SkillsDescription.component"
import { SectionDividerSecondaryColor } from "../../SectionDivider/SectionDivider.component"
import { useSkillsSectionLayout } from "./useSkillsSectionLayout"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"

const SkillsSection = props => {
  const wrapperRef = useRef(null)

  useSkillsSectionLayout(wrapperRef)

  return (
    <>
      <SectionDividerSecondaryColor id="skills" />

      <SkillsSectionWrapper ref={wrapperRef}>
        <SectionHeader noStretch extraMargin="0 0 40px">
          My skillset
        </SectionHeader>
        <IconsWrapper>
          <WaveIcon />
          <TechnologiesContainer />
        </IconsWrapper>
        <SkillsDescriptionBar />
      </SkillsSectionWrapper>
    </>
  )
}
export default SkillsSection
