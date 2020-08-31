import React from "react"
import ContactIcon from "./../../../assets/images/icon_phone.svg"
import SectionHeader from "./../../SectionHeader/SectionHeader.component"
import ContactIconsComponent from "./ContactIcons.component"
import ContactFormComponent from "./ContactFormComponent.component"

const ContactSectionContainer = props => (
  <>
    <SectionHeader id="contact">
      Contact me
      <ContactIcon
        style={{
          width: "50px",
          height: "50px",
          right: "-55%",
          top: "50%",

          transform: "translate(0, -50%)",
        }}
      />
    </SectionHeader>
    <ContactIconsComponent />
    <ContactFormComponent />
  </>
)
export default ContactSectionContainer
