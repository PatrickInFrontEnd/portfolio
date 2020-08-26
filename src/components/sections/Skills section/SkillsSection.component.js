import React, { useRef } from "react"
import {
  SkillsSectionWrapper,
  SkillsTitle,
  IconsWrapper,
  Border,
  WaveIcon,
} from "./SkillsSection.styles"
import TechnologiesContainer from "./Technologies.container"
import SkillsDescriptionBar from "./SkillsDescription.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import SkillsIcon from "./../../../assets/images/icon_skills.svg"
import { useSkillsSectionLayout } from "./useSkillsSectionLayout"

const SkillsSection = props => {
  const wrapperRef = useRef(null)

  useSkillsSectionLayout(wrapperRef)

  return (
    <>
      <SectionHeader id="skills">
        Skills
        <SkillsIcon
          style={{
            width: "60px",
            height: "60px",
            right: "-120%",
            top: "50%",

            transform: "translate(0, -50%)",
          }}
        />
      </SectionHeader>

      <SkillsSectionWrapper ref={wrapperRef}>
        <SkillsTitle>
          my skillset
          <Border position="bottom" />
        </SkillsTitle>
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
