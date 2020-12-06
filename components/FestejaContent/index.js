import Nav from "../NavBar";
import Footer from "../Footer";
import Services from "../Services";
import styles from "./festejaContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Contact from "../ContactForm";
import Portfolios from "../Portafolios";
import { portafolios as items } from "../../utils/portafolios";

export default function FestejaContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle=""
          title="Festejá Todo"
          text=""
          seccion="festeja-todo"
        />
        <Gallery photos={photos} />
        <Portfolios
          items={items.filter(function (item) {
            return [2].indexOf(item.id) === -1;
          })}
        />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
