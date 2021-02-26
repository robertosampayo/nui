const nodemailer = require("nodemailer");

const handler = async (req, res) => {

  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body);

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
  

    console.log("success ", info);
  } else {
    // Handle any other HTTP method
  }

    // const { name, mail, text } = req.body;
    res.statusCode = 200
    res.json({'body':req.body,'status': 'ok'});
    // const constentHTML = `
    //   <h1>User Information</h1>
    //   <ul>
    //     <li>Username: ${req?.body?.name || ''}</li>
    //     <li>User Email: ${req?.body?.mail || ''}</li>
  
    //   </ul>
    //   <p>${req?.body?.text || ''}</p>
    
    // `;
    // const transporter = nodemailer.createTransport({
    //   host: 'smtpout.secureserver.net',
    //   port: 465,
    //   secure: true,
    //   secureConnection: false,
    //   auth: {
    //     user: 'info@nuieventos.com',
    //     pass: 'Elartemegusta23.'
    //   },
    //   requireTLS:true,
    //   debug: true,
    // //   tls: {
    // //     rejectUnauthorized: false
    // //   }
  
    // });

    // const mailOptions = {
    //     from: "'Nui Eventos <info@nuieventos.com>'",
    //     to: `${req?.body?.mail || 'no mail'}`,
    //     subject: 'Website contact form',
    //     text: constentHTML
    
    //   }
  

    //  const info = await transporter.sendMail(mailOptions);
  
    // console.log('Message sent', info);
      
  }

  export default handler;