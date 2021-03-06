import React from "react";
React.useLayoutEffect = React.useEffect;
import Nav from "../NavBar";
import Footer from "../Footer";
import Services from "../Services";
import styles from "./detallesContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Contact from "../ContactForm";
import Portfolios from "../Portafolios";
import { portafolios as items } from "../../utils/portafolios";

export default function DetallesContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle=""
          title="Detalles"
          text="Productos personalizados que suman a la hora decorar tu evento"
          seccion="detalles"
        />
        <Gallery photos={photos} />
        <Portfolios items={items} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
