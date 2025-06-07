import React, { useEffect, useState } from "react"
import dateLib from "../../utils/date"
import GithubIcon from "./../../assets/images/icon_footer_github.svg"
import { scrollToSection } from "./../../utils/scrollToSection"
import {
  BackToTopButton,
  BackToTopButtonWrapper,
  DirectorLink,
  FooterTitle,
  FooterWrapper,
  LicenseRights,
} from "./Footer.styles"

const FooterComponent = props => {
  const [year, setYear] = useState(dateLib.getCurrentYear)

  useEffect(() => {
    setYear(dateLib.getCurrentYear())
  }, [])

  return (
    <FooterWrapper>
      <FooterTitle>
        Portfolio project - landing page &copy;{year}. All rights reserved.
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

      <BackToTopButtonWrapper onClick={() => scrollToSection("#", 80)}>
        <BackToTopButton />
      </BackToTopButtonWrapper>
    </FooterWrapper>
  )
}
export default FooterComponent
