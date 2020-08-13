import React from "react"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import HobbiesIcon from "./../../../assets/images/icon_camera.svg"
import { graphql, useStaticQuery } from "gatsby"
import HobbyPanelsContainer from "./HobbyPanels.container"

const queryForImgages = graphql`
  query queryForBackgroundImages {
    allFile(
      filter: { relativePath: { regex: "/hobbiesBGC_(even|odd).(png|jpg)/" } }
    ) {
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

const MyHobbiesSection = props => (
  <>
    <SectionHeader id="hobbies">
      My hobbies
      <HobbiesIcon
        style={{
          width: "55px",
          height: "55px",
          right: "-65%",
          top: "50%",

          transform: "translate(0, -50%)",
        }}
      />
    </SectionHeader>
    <HobbyPanelsContainer />
  </>
)

export default MyHobbiesSection

/* <HobbyPanel>
        <IconWrapper></IconWrapper>
        <DescriptionWrapper>
          <Title></Title>
          <P></P>
        </DescriptionWrapper>
      </HobbyPanel>
      <HobbyPanel reversed>
        <IconWrapper></IconWrapper>
        <DescriptionWrapper>
          <Title></Title>
          <P></P>
        </DescriptionWrapper>
      </HobbyPanel>
      <HobbyPanel>
        <IconWrapper></IconWrapper>
        <DescriptionWrapper>
          <Title></Title>
          <P></P>
        </DescriptionWrapper>
      </HobbyPanel>
      <HobbyPanel reversed>
        <IconWrapper></IconWrapper>
        <DescriptionWrapper>
          <Title></Title>
          <P></P>
        </DescriptionWrapper>
      </HobbyPanel> */
