import styles from "./follow.module.scss";
import SliderFollow from "../../components/SliderFollow";

const Follow = () => {
  return (
    <section className={styles.home__follow}>
      <h1>Seguínos</h1>
      <div className={styles.follow__slider__desktop}>
        <SliderFollow itemsToShow={3} showArrows={false} pagination={false} />
      </div>

      <div className={styles.follow__slider__mobile}>
        <SliderFollow itemsToShow={1} showArrows={false} pagination={true} />
      </div>
    </section>
  );
};

export default Follow;
