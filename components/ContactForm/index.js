// import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useEffect } from "react";
import styles from "./contactForm.module.scss";
import utils from "../../utils/utils.module.scss";
import SubmitForm from "../../components/Buttons/submitButton";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { IconContext } from "react-icons";
import useSubmitForm from "../../hooks/useSubmitForm";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const { sendMail, mail } = useSubmitForm();
  const [state, setstate] = useState({
    fields: {},
    errors: {},
    success: false,
  });
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    console.log(state);
    sendMail({
      name: state.fields['name'],
      email: state.fields['mail'],
      text: state.fields['text'],
    });
  };

  const onChangeRecaptcha = (value) => {
    console.log("Captcha value:", value);

    // handleSubmit();
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    let fields = state.fields;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Nombre no puede estar vacio";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Nombre solo puede contener letras";
      }
    }

    //Email
    if (!fields["mail"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (fields["mail"] !== "") {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValidMail = re.test(String(fields["mail"]).toLowerCase());

      if (!isValidMail) {
        formIsValid = false;
        errors["mail"] = "Mail no valido";
      }
    }

    //Text
    if (!fields["text"]) {
      formIsValid = false;
      errors["text"] = "Consulta no puede estar vacio";
    }

    if (formIsValid && fields["name"] && fields["mail"] && fields["text"]) {
      handleSubmit();
      console.log("submited");
      setstate({
        ...state,
        fields: {},
        errors: {},
        success: true,
      });
    } else {
      setstate({
        ...state,
        errors: errors,
        success: false,
      });
    }

    return formIsValid;
  };

  return (
    <div className={styles.contact__container} id="contacto">
      <div className={styles.contact}>
        <h1>¡Escribínos!</h1>
        <div className={styles.contact__content}>
          <div className={styles.dashed}>
            <p>
              Si Tenes alguna duda de como trabajamos o si hay algo que nos
              quieras consultar, ¡escribinos!.
            </p>
            <hr />
            <div className={styles.contact__social}>
              <h3>Seguínos</h3>
              <ul>
                <li>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <CgFacebook />
                    </div>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <VscTwitter />
                    </div>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <SiInstagram />
                    </div>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <div>
                      <FaPinterestP />
                    </div>
                  </IconContext.Provider>
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validateForm();
            }}
          >
            <input
              placeholder="Nombre"
              onChange={(e) =>
                setstate((state) => ({
                  ...state,
                  fields: {
                    ...state.fields,
                    name: e.target.value,
                  },
                }))
              }
              value={state.fields["name"] || ""}
            />
            <input
              placeholder="E-mail"
              onChange={(e) =>
                setstate((state) => ({
                  ...state,
                  fields: {
                    ...state.fields,
                    mail: e.target.value,
                  },
                }))
              }
              value={state.fields["mail"] || ""}
            />
            <textarea
              placeholder="Consulta"
              onChange={(e) =>
                setstate((state) => ({
                  ...state,
                  fields: {
                    ...state.fields,
                    text: e.target.value,
                  },
                }))
              }
              value={state.fields["text"] || ""}
            />

            <SubmitForm primary value="CONSULTAR" />

            {/* 
            <ReCAPTCHA
              sitekey="6LfLw_sZAAAAAEPr6SS9NASHjafNgHs6rE9qExPA"
              onChange={onChangeRecaptcha}
            /> */}
            <div className={styles.success}>
              <p>{state.success ? "Menseaje enviado!" : ""}</p>
            </div>
            <div className={styles.errors}>
              <p>{state.errors?.name ? state.errors?.name : ""}</p>
              <p>{state.errors?.mail ? state.errors?.mail : ""}</p>
              <p>{state.errors?.text ? state.errors?.text : ""}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
