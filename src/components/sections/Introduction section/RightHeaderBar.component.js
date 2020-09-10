import React from "react"
import {
  IntroductionWrapper,
  IntroductionContent,
  IntroductionLinksWrapper,
  IntroductionLinkWrapper,
  IntroductionLink,
  ContentHeader,
  ContentMiniHeader,
  ContentParagraph,
} from "./Introduction.styles"
import TriangleHeaderComponent from "../../TriangleHeader/TriangleHeader.component"
import InvertedProjectsIcon from "../../../assets/images/icon_projects_inverted.svg"
import UserIcon_2 from "../../../assets/images/icon_user_2.svg"
import { scrollToSection } from "../../../utils/scrollToSection"

const IntroductionHeaderSection = props => (
  <IntroductionWrapper>
    <IntroductionContent>
      <TriangleHeaderComponent>
        <ContentHeader>Hello!</ContentHeader>
      </TriangleHeaderComponent>

      <ContentMiniHeader>I am a Front-End developer</ContentMiniHeader>

      <ContentParagraph>
        Go check out my projects or try to get to know me better :&#41;
      </ContentParagraph>

      <IntroductionLinksWrapper>
        <IntroductionLinkWrapper onClick={() => scrollToSection("#projects")}>
          <IntroductionLink>Projects</IntroductionLink>
          <span>
            <InvertedProjectsIcon />
          </span>
        </IntroductionLinkWrapper>

        <IntroductionLinkWrapper onClick={() => scrollToSection("#about")}>
          <IntroductionLink>About me</IntroductionLink>
          <span>
            <UserIcon_2 />
          </span>
        </IntroductionLinkWrapper>
      </IntroductionLinksWrapper>
    </IntroductionContent>
  </IntroductionWrapper>
)

export default IntroductionHeaderSection
