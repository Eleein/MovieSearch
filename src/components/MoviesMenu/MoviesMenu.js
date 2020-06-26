import React from "react";
import styles from "./MoviesMenu.module.scss";

export function MoviesMenu({ movies }) {

  return (
    <div className={styles.subtitleAndMoviesLayout}>
      <span className={styles.subtitle}>
        Sharing a few of our favorite movies
      </span>
      <div className={styles.moviesLayout}>
        <ul className={styles.moviesList}>
          {movies.map(({ title, poster, year }) => {
            return (
              <li className={styles.movieItem}>
                <span className={styles.movieTitle}>{title} </span>{" "}
                <img className={styles.moviePic} src={poster} alt={title} />
                <span>{year}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
