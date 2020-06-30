import axios from "axios";

export async function getMovies(searchQuery) {
  const movies = await axios.get(
    `${process.env.REACT_APP_MOVIE_API}?apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`
  );
  return movies.data.Search.map((film) => {
    return { title: film.Title, poster: film.Poster, year: film.Year };
  });
}
