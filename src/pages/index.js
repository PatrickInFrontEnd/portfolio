import React, { useState, useEffect } from "react"
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
import NavigationBar from "./../layouts/Navigation/Navigation.component"
import SpinnerLoader from "./../components/SpinnerLoader/Spinner.component"

const IndexPage = props => {
  const [isDOMLoaded, setDOMstatus] = useState(false)

  useEffect(() => {
    setDOMstatus(true)
  }, [])

  return (
    <MainPageWrapper>
      <SEO lang="EN" title="Patryk Płuciennik | Portfolio" />
      {isDOMLoaded === true ? (
        <>
          <NavigationBar />

          <IntroductionSection />

          <ProjectsSection />

          <SkillsSection />

          {/* <AboutMeSection /> */}

          <MyHobbiesSection />

          <ContactSection />

          <Footer />

          <ScrollTopButton />
        </>
      ) : (
        <SpinnerLoader />
      )}
    </MainPageWrapper>
  )
}

export default IndexPage
