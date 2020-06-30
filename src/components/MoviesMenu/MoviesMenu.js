import React from "react";
import styles from "./MoviesMenu.module.scss";
import {Movies} from "components/MoviesMenu/Movies/Movies";

export function MoviesMenu({ movies }) {
  return (
    <div className={styles.subtitleAndMoviesLayout}>
      <h1 className={styles.subtitle}>
        Sharing a few of our favorite movies
      </h1>
      <Movies movies={movies}/>
    </div>
  );
}
