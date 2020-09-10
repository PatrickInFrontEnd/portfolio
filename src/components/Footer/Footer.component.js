import React from "react"
import {
  FooterWrapper,
  FooterTitle,
  DirectorLink,
  LicenseRights,
  BackToTopButtonWrapper,
  BackToTopButton,
} from "./Footer.styles"
import GithubIcon from "./../../assets/images/icon_footer_github.svg"
import { scrollToSection } from "./../../utils/scrollToSection"

const FooterComponent = props => (
  <FooterWrapper>
    <FooterTitle>
      Portfolio project - landing page &copy;2020. All rights reserved.
    </FooterTitle>
    <LicenseRights href="./policies/license_rights.txt" download>
      License rights
    </LicenseRights>
    <DirectorLink
      href="https://github.com/PatrickInFrontEnd"
      target="_blank"
      rel="noreferrer"
    >
      Site created by Patryk Płuciennik
      <GithubIcon />
    </DirectorLink>

    <BackToTopButtonWrapper
      onClick={() => scrollToSection("#introduction", 80)}
    >
      <BackToTopButton />
    </BackToTopButtonWrapper>
  </FooterWrapper>
)
export default FooterComponent
