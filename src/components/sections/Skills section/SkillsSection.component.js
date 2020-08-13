import React from "react"
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

const SkillsSection = props => (
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

    <SkillsSectionWrapper>
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
export default SkillsSection
