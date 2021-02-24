const nodemailer = require("nodemailer");

const handler = async (req, res) => {

    const { name, email, phone, message } = req.body;

    const constentHTML = `
      <h1>User Information</h1>
      <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>Phone ${phone}</li>
  
      </ul>
      <p>${message}</p>
    
    `;
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: false,
      auth: {
        user: 'info@nuieventos.com',
        pass: 'Elartemegusta23.'
      },
      tls: {
        rejectUnauthorized: false
      }
  
    });

    const mailOptions = {
        from: "'Nui Eventos <info@nuieventos.com>'",
        to: 'jrobertosampayo@gmail.com',
        subject: 'Website contact form',
        text: 'Hello world'
    
      }
  

     const info = await transporter.sendMail(mailOptions);
  
    console.log('Message sent', info);
  
    // res.send('received');
  }

  export default handler;