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
    if (req.method === "OPTIONS") {
        return res.status(200).end();
      }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, service, budget, timeline, message } = req.body;

    const to = process.env.EMAIL_NAME;
    const subject = "New Contact Form Submission";
    const htmlContent = `
     <div style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
  
  <!-- Header Section -->
  <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; margin-bottom: 20px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
    <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
      📩
    </div>
    <h2 style="color: #2d3748; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
      New Contact Submission
    </h2>
    <div style="width: 60px; height: 3px; background: linear-gradient(45deg, #667eea, #764ba2); margin: 15px auto 0; border-radius: 2px;"></div>
  </div>

  <!-- Content Section -->
  <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
    
    <!-- Contact Details Grid -->
    <div style="display: grid; gap: 20px;">
      
      <!-- Name -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">👤 Full Name</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${name}</div>
      </div>

      <!-- Email -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #48bb78; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">✉️ Email Address</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${email}</div>
      </div>

      <!-- Phone -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #ed8936; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">📞 Phone Number</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${phone}</div>
      </div>

      <!-- Company -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #9f7aea; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">🏢 Company</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${company}</div>
      </div>

      <!-- Service -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #38b2ac; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">⚙️ Service Required</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${service}</div>
      </div>

      <!-- Budget -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #f56565; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">💰 Budget Range</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${budget}</div>
      </div>

      <!-- Timeline -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #4299e1; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">⏰ Project Timeline</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500;">${timeline}</div>
      </div>

      <!-- Message -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #ed64a6; transition: all 0.3s ease;">
        <div style="color: #4a5568; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">💬 Message</div>
        <div style="color: #2d3748; font-size: 16px; font-weight: 500; line-height: 1.6;">${message}</div>
      </div>

    </div>

    <!-- Footer -->
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
      <p style="margin: 0; font-size: 13px; color: #718096; font-weight: 500;">
        🌐 This message was sent from your website's contact form
      </p>
      <div style="margin-top: 10px; font-size: 11px; color: #a0aec0;">
        Received on ${new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>

  </div>
  
</div>
    `;

    await sendEmail(to, subject, htmlContent);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
