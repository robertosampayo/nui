import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import styles from "./navbar.module.scss";
import SimpleLink from "../Buttons/simpleLink";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import MenuMobile from "../MenuMobile";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const HandleMenu = () => {
    setOpen({
      ...open,
      open: true,
    });
  };
  return (
    <>
      <MenuMobile open={open} />
      <div className={styles.navbar}>
        <div className={styles.container}>
          <SimpleLink route="/" id="nosotros">
            <img src="/images/svgs/logo.svg" className={styles.logo} />
          </SimpleLink>

          <div className={styles.menu}>
            <ul className={styles.links}>
              <li>
                <SimpleLink route="/#nosotros" id="nosotros">
                  NOSOTROS
                </SimpleLink>
              </li>
              <li>
                <SimpleLink route="/portafolio" id="portafolio">
                  PORTAFOLIO
                </SimpleLink>
              </li>
              <li>
                <SimpleLink route="/alquileres" id="servicios">
                  ALQUILERES
                </SimpleLink>
              </li>
              <li>
                <SimpleLink route="/detalles" id="servicios">
                  DETALLES
                </SimpleLink>
              </li>
              <li>
                <SimpleLink route="/#contacto" id="contacto">
                  CONTACTO
                </SimpleLink>
              </li>
            </ul>
            <ul className={styles.social}>
              <li>
                <IconContext.Provider value={{ size: "20px" }}>
                  <div>
                    <a href='https://www.facebook.com/eventos.nui' target='_blank'><CgFacebook /></a>
                  </div>
                </IconContext.Provider>
              </li>
              {/* <li>
                <IconContext.Provider value={{ size: "20px" }}>
                  <div>
                    <VscTwitter />
                  </div>
                </IconContext.Provider>
              </li> */}
              <li>
                <IconContext.Provider value={{ size: "20px" }}>
                  <div>
                  <a href='https://instagram.com/eventos.nui?igshid=w3jyadalzsh8' target='_blank'><SiInstagram /></a>
                  </div>
                </IconContext.Provider>
              </li>
              {/* <li>
                <IconContext.Provider value={{ size: "20px" }}>
                  <div>
                    <FaPinterestP />
                  </div>
                </IconContext.Provider>
              </li> */}
            </ul>
          </div>
          <div
            className={styles.navbar__menuicon__container}
            onClick={() => HandleMenu()}
          >
            <IconContext.Provider
              value={{ className: styles.navbar__menuicon }}
            >
              <div>
                <RiMenu3Line />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
