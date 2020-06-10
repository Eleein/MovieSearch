import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { getMovies } from "./components/api/api";

function App() {
  const [movies, setMovies] = useState([]);

  async function showMovies(searchQuery) {
    const movies = await getMovies(searchQuery);
    setMovies(movies);
  }

  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <div>
            {movie.title} <img src={movie.poster} alt={movie.title} />
          </div>
        );
      })}
      Hello World
      <Header />
      <SearchInput showMovies={showMovies} />
    </div>
  );
}

export default App;
