const sendEmail = require('../utilities/mailer');

module.exports.recieve_email = async(req,res)=>{
    try{
        const {name, email, company, phone, service, budget, timeline, message} =  req.body;
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
        res.status(200).json({success:true, message:"Email sent successfully"});
    }catch(error){
        console.log(error)
        res.status(500).json({succes:false, message:"Failed to send email"})
    }
}