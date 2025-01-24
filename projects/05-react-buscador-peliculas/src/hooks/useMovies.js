
import responseMovies from "../mocks/results.json";
// import withOutResults from './mocks/error-api.json'

export function useMovies() {
  const movies = responseMovies.Search;

  // Buena practica para poder cambiar de api o de
  // estructura de datos sin tener que modificar todos
  // los componentes que lo utilicen
  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
    };
  });

  return ({movies: mappedMovies})
}