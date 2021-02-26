const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const nodemailer = require("nodemailer");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", async (req, res) => {
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
  


  });

  

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
