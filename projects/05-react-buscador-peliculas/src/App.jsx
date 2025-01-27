import "./App.css";
import { useRef  } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useState } from "react";
import { useEffect } from "react";

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if(firstInput.current) {
      firstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error}
}

function App() {

  const { movies } = useMovies()

  const { search, updateSearch, error } = useSearch()

  const inputRef = useRef()

  const handleChange = (event) => {
    const newQuery = event.target.value 
    updateSearch(newQuery)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)

    // Recuperar informacion del formulario con javascript
    // es mas sencillo que en rect, solo con el valor name en input

    const { query } = Object.fromEntries(new FormData(event.target))
    console.log(query)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
          onChange={handleChange} 
          value={search}
          // name='query' ref={inputRef} 
          placeholder="Star Wars, Matrix, Dune..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
