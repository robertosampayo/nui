import styles from "./about.module.scss";
import ButtonOne from "../../components/Buttons/oneButton";

const About = () => {
  return (
    <>
      <section className={`${styles.about}`} id="nosotros">
        <div className={`${styles.know__more}`}>
          <p>CONOCÉNOS</p>
          <div className="line"></div>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>
            <h2>¡Nos encantan los desafíos!</h2>
            <hr className={styles.pink__line}></hr>
          </div>

          <div className={styles.container__line}>
            <p className="text__section">
              Llevar el sueño a la realidad es lo que NUI quiere cumplir.
              <br></br>Y eso incluye todo tipo de novio y novia: aquellos que
              soñaron con ese día toda su vida, aquellos que sólo saben los que
              NO quieren y aquellos que no tienen ni idea de lo que quieren.{" "}
              <br></br>
              Los escuchamos, ideamos la propuesta y diseñamos juntos cada
              detalle por más simple o loco que sea. <br></br> <br></br>
              ¡Siempre todo personalizado! Porque estamos comprometidos a crear
              TU DIA ESPECIAL! Y #QueTodoquedeHermoso
            </p>
            {/* <ButtonOne className={styles.know__us}>MÁS</ButtonOne> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
