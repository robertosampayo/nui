// import { Swiper, SwiperSlide } from 'swiper/react';
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

  const handleSubmit = () => {
    sendMail({
      name: "robert",
      email: "roberto.sanchez@egoargentina.com",
      text: "Consulta de evento",
    });
  };

  const onChangeRecaptcha = (value) => {
    console.log("Captcha value:", value);

    // handleSubmit();
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
          <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Nombre" />
            <input placeholder="E-mail" />
            <textarea placeholder="Consulta" />

            <SubmitForm primary value="CONSULTAR">
              CONSULTAR
            </SubmitForm>

            <ReCAPTCHA
              sitekey="Your client site key"
              onChange={onChangeRecaptcha}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
