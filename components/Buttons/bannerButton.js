import React from "react";

import Link from "../Link";
import trackEvent from "../../utils/tracking";
import { restoreId } from "../../utils/utils";
import styles from "./stylesBannerButton.module.scss";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Button = ({
  children,
  route,
  chevron,
  color,
  textColor,
  primary,
  secondary,
  terciary,
  disabled,
  onClick,
  target,
  id,
  fullWidth,
  style,
  dataCy,
}) => {
  // Track clicks if there's no custom onClick event
  onClick =
    onClick ||
    (() => {
      trackEvent("CTA", "Click", `${children}`);
    });

  return (
    <React.Fragment>
      <div className={styles.banner__title__box}>
        <Link
          className={styles.banner__cta}
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

export default Button;
