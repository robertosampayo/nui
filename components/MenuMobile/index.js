// import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import styles from "./menu.module.scss";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { IconContext } from "react-icons";
import SimpleLink from "../Buttons/simpleLink";

export default function MenuMobile({ open }) {
  const [state, setstate] = useState(open);

  useEffect(() => {
    setstate(open);
  }, [open]);

  const handleClose = () => {
    setstate(false);
  };

  return (
    <>
      {state !== false && (
        <div className={styles.menu__mobile}>
          <span className={styles.close} onClick={() => handleClose()}>
            <IconContext.Provider value={{ size: "45px", color: "white" }}>
              <div>
                <VscClose />
              </div>
            </IconContext.Provider>
          </span>

          <ul className={styles.links}>
            <li>
              <h1>NUI</h1>
            </li>
            <li>
              <SimpleLink route="/nosotros" id="nosotros">
                Nosotros
              </SimpleLink>
            </li>
            <li>
              <SimpleLink route="/portafolio" id="portafolio">
                Portafolio
              </SimpleLink>
            </li>
            <li>
              <SimpleLink route="/servicios" id="servicios">
                Servicios
              </SimpleLink>
            </li>
            <li>
              <SimpleLink route="/contacto" id="contacto">
                Escribinos!
              </SimpleLink>
            </li>
          </ul>
          <hr></hr>
          <ul className={styles.social}>
            <li>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <CgFacebook />
                </div>
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <VscTwitter />
                </div>
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <SiInstagram />
                </div>
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <FaPinterestP />
                </div>
              </IconContext.Provider>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
