// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from "react-elastic-carousel";
import styles from "./sliderFollow.module.scss";
import utils from "../../utils/utils.module.scss";

export default function Slider({
  itemsToShow = 1,
  showArrows = true,
  pagination = false,
}) {
  return (
    <div className={styles.slider}>
      <Carousel
        itemsToShow={itemsToShow}
        pagination={pagination}
        showArrows={showArrows}
        itemPadding={[0, 20]}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div
              className={`${utils.flexbox} ${utils.row} ${utils.pagination}`}
            >
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <div
                    key={page}
                    className={`${utils.dot} ${
                      isActivePage ? utils.active : ""
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
        <div className={styles.img__container}>
          <img src="/images/follow1.png" />
        </div>
        <div className={styles.img__container}>
          <img src="/images/follow2.png" />
        </div>
        <div className={styles.img__container}>
          <img src="/images/follow3.png" />
        </div>
      </Carousel>
    </div>
  );
}
