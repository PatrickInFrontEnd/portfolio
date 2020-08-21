import React from "react"
import {
  SliderImageWrapper,
  LinkP,
  LinkIcon,
  LinkButton,
} from "./Projects.styles"
import { graphql, useStaticQuery } from "gatsby"
import LiveIcon from "./../../../assets/images/icon_live.svg"
import CodeGithubIcon from "./../../../assets/images/icon_code_github.svg"
import { mapToPNGSource } from "./../../../utils/mapToPNGsource"
import { sortImagesASC } from "./../../../utils/sort"
import { filterById } from "./../../../utils/filter"

const queryForSlideImages = graphql`
  {
    allFile(filter: { relativePath: { regex: "/slider_[1-9].(png|jpg)/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`

const RightBarContainer = React.forwardRef(
  ({ slideId, liveUrl, codeUrl }, ref) => {
    const {
      allFile: { edges },
    } = useStaticQuery(queryForSlideImages)

    const sources = edges.map(mapToPNGSource).sort(sortImagesASC)
    const [sliderSrc] = sources.filter(filterById(slideId))
    const source = sliderSrc.src

    return (
      <SliderImageWrapper ref={ref} src={source}>
        <LinkButton
          bottom="30px"
          right="350px"
          href={liveUrl || ""}
          target="_blank"
          rel="noreferrer"
        >
          <LinkP>LIVE</LinkP>
          <LinkIcon>
            <LiveIcon />
          </LinkIcon>
        </LinkButton>
        <LinkButton
          bottom="30px"
          right="100px"
          href={codeUrl || ""}
          target="_blank"
          rel="noreferrer"
        >
          <LinkP>CODE</LinkP>
          <LinkIcon>
            <CodeGithubIcon />
          </LinkIcon>
        </LinkButton>
      </SliderImageWrapper>
    )
  }
)

export default RightBarContainer
