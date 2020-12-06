import Nav from "../NavBar";
import Footer from "../Footer";
import Portfolios from "../Portafolios";
import styles from "./sofiContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { portafolios } from "../../utils/portafolios";

export default function SofiContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle="Fiesta de 15"
          title="Sofi"
          text=""
          seccion="sofi"
        />
        <Gallery photos={photos} />

        <Portfolios
          items={portafolios.filter(function (item) {
            return [1].indexOf(item.id) === -1;
          })}
        />
      </main>

      <Footer />
    </div>
  );
}
