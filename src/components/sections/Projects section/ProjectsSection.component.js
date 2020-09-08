import React from "react"
import { ProjectsSectionWrapper, ProjectsIcon } from "./Projects.styles"
import { SectionDividerPrimaryColor } from "../../SectionDivider/SectionDivider.component"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import Slider from "./Slider.component"
import SliderProvider from "./../../../providers/slider_provider/slider_provider"

const ProjectsSection = props => {
  return (
    <>
      <SectionDividerPrimaryColor id="projects" />

      <ProjectsSectionWrapper>
        <SectionHeader noStretch>My projects</SectionHeader>
        <ProjectsIcon />

        <SliderProvider>
          <Slider />
        </SliderProvider>
      </ProjectsSectionWrapper>
    </>
  )
}
export default ProjectsSection

/*DEPENDENCIES


import { graphql, useStaticQuery } from "gatsby"


const queryForBgcImg = graphql`
  {
    file(relativePath: { eq: "projects_section.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          src
        }
      }
    }
  }
`
*/

//NOTE: auto animating the slider

//NOTE: auto animating state
//const [autoAnimate, setAutoAnimationStatus] = useState(true)

/* const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = animateNextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    if (autoAnimate !== false) {
      const interval = setInterval(play, 10000)
      return () => clearInterval(interval)
    }
  }, [autoAnimate])

  const replayAutoAnimating = () => {
    if (!autoAnimate) setAutoAnimationStatus(true)
  } */
