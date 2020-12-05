import styles from "./services.module.scss";
import ButtonOne from "../../components/Buttons/oneButton";
import Slider from "../../components/Slider";

const Services = ({ items }) => {
  return (
    <section className={styles.home__services}>
      <h1>Nuestros Servicios</h1>

      <div className={styles.services__slider__desktop}>
        <Slider
          items={items}
          itemsToShow={2}
          showArrows={false}
          pagination={false}
          swipe={false}
        />
      </div>

      <div className={styles.services__slider__mobile}>
        <Slider
          items={items}
          itemsToShow={1}
          showArrows={false}
          pagination={true}
        />
      </div>

      <div className={styles.home__services__more__servies}>
        {/* <ButtonOne primary>MÁS SERVICIOS</ButtonOne> */}
      </div>
    </section>
  );
};

export default Services;
