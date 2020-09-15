import React, { useRef } from "react"
import {
  SkillsSectionWrapper,
  IconsWrapper,
  WaveIcon,
} from "./SkillsSection.styles"
import TechnologiesContainer from "./Technologies.container"
import SkillsDescriptionBar from "./SkillsDescription.component"
import { useSkillsSectionLayout } from "./useSkillsSectionLayout"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"

const SkillsSection = props => {
  const wrapperRef = useRef(null)

  useSkillsSectionLayout(wrapperRef)

  return (
    <SkillsSectionWrapper ref={wrapperRef} id="skills">
      <SectionHeader noStretch extraMargin="0 0 40px">
        My skillset
      </SectionHeader>
      <IconsWrapper>
        <WaveIcon />
        <TechnologiesContainer />
      </IconsWrapper>
      <SkillsDescriptionBar />
    </SkillsSectionWrapper>
  )
}
export default SkillsSection
