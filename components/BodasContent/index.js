import Nav from "../NavBar";
import Footer from "../Footer";
import Portfolios from "../Portafolios";
import styles from "./bodasContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { portafolios } from "../../utils/portafolios";

export default function BodasContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle="Boda"
          title="Belen y Ezequiel"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus."
          seccion="boda1"
        />
        <Gallery photos={photos} />

        <Portfolios
          items={portafolios.filter(function (item) {
            return [0].indexOf(item.id) === -1;
          })}
        />
      </main>

      <Footer />
    </div>
  );
}
