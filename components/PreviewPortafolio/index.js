import styles from "./preview.module.scss";
import ButtonOne from "../Buttons/oneButton";

export default function PreviewPortafolio({
  position = "left",
  image = "",
  title = "",
  subtitle = "",
  text = "",
}) {
  return (
    <section className={styles.preview__portafolio}>
      <div>
        <div
          className={`
          ${styles.preview__content}
          ${position === "left" ? styles.left : ""}
          ${position === "right" ? styles.right : ""}
          
          `}
        >
          <h3>{subtitle}</h3>
          <div className={styles.img__container}>
            <img src={image} />
          </div>
          <div className={styles.preview__content__text}>
            <h4>{title}</h4>
            <p>{text}</p>
            <ButtonOne noPadding pink>
              CONOCE MÁS
            </ButtonOne>
          </div>
        </div>
      </div>
    </section>
  );
}
