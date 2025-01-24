import "./App.css";
import { useRef  } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const { movies } = useMovies()

  const inputRef = useRef()

  // Validar busqueda controlada con useState y useEffect
  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  const handleChange = (event) => {
    const newQuery = event.target.value 
    if(newQuery.startsWith(' ')) return
    setQuery(newQuery)
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
