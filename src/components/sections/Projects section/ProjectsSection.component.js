import React, { useRef } from "react"
import { ProjectsSectionWrapper, ProjectsIcon } from "./Projects.styles"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import Sliders from "./Sliders.component"
import SliderProvider from "./../../../providers/slider_provider/slider_provider"
import { useProjectsSectionLayout } from "./useProjectsSectionLayout"

const ProjectsSection = props => {
  const wrapperRef = useRef(null)

  useProjectsSectionLayout(wrapperRef)

  return (
    <div id="projects">
      <ProjectsSectionWrapper ref={wrapperRef}>
        <SectionHeader noStretch>My projects</SectionHeader>
        <ProjectsIcon />
        <SliderProvider>
          <Sliders />
        </SliderProvider>
      </ProjectsSectionWrapper>
    </div>
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
