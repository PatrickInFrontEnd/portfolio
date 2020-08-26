import React from "react"
import SEO from "../components/seo"
import IntroductionSection from "../components/sections/Introduction section/IntroductionSection.component"
import ProjectsSection from "../components/sections/Projects section/ProjectsSection.component"
import SkillsSection from "../components/sections/Skills section/SkillsSection.component"
import AboutMeSection from "../components/sections/About  section/AboutSection.component"
import MyHobbiesSection from "../components/sections/Hobbies section/HobbiesSection.component"
import ContactSection from "../components/sections/Contact section/ContactSection.component"
import Footer from "./../components/Footer/Footer.component"
import ScrollTopButton from "../components/scrollTopButton/scrollTopButton.component"
import MainPageWrapper from "./../components/MainPageWrapper.styles"
import SliderProvider from "./../providers/slider_provider/slider_provider"
import NavigationBar from "./../layouts/Navigation/Navigation.component"

const IndexPage = props => {
  return (
    <MainPageWrapper>
      <SEO lang="EN" title="Patryk Płuciennik | Portfolio" />
      <NavigationBar />

      <IntroductionSection />

      <SliderProvider>
        <ProjectsSection />
      </SliderProvider>

      <SkillsSection />

      <AboutMeSection />

      <MyHobbiesSection />

      <ContactSection />

      <Footer />

      <ScrollTopButton />
    </MainPageWrapper>
  )
}

export default IndexPage
