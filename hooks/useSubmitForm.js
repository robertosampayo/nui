import React, { useState } from "react";

const useSubmitForm = () => {
  const [mail, setStateMail] = useState(false);

  const sendMail = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? setStateMail(true) : setStateMail(false);
    });
  };

  return { sendMail, mail };
};

export default useSubmitForm;
