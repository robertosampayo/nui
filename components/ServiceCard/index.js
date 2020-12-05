import styles from "./serviceCard.module.scss";
import ButtonOne from "../../components/Buttons/oneButton";

const ServiceCard = ({ title = "", image = "", text = "" }) => {
  return (
    <div className={styles.service__card}>
      <img src="/images/slider3.png" />
      <h2>Bodas y recepciones</h2>
      <p className={styles.text__section}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes.
      </p>
      <ButtonOne>CONOCÉ MÁS</ButtonOne>
    </div>
  );
};

export default ServiceCard;
