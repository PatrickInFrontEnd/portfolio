import React from "react"
import InvertedProjectsIcon from "../../../assets/images/icon_projects_inverted.svg"
import UserIcon2 from "../../../assets/images/icon_user_2.svg"
import { scrollToSection } from "../../../utils/scrollToSection"
import TriangleHeaderComponent from "../../TriangleHeader/TriangleHeader.component"
import {
  ContentHeader,
  ContentMiniHeader,
  ContentParagraph,
  IntroductionContent,
  IntroductionLink,
  IntroductionLinksWrapper,
  IntroductionLinkWrapper,
  IntroductionWrapper,
} from "./Introduction.styles"

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
            <UserIcon2 />
          </span>
        </IntroductionLinkWrapper>
      </IntroductionLinksWrapper>
    </IntroductionContent>
  </IntroductionWrapper>
)

export default IntroductionHeaderSection
