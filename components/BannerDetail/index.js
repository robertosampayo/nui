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
      ${seccion === "boda1" ? styles.img__boda1 : ""}
      ${seccion === "boda2" ? styles.img__boda2 : ""}
      ${seccion === "boda3" ? styles.img__boda3 : ""}
      ${seccion === "boda4" ? styles.img__boda4 : ""}
      ${seccion === "detalles" ? styles.img__detalles : ""}
      ${seccion === "alquileres" ? styles.img__alquileres : ""}
      ${seccion === "sofi" ? styles.img__sofi : ""}
      ${seccion === "festeja-todo" ? styles.img__festeja__todo : ""}
      ${seccion === "momentos" ? styles.img__momentos : ""}


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
