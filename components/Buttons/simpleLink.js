import React from "react";

import Link from "../Link";
import styles from "./simpleLink.module.scss";
import { restoreId } from "../../utils/utils";

const SimpleLink = ({ children, route, id, onClick }) => {
  return (
    <React.Fragment>
      <div className={`${styles.simple__link}`} onClick={onClick}>
        <Link className={``} id={`btn-${restoreId(id)}`} route={route} prefetch>
          {children}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SimpleLink;
