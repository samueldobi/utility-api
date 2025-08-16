// api/sendmail.js
const sendEmail = require('../utilities/mailer');  

module.exports = async (req, res) => {
    // Cors
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, service, budget, timeline, message } = req.body;

    const to = process.env.EMAIL_NAME;
    const subject = "New Contact Form Submission";
    const htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await sendEmail(to, subject, htmlContent);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
