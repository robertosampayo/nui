import { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ButtonOne from "../Buttons/oneButton";
import styles from "./slider.module.scss";
import utils from "../../utils/utils.module.scss";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";

export default function Slider({
  itemsToShow = 1,
  showArrows = true,
  pagination = false,
  items = [],
  swipe = true,
}) {
  const [content] = useState(items);

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
        enableMouseSwipe={swipe}
        enableSwipe={swipe}
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
        {content?.map((item) => (
          <div key={item.id} className={styles.home__services__card}>
            <img src={`${item.image}`} />
            <h2>{item?.title}</h2>
            <p className={styles.text__section}>{item?.text}</p>
            <ButtonOne route={item.link}>CONOCÉ MÁS</ButtonOne>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
