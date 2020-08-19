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

const queryForBgcImg = graphql`
  {
    file(relativePath: { eq: "slider_2.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const RightBarContainer = props => {
  const { file } = useStaticQuery(queryForBgcImg)

  return (
    <SliderImageWrapper src={file.childImageSharp.fluid.src}>
      <LinkButton bottom="30px" right="350px">
        <LinkP>LIVE</LinkP>
        <LinkIcon>
          <LiveIcon />
        </LinkIcon>
      </LinkButton>
      <LinkButton bottom="30px" right="100px">
        <LinkP>CODE</LinkP>
        <LinkIcon>
          <CodeGithubIcon />
        </LinkIcon>
      </LinkButton>
    </SliderImageWrapper>
  )
}
export default RightBarContainer
