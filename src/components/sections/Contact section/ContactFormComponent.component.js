import React from "react"
import {
  ContactFormWrapper,
  LeftBarWrapper,
  CirclesIcon,
  Header,
  Form,
  InputWrapper,
  Label,
  Input,
  MessageInput,
  PersonMessageIcon,
  SubmitButton,
  Border,
} from "./Contact.styles"

const ContactFormContainer = props => (
  <ContactFormWrapper>
    <LeftBarWrapper>
      <Header>Send me a message</Header>
      <PersonMessageIcon />
    </LeftBarWrapper>
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputWrapper>
        <Label>Name / Company name</Label>
        <Input type="text" name="name" />
        <Border />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input type="email" name="email" />
        <Border />
      </InputWrapper>
      <InputWrapper>
        <Label>Message</Label>
        <MessageInput name="message" />
        <Border id="message_border" />
      </InputWrapper>
      <SubmitButton type="submit">Submit !</SubmitButton>
    </Form>
    <CirclesIcon />
    <CirclesIcon />
  </ContactFormWrapper>
)

export default ContactFormContainer
