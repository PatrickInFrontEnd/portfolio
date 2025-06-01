import React, { useEffect, useState } from "react"
import ScrollTopButton from "../components/scrollTopButton/scrollTopButton.component"
import AboutMeSection from "../components/sections/About  section/AboutSection.component"
import ContactSection from "../components/sections/Contact section/ContactSection.component"
import MyHobbiesSection from "../components/sections/Hobbies section/HobbiesSection.component"
import IntroductionSection from "../components/sections/Introduction section/IntroductionSection.component"
import ProjectsSection from "../components/sections/Projects section/ProjectsSection.component"
import SkillsSection from "../components/sections/Skills section/SkillsSection.component"
import SEO from "../components/seo"
import Footer from "./../components/Footer/Footer.component"
import MainPageWrapper from "./../components/MainPageWrapper.styles"
import SpinnerLoader from "./../components/SpinnerLoader/Spinner.component"
import NavigationBar from "./../layouts/Navigation/Navigation.component"

const IndexPage = props => {
  const [isDOMLoaded, setDOMstatus] = useState(false)

  useEffect(() => {
    setDOMstatus(true)
  }, [])

  return (
    <MainPageWrapper>
      {isDOMLoaded === true ? (
        <>
          <NavigationBar />

          <IntroductionSection />

          <ProjectsSection />

          <SkillsSection />

          <AboutMeSection />

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

export const Head = () => (
  <SEO lang="EN" title="Patryk Płuciennik | Portfolio" />
)

export default IndexPage
