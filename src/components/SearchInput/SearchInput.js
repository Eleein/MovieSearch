import React, { useState } from "react";
import styles from "./SearchInput.module.scss";

export function SearchInput({ showMovies }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleQuery(event) {
    event.preventDefault();
    showMovies(searchQuery);
  }
  return (
    <div className={styles.formLayout}>
      <form className={styles.form} onSubmit={handleQuery}>
        <input
          className={styles.input}
          type="text"
          value={searchQuery}
          onChange={({ target: { value } }) => setSearchQuery(value)}
        />

        <button
          className={styles.searchBtn}
          type="button"
          onClick={handleQuery}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}
