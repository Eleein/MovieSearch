import React from "react";
import styles from "./Movies.module.scss";

export function Movies({ movies }) {
  return (
    <div className={styles.moviesLayout}>
      <ul className={styles.moviesList}>
        {movies.map(({ title, poster, year }) => {
          return (
            <li className={styles.movieItem}>
              <span className={styles.movieTitle}>{title} </span>
              <img className={styles.moviePic} src={poster} alt={title} />
              <span>{year}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
