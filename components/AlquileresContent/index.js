import Nav from "../NavBar";
import Footer from "../Footer";
import Services from "../Services";
import styles from "./alquileresContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Contact from "../ContactForm";
import Portfolios from "../Portafolios";

export default function AlquileresContent() {
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
          title="Alquileres"
          text="Encontrá todo lo que tenemos a disposición para decorar tu evento, preguntanos por diseños a medida."
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
