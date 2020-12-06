const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "jrobertosampayo@gmail.com",
    refreshToken: "",
    accessToken: "",
    clientId:
      "21964235098-5toshv8fcg6psj3d3vvk9dr25fv0sc9b.apps.googleusercontent.com",
    clientSecret: "EI3f6PoMgV0ptOjexNUJEI--",
  },
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "roberto.sanchez@egoargentina.com",
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
