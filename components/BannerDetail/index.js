import styles from "./bannerDetail.module.scss";

export default function BannerDetail({
  title = "",
  subtitle = "",
  text = "",
  seccion = "",
}) {
  return (
    <section className={styles.banner__detail}>
      <img src="/images/svgs/planta.svg" className={styles.planta} />
      <div
        className={`${styles.img__content} 
      ${seccion === "servicios" ? styles.img__servicios : ""}
      ${seccion === "portafolio" ? styles.img__portafolio : ""}
      `}
      ></div>

      <div className={styles.know__more}>
        <div className={styles.know__more__content}>
          <h4>{subtitle}</h4>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        <div className={`${styles.know__more__line}`}>
          <p>CONOCE MÁS</p>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
}
