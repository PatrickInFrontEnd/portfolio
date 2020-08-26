import React from "react"
import {
  ContactTitle,
  ContactWrapper,
  Description,
  Media,
  SocialMediaWrapper,
} from "./Contact.styles"
import MailIcon from "./../../../assets/images/icon_mail.svg"
import LinkedInIcon from "./../../../assets/images/icon_linkedin.svg"
import GithubIcon from "./../../../assets/images/icon_footer_github.svg"

const ContactComponent = props => (
  <ContactWrapper>
    <ContactTitle>Contact with me</ContactTitle>
    <SocialMediaWrapper>
      <Media>
        <a href="mailto:patryk.pluciennik.job@gmail.com">
          <MailIcon />
        </a>
        <Description>patryk.pluciennik.job@gmail.com</Description>
      </Media>
      <Media>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/patryk-p%C5%82uciennik-a67176192/"
        >
          <LinkedInIcon />
        </a>
        <Description>LinkedIn profile</Description>
      </Media>
      <Media>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/PatrickInFrontEnd"
        >
          <GithubIcon />
        </a>
        <Description>Github profile</Description>
      </Media>
    </SocialMediaWrapper>
  </ContactWrapper>
)
export default ContactComponent
