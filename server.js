const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const mailer = require("./mailer");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    const { email = "", name = "", text = "" } = req.body;

    console.log("success", email);
    // mailer({ email, name, text })
    //   .then(() => {
    //     console.log("success", email);
    //     res.send("success");
    //   })
    //   .catch((error) => {
    //     console.log("failed", error);
    //     res.send("badddd");
    //   });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
