// import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./footer.module.scss";
import utils from "../../utils/utils.module.scss";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { IconContext } from "react-icons";
import SimpleLink from "../Buttons/simpleLink";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <SimpleLink route="/" id="nosotros">
          <img src="/images/svgs/logo2.svg" className={styles.logo} />
        </SimpleLink>
        <ul className={styles.pages}>
          <li>
            <SimpleLink route="/#nosotros">NOSOTROS</SimpleLink>
          </li>
          <li>
            <SimpleLink route="/portafolio">PORTAFOLIO</SimpleLink>
          </li>
          <li>
            <SimpleLink route="/alquileres">ALQUILERES</SimpleLink>
          </li>
          <li>
            <SimpleLink route="/detalles">DETALLES</SimpleLink>
          </li>
          <li>
            <SimpleLink route="/#contacto">CONTACTO</SimpleLink>
          </li>
        </ul>

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

      <div className={styles.rights}>
        <p>Todos los derechos reservados. NUI 2020.</p>
      </div>
    </footer>
  );
}
