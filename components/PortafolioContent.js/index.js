import Nav from "../NavBar";
import Footer from "../Footer";
import Services from "../Services";
import styles from "./portafolioContent.module.scss";
import PreviewPortafolio from "../PreviewPortafolio";
import BannerDetail from "../BannerDetail";
import { services } from "../../utils/services";

export default function PortafolioContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          title="Portafolio"
          subtitle="Nuestro"
          text=""
          seccion="portafolio"
        />

        <PreviewPortafolio
          position="left"
          image="images/portafolio/belen-eze2.png"
          subtitle="TU DIA ESPECIAL"
          title="Boda - Belen y Ezequiel"
          text=""
          route="/portafolio/eve-ezequiel"
        />

        <PreviewPortafolio
          position="right"
          image="images/portafolio/15anios-main.jpg"
          subtitle="FIESTAS INCREÍBLES"
          title="Fiestas de 15"
          route="/portafolio/fiesta-sofi"
        />

        <PreviewPortafolio
          position="left"
          image="images/portafolio/festejatodo.png"
          subtitle="GRANDES Y PEQUEÑOS"
          title="Festejá todo!"
          route="/"
        />

        <PreviewPortafolio
          position="right"
          image="images/portafolio/momentos.png"
          subtitle="RENOVATE"
          title="Momentos importantes"
          route="/"
        />

        <Services items={services} />
      </main>

      <Footer />
    </div>
  );
}
