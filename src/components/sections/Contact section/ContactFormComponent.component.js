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
      netlify-honeypot="bot-field"
      action="/success"
    >
      <InputWrapper>
        <Label>Name / Company name</Label>
        <Input type="text" name="name" required />
        <Border />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input type="email" name="email" required />
        <Border />
      </InputWrapper>
      <InputWrapper>
        <Label>Message</Label>
        <MessageInput name="message" required />
        <Border id="message_border" />
      </InputWrapper>
      <SubmitButton type="submit">Submit !</SubmitButton>
    </Form>
    <CirclesIcon />
    <CirclesIcon />
  </ContactFormWrapper>
)

export default ContactFormContainer
