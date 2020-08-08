import React from "react"
import { useTheme } from "styled-components"
import {
  IntroductionWrapper,
  IntroductionHeader,
  IntroductionText,
  IntroductionContent,
  IntroductionLinksWrapper,
  IntroductionLinkWrapper,
  IntroductionLink,
  ContentHeader,
  ContentMiniHeader,
  ContentParagraph,
} from "./Introduction.styles"
import InvertedProjectsIcon from "../../../assets/images/icon_projects_inverted.svg"
import UserIcon_2 from "../../../assets/images/icon_user_2.svg"
import { scrollToSection } from "./../../../utils/scrollToSection"

const IntroductionHeaderSection = props => {
  const theme = useTheme()

  return (
    <IntroductionWrapper>
      <IntroductionHeader>
        <IntroductionText color={theme.color.orangeHTML}>
          FRONT
        </IntroductionText>
        <IntroductionText color={theme.color.blueCSS}>END</IntroductionText>
        <IntroductionText color={theme.color.yellowJS}>
          DEVELOPER
        </IntroductionText>
      </IntroductionHeader>
      <IntroductionContent>
        <ContentHeader>Hello!</ContentHeader>
        <ContentMiniHeader>I am a Front-End developer</ContentMiniHeader>
        <ContentParagraph>
          Go check out my projects or try to get to know me better :&#41;
        </ContentParagraph>
        <IntroductionLinksWrapper>
          <IntroductionLinkWrapper onClick={scrollToSection("#projects")}>
            <IntroductionLink>Projects</IntroductionLink>
            <span>
              <InvertedProjectsIcon />
            </span>
          </IntroductionLinkWrapper>
          <IntroductionLinkWrapper onClick={scrollToSection("#about")}>
            <IntroductionLink>About me</IntroductionLink>
            <span>
              <UserIcon_2 />
            </span>
          </IntroductionLinkWrapper>
        </IntroductionLinksWrapper>
      </IntroductionContent>
    </IntroductionWrapper>
  )
}

export default IntroductionHeaderSection
