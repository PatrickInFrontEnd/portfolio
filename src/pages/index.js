import React from "react"
import SEO from "../components/seo"
import IntroductionSection from "../components/sections/Introduction section/IntroductionSection.component"
import ProjectsSection from "../components/sections/Projects section/ProjectsSection.component"
import SkillsSection from "../components/sections/Skills section/SkillsSection.component"
import AboutMeSection from "../components/sections/About  section/AboutSection.component"
import MyHobbiesSection from "../components/sections/Hobbies section/HobbiesSection.component"
import ScrollTopButton from "../components/scrollTopButton/scrollTopButton.component"

const IndexPage = () => (
  <div>
    <SEO lang="EN" title="Patryk Płuciennik | Portfolio" />
    <IntroductionSection />
    <ProjectsSection />
    <SkillsSection />
    <AboutMeSection />
    <MyHobbiesSection />
    <ScrollTopButton />
  </div>
)

export default IndexPage
