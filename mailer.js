const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {

  const { name, email, phone, message } = req.body;

  constentHTML = `
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
    port: 26,
    secure: false,
    auth: {
      user: 'info@nuieventos.com',
      pass: 'Elartemegusta23.'
    },
    tls: {
      rejectUnauthorized: false
    }

  });

  const info = await transporter.sendMail({
    from: "'Nui Eventos <info@nuieventos.com>'",
    to: 'fazttech@gmail.com',
    subject: 'Website contact form',
    text: 'Hello world'

  });


  res.send('received');

});

module.exports = router;
