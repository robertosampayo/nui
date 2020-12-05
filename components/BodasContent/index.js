import Nav from "../NavBar";
import Footer from "../Footer";
import Portfolios from "../Portafolios";
import styles from "./bodasContent.module.scss";
import BannerDetail from "../BannerDetail";

export default function BodasContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          title=""
          subtitle="Bodas y recepciones"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus."
          seccion="servicios"
        />

        <Portfolios />
      </main>

      <Footer />
    </div>
  );
}
