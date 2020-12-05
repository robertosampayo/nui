import React from "react";

import colors from "../../styles/colors";
import Link from "../link";
import trackEvent from "../../utils/tracking";
import { restoreId } from "../../utils/utils";
import styles from "./buttons.module.scss";

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
      <Link
        className={styles.Button}
        style={{ ...style }}
        id={`btn-${restoreId(id)}`}
        route={route}
        onClick={onClick}
        target={target}
        route={route}
        prefetch
      >
        {children}
      </Link>
    </React.Fragment>
  );
};

export default Button;
