import Nav from "../NavBar";
import Banner from "../Banner";
import Portafolio from "../Portafolio";
import Contact from "../ContactForm";
import Footer from "../Footer";
import About from "../AboutUs";
import Services from "../Services";
import Follow from "../Follow";
import { services } from "../../utils/services";

export default function Home() {
  return (
    <div className="home">
      <Nav />

      <main>
        <Banner />
        <About />
        <Portafolio />
        <Services items={services} />

        {/* <section className="home__opinions">
          <h1>Opiniones</h1>
        </section> */}

        <Follow />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
