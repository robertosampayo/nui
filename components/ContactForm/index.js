// import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./contactForm.module.scss";
import utils from "../../utils/utils.module.scss";
import ButtonOne from "../../components/Buttons/oneButton";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ContactForm() {
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
          <form>
            <input placeholder="Nombre" />
            <input placeholder="E-mail" />
            <textarea placeholder="Consulta" />

            <ButtonOne primary>CONSULTAR</ButtonOne>
          </form>
        </div>
      </div>
    </div>
  );
}
