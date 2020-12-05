import Nav from "../NavBar";
import Footer from "../Footer";
import Portfolios from "../Portafolios";
import styles from "./serviciosContent.module.scss";
import PreviewPortafolio from "../PreviewPortafolio";
import BannerDetail from "../BannerDetail";
import ServiceCard from "../ServiceCard";

export default function ServiciosContent() {
  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle="Nuestros"
          title="Servicios"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus."
          seccion="servicios"
        />

        <section className={styles.service__card__grid}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </section>

        <Portfolios />
      </main>

      <Footer />
    </div>
  );
}
