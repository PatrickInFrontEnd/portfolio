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
  ErrorMessage,
} from "./Contact.styles"
import { useFormik } from "formik"
import axios from "axios"
import { navigate } from "@reach/router"

const ContactFormContainer = props => {
  const CLOUD_URL =
    "https://us-central1-portfolio-forms-b1509.cloudfunctions.net/sendEmail"

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post(CLOUD_URL, values)
      .then(res => {
        navigate("/form-success")
      })
      .catch(err => {
        console.log(err)
        navigate("/form-failed")
      })
  }

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = "Required"
    }

    if (!values.message) {
      errors.message = "Required"
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }
    return errors
  }

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit,
    validate,
    validateOnChange: true,
  })

  return (
    <ContactFormWrapper>
      <Header>Send me a message</Header>
      <LeftBarWrapper>
        <PersonMessageIcon />
      </LeftBarWrapper>
      <Form name="contact" onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="name">Name / Company name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            maxLength="50"
          />
          <Border />
          {errors.name && touched.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Border />
          {errors.email && touched.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message_textarea">Message</Label>
          <MessageInput
            name="message"
            id="message_textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Border id="message_border" />
          {errors.message && touched.message && (
            <ErrorMessage>{errors.message}</ErrorMessage>
          )}
        </InputWrapper>
        <SubmitButton type="submit" disabled={isSubmitting}>
          Submit !
        </SubmitButton>
      </Form>
      <CirclesIcon />
      <CirclesIcon />
    </ContactFormWrapper>
  )
}

export default ContactFormContainer

/* NOTE: FORMIK

<Formik
      initialValues={}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values))
      }}
      validate={
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        
      )}
    </Formik>
*/

/*  */

// API URL http://localhost:5001/portfolio-forms-b1509/us-central1/sendEmail
