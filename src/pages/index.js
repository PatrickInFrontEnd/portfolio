import React from "react"
import SEO from "../components/seo"
import IntroductionSection from "./../components/sections/Introduction section/Introduction.component"
import SectionHeader from "./../components/SectionHeader/SectionHeader.component"
import ScrollTopButton from "../components/scrollTopButton/scrollTopButton.component"
import ProjectsSection from "./../components/sections/Projects section/Projects.component"
import ProjectsIcon from "./../assets/images/icon_projects.svg"
import SkillsIcon from "./../assets/images/icon_skills.svg"

const IndexPage = () => (
  <div>
    <SEO lang="EN" title="Patryk Płuciennik | Portfolio" />
    <IntroductionSection />
    <SectionHeader id="projects">
      Projects
      <ProjectsIcon
        style={{
          width: "60px",
          height: "60px",
          right: "-90%",
          top: "50%",

          transform: "translate(0, -40%)",
        }}
      />
    </SectionHeader>
    <ProjectsSection />
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
    <ScrollTopButton />
  </div>
)

export default IndexPage
