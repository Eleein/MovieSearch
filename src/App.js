import React, { useState } from "react";
import "./styles/global.scss";
import { Header } from "./components/Header/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { getMovies } from "./components/api/api";
import { MoviesMenu } from "components/MoviesMenu/MoviesMenu";

function App() {
  const [movies, setMovies] = useState([]);

  async function showMovies(searchQuery) {
    const movies = await getMovies(searchQuery);
    setMovies(movies);
  }

  return (
    <div className="App">
      <Header />
      <SearchInput showMovies={showMovies} />
      <MoviesMenu movies={movies} />
    </div>
  );
}

export default App;
