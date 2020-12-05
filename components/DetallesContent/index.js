import Nav from "../NavBar";
import Footer from "../Footer";
import Services from "../Services";
import styles from "./detallesContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Contact from "../ContactForm";
import Portfolios from "../Portafolios";

export default function DetallesContent() {
  const services = [
    {
      title: "Detalles",
      text: "Productos personalizados que suman a la hora decorar tu evento.",
    },
  ];

  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle=""
          title="Detalles"
          text="Productos personalizados que suman a la hora decorar tu evento"
          seccion="portafolio"
        />
        <Gallery photos={photos} />
        <Portfolios />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
