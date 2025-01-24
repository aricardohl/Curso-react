/* eslint-disable react/prop-types */
function ListOfMovies ({  movies }) {
    return (
        <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <img src={movie.poster} alt={movie.title}/>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p>{movie.type}</p>
              </li>
            ))}
        </ul>
        )
}

function NoMoviesResult () { 
    return (
        <h3>No se encontraron peliculas para esta busqueda</h3>
    )
}

export function Movies ( { movies }) {
    const hasMovies = !movies?.lenght > 0

    return(
        hasMovies ? <ListOfMovies movies={movies} />
        : <NoMoviesResult />
    )
}