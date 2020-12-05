import styles from "./portafolios.module.scss";
import ButtonOne from "../../components/Buttons/oneButton";
import SliderOurPortfolio from "../../components/SliderOurPortfolio";

const Portfolios = () => {
  return (
    <section className={styles.home__services}>
      <h1>Nuestro Portafolio</h1>

      <div className={styles.services__slider__desktop}>
        <SliderOurPortfolio
          itemsToShow={3}
          showArrows={true}
          pagination={false}
        />
      </div>

      <div className={styles.services__slider__mobile}>
        <SliderOurPortfolio
          itemsToShow={1}
          showArrows={false}
          pagination={true}
        />
      </div>

      <div className={styles.home__services__more__servies}>
        <ButtonOne primary>PORTAFOLIO</ButtonOne>
      </div>
    </section>
  );
};

export default Portfolios;
