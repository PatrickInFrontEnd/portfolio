import React, { useRef } from "react"
import {
  SkillsSectionWrapper,
  SkillsTitle,
  IconsWrapper,
  WaveIcon,
} from "./SkillsSection.styles"
import TechnologiesContainer from "./Technologies.container"
import SkillsDescriptionBar from "./SkillsDescription.component"
import { SectionDividerSecondaryColor } from "../../SectionDivider/SectionDivider.component"
import { useSkillsSectionLayout } from "./useSkillsSectionLayout"

const SkillsSection = props => {
  const wrapperRef = useRef(null)

  useSkillsSectionLayout(wrapperRef)

  return (
    <>
      <SectionDividerSecondaryColor id="skills" />

      <SkillsSectionWrapper ref={wrapperRef}>
        <SkillsTitle>my skillset</SkillsTitle>
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
