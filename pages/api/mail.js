const nodemailer = require("nodemailer");

const handler = async (req, res) => {

  if (req.method === 'POST') {
    // Process a POST request

    const { email = "", name = "", text = "" } = req.body;

    const constentHTML = `
      <h1>Consulta</h1>
      <ul>
        <li>Nombre: ${name}</li>
        <li>Email: ${email}</li>
  
      </ul>
      <p>${name} consulta lo siguiente:<br><br> ${text}</p>
    
    `;
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      secureConnection: false,
      auth: {
        user: 'info@nuieventos.com',
        pass: 'Elartemegusta23.'
      },
      requireTLS:true,
      debug: true,

  
    });

    const mailOptions = {
        from: "'Nui Eventos <info@nuieventos.com>'",
        to: `${email}`,
        subject: 'Website contact form',
        html: constentHTML
    
      }
  

     const info = await transporter.sendMail(mailOptions);
     res.statusCode = 200

  } else {
    // Handle any other HTTP method
    res.statusCode = 404

  }


      
  }

  export default handler;