import React from "react";

import Link from "../link";
import trackEvent from "../../utils/tracking";
import styles from "./buttons.module.scss";
import { restoreId } from "../../utils/utils";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";

const oneButton = ({
  children,
  route,
  pink,
  primary,
  noPadding,
  paddingBottom,
  regular,
  className,
  onClick,
  target,
  id,
  style,
}) => {
  return (
    <React.Fragment>
      <div
        className={`
        ${className ? className : ""} 
        ${styles.banner__title__box} ${styles.cta} 
        ${primary ? styles.banner__cta__pink : ""}  
        ${pink ? styles.pink : ""}
        ${noPadding ? styles.no__padding : ""}
         ${paddingBottom ? styles.padding__bottom : ""}
        `}
      >
        <Link
          className={`${styles.banner__cta} ${
            regular ? styles.cta__regular : ""
          }`}
          style={{ ...style }}
          id={`btn-${restoreId(id)}`}
          route={route}
          onClick={onClick}
          target={target}
          prefetch
        >
          {children}
          <IconContext.Provider value={{ className: "arrowCTA" }}>
            <div>
              <VscChevronRight />
            </div>
          </IconContext.Provider>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default oneButton;
