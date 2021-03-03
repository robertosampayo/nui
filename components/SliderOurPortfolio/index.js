// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel, { consts } from "react-elastic-carousel";
import ButtonOne from "../Buttons/oneButton";
import SimpleLink from "../Buttons/simpleLink";
import styles from "./sliderPortfolio.module.scss";
import utils from "../../utils/utils.module.scss";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";
import Link from "next/link";

export default function SliderOurPortfolio({
  itemsToShow = 1,
  showArrows = true,
  pagination = false,
  items = [],
  swipe = true,
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
        enableMouseSwipe={swipe}
        enableSwipe={swipe}
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
        {items?.map((item) => (

            <a key={item.id} href={item.route} className={styles.link}>
              <div className={styles.home__services__card}>
                <img src={item.image} />
                <h2>{item.title}</h2>
                <p className={styles.text__section}>{item.text}</p>
                <ButtonOne noPadding paddingBottom50>
                  CONOCÉ MÁS
                </ButtonOne>
              </div>
            </a>
       
        ))}
      </Carousel>
    </div>
  );
}
