// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel, { consts } from "react-elastic-carousel";
import ButtonOne from "../Buttons/oneButton";
import styles from "./sliderPortfolio.module.scss";
import utils from "../../utils/utils.module.scss";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";

export default function SliderOurPortfolio({
  itemsToShow = 1,
  showArrows = true,
  pagination = false,
}) {
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
      <a
        onClick={onClick}
        disabled={isEdge}
        className={styles.services__arrows}
      >
        {pointer}
      </a>
    );
  };

  return (
    <div className={`${styles.slider}`}>
      <Carousel
        itemsToShow={itemsToShow}
        pagination={pagination}
        showArrows={showArrows}
        renderArrow={myArrow}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div
              className={`${utils.flexbox} ${utils.row} ${styles.pagination}`}
            >
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <div
                    key={page}
                    className={`${styles.dot} ${
                      isActivePage ? styles.active : ""
                    }`}
                    active={`${isActivePage.toString()}`}
                    onClick={() => {
                      onClick(page);
                    }}
                  ></div>
                );
              })}
            </div>
          );
        }}
      >
        <div className={styles.home__services__card}>
          <img src="/images/portafolio/bodas.jpg" />
          <h2>Bodas y recepciones</h2>
          <p className={styles.text__section}></p>
          <ButtonOne>CONOCÉ MÁS</ButtonOne>
        </div>
        <div className={styles.home__services__card}>
          <img src="/images/portafolio/15anios.jpg" />
          <h2>Cumpleaños de 15</h2>
          <p className={styles.text__section}></p>
          <ButtonOne>CONOCÉ MÁS</ButtonOne>
        </div>

        <div className={styles.home__services__card}>
          <img src="/images/portafolio/festejatodo.png" />
          <h2>Festejá todo</h2>
          <p className={styles.text__section}></p>
          <ButtonOne>CONOCÉ MÁS</ButtonOne>
        </div>

        <div className={styles.home__services__card}>
          <img src="/images/portafolio/momentos-importantes.jpg" />
          <h2>Momentos importantes</h2>
          <p className={styles.text__section}></p>
          <ButtonOne>CONOCÉ MÁS</ButtonOne>
        </div>
      </Carousel>
    </div>
  );
}
