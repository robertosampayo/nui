import styles from "./portafolio.module.scss";
import ButtonOne from "../Buttons/oneButton";

export default function Portafolio() {
  return (
    <section className={styles.home__portfolio} id="portafolio">
      <div className={styles.home__portafolio__container}>
        <div className={styles.portafolio__content__container}>
          <img src="/images/boda.png" />

          <div className={styles.portafolio__content}>
            <h1>Portafolio</h1>
            <p className="text__section">
              Entendemos lo importante que es para vos que cada detalle cuente
              tu historia, que cada una de tus ideas se pueda materializar y que
              ese día sea único, disfrutable e inolvidable.
            </p>

            <ul className={styles.home__portafolio__links}>
              <ButtonOne
                route="/portafolio/bodas"
                noPadding
                regular
                paddingBottom
              >
                Bodas y recepciones
              </ButtonOne>
              <ButtonOne
                route="/portafolio/fiestas-de-15"
                noPadding
                regular
                paddingBottom
              >
                Fiestas de 15
              </ButtonOne>
              <ButtonOne route="/portafolio/festeja-todo" noPadding regular paddingBottom>
                Festejá todo!
              </ButtonOne>
              <ButtonOne
                route="/portafolio/momentos-importantes"
                noPadding
                regular
                paddingBottom
              >
                Momentos importantes
              </ButtonOne>
            </ul>
            <div className={styles.button__container}>
              <ButtonOne route="/portafolio" primary>
                CONOCÉ MÁS
              </ButtonOne>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
