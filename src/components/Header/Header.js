import React from "react";
import styles from "./Header.module.scss";
import cx from "classnames";
export function Header() {
  return (
    <div className={cx(styles.headerStyles, styles.headerLayout)}>
      <h1 className={styles.pageTitle}>HOOKED</h1>
    </div>
  );
}
