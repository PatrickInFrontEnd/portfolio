const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")
const cors = require("cors")({ origin: true })

exports.sendEmail = functions.https.onRequest((request, response) => {
  const msg = {
    to: "patryk.pluciennik.job@gmail.com",
    from: "patrickinfrontend@gmail.com",
    subject: `New message from portfolio site - user : ${request.body.name} <${request.body.email}>`,
    text: request.body.message,
  }

  return cors(request, response, () => {
    sgMail.setApiKey(functions.config().sendgrid.key)

    sgMail.send(msg, false, (err, res) => {
      if (err) {
        response.sendStatus(500)
        console.log(err)
      } else {
        response.send(res)
      }
    })
  })
})
