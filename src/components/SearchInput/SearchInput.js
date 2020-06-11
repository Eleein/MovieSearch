import React, { useState } from "react";
import styles from "./SearchInput.module.scss";

export function SearchInput({ showMovies }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleQuery(event) {
    event.preventDefault();
    showMovies(searchQuery);
  }
  return (
    <form onSubmit={handleQuery}>
      <input
        type="text"
        placeholder="Search movie here"
        value={searchQuery}
        onChange={({ target:{value} }) => setSearchQuery(value)}
      />

      <button type="button" onClick={handleQuery}>
        SEARCH
      </button>
    </form>
  );
}
