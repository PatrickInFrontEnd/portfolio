import React from "react"
import { useTheme } from "styled-components"
import {
  SkillsDescriptionBar,
  Paragraph,
  DetailsWrapper,
  LinkedInTitle,
  ButtonLink,
  ArrowIcon,
} from "./SkillsSection.styles"
import TriangleHeader from "./../../TriangleHeader/TriangleHeader.component"
import LinkedInIcon from "./../../../assets/images/icon_linkedin.svg"

const DescriptionBar = props => {
  const theme = useTheme()

  return (
    <SkillsDescriptionBar>
      <Paragraph>
        When I was starting my coding adventure all I was using was pure HTML,
        CSS and some JavaScript code. My actual technology stack is much bigger
        than it was before. More information about my technology stack you can
        find on my LinkedIn profile in "Skills & Endorsements" bookmark.
      </Paragraph>
      <DetailsWrapper>
        <TriangleHeader>
          <LinkedInTitle>Details of my technology stack</LinkedInTitle>
        </TriangleHeader>
        <ArrowIcon />
        <ButtonLink
          as={"a"}
          bgColor={theme.color.primaryBlue}
          justify="space-around"
          height="100px"
          href="https://www.linkedin.com/in/patryk-p%C5%82uciennik-a67176192/"
          target="_blank"
          rel={"noreferrer"}
        >
          <span />
          LinkedIn
          <LinkedInIcon />
        </ButtonLink>
      </DetailsWrapper>
    </SkillsDescriptionBar>
  )
}
export default DescriptionBar
