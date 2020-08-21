import React from "react"
import {
  SkillsDescriptionBar,
  Paragraph,
  DetailsWrapper,
  LinkedInTitle,
  LinkWrapper,
  LinkTitle,
  ArrowIcon,
} from "./SkillsSection.styles"

import LinkedInIcon from "./../../../assets/images/icon_linkedin.svg"

const DescriptionBar = props => (
  <SkillsDescriptionBar>
    <Paragraph>
      When I was starting my coding adventure all I was using was pure HTML, CSS
      and some JS code. With more experience came more tools. I tried to expand
      my knowledge and decided to learn more and more web technologies that
      would make coding frontend layer much easier. I was constantly achieving
      more front-end experience and good practises. From now on I try to create
      good-quality, maintainable and scalable code, using all these technologies
      I have learnt so far.
    </Paragraph>
    <DetailsWrapper>
      <LinkedInTitle>Technology stack details</LinkedInTitle>
      <ArrowIcon />
      <LinkWrapper
        href="https://www.linkedin.com/in/patryk-p%C5%82uciennik-a67176192/"
        target="_blank"
      >
        <LinkTitle>LinkedIn</LinkTitle>
        <LinkedInIcon />
      </LinkWrapper>
    </DetailsWrapper>
  </SkillsDescriptionBar>
)
export default DescriptionBar
