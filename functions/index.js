const {onRequest} = require("firebase-functions/v2/https");
const sgMail = require("@sendgrid/mail");

const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  throw new Error("SendGrid API key is not set in environment variables.");
}

sgMail.setApiKey(sendgridApiKey);

exports.sendEmail = onRequest(async (req, res) => {
  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    res.status(400).send("All fields are required.");
    return;
  }

  const msg = {
    to: "info@dreamingreen.org",
    from: "noreply@yourdomain.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You've received a new message:

      Name: ${name}
      Email: ${email}

      Message:
      ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
    res.status(200).send(
        "Message sent successfully!",
    );
  } catch (error) {
    console.error(
        "Error sending email:",
      error.response ? error.response.body : error.message,
    );
    res.status(500).send(
        "Failed to send message. Please try again.",
    );
  }
});
