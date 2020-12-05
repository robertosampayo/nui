// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel, { consts } from "react-elastic-carousel";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";
import BannerButton from "../Buttons/bannerButton";
import styles from "./banner.module.scss";

export default function Banner() {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IconContext.Provider value={{ className: "arrowLeft" }}>
          <div>
            <VscChevronLeft />
          </div>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: "arrowRight" }}>
          <div>
            <VscChevronRight />
          </div>
        </IconContext.Provider>
      );
    return (
      <a onClick={onClick} disabled={isEdge} className={styles.banner__arrows}>
        {pointer}
      </a>
    );
  };

  return (
    <div className={styles.banner}>
      <div className={styles.banner__title}>
        <p>Nos encantan las bodas únicas, las que hablan de Vos!</p>

        <BannerButton>Conocé lo que hacemos</BannerButton>
      </div>

      <div className={styles.banner__title__desktop}>
        <h1>Nos encantan las bodas únicas, las que hablan de Vos!</h1>
      </div>

      <Carousel
        itemsToShow={1}
        pagination={false}
        showArrows={true}
        renderArrow={myArrow}
      >
        <div className={`${styles.banner__slide} ${styles.slide1}`}></div>
        <div className={`${styles.banner__slide} ${styles.slide2}`}></div>
        <div className={`${styles.banner__slide} ${styles.slide3}`}></div>
        <div className={`${styles.banner__slide} ${styles.slide4}`}></div>
      </Carousel>
    </div>
  );
}
