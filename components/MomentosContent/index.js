import Nav from "../NavBar";
import Footer from "../Footer";
import styles from "./momentosContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Contact from "../ContactForm";
import Portfolios from "../Portafolios";
import { portafolios as items } from "../../utils/portafolios";

export default function MomentosContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle=""
          title="Momentos Importantes"
          text=""
          seccion="momentos"
        />
        <Gallery photos={photos} />
        <Portfolios
          items={items.filter(function (item) {
            return [3].indexOf(item.id) === -1;
          })}
        />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
