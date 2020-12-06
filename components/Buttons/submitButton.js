import React from "react";
import styles from "./buttons.module.scss";
import { restoreId } from "../../utils/utils";
import { VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";

const submitButton = ({
  children,
  pink,
  primary,
  noPadding,
  paddingBottom,
  paddingBottom50,
  regular,
  className,
  onClick,
  target,
  id,
  type = "submit",
  value = "",
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
         ${paddingBottom50 ? styles.padding__bottom50 : ""}
        `}
      >
        <button
          className={`${styles.banner__cta} ${
            regular ? styles.cta__regular : ""
          }`}
          style={{ ...style }}
          id={`btn-${restoreId(id)}`}
          onClick={onClick}
          target={target}
          type={type}
          value={value}
        >
          {children}
          <IconContext.Provider value={{ className: "arrowCTA" }}>
            <div>
              <VscChevronRight />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </React.Fragment>
  );
};

export default submitButton;
