import React from "react"
import {
  FooterWrapper,
  FooterTitle,
  DirectorLink,
  LicenseRights,
} from "./Footer.styles"
import GithubIcon from "./../../assets/images/icon_footer_github.svg"

const FooterComponent = props => (
  <FooterWrapper>
    <FooterTitle>
      Portfolio project - landing page &copy;2020. All rights reserved.
    </FooterTitle>
    <DirectorLink
      href="https://github.com/PatrickInFrontEnd"
      target="_blank"
      rel="noreferrer"
    >
      Site created by Patryk Płuciennik
      <GithubIcon />
    </DirectorLink>
    <LicenseRights href="./policies/license_rights.txt" download>
      License rights
    </LicenseRights>
  </FooterWrapper>
)
export default FooterComponent
