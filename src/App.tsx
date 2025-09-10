import { useState } from "react";
import data from "./peliculas.json";
import { Velustro } from "uvcanvas";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState(data);

  const handleSearch = () => {
    if (query.trim() === "") return;

    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="background-canvas">
          <Velustro />
        </div>

        {/* Texto inicial */}
        {!searched && (
          <p className="description fade-in">
            Descripción de peliculas, directores, años y géneros.<br></br>¡Encuentra tu próxima película favorita!
          </p>
        )}

        {/* Barra de búsqueda */}
        <div className={`search-bar ${searched ? "search-top" : ""}`}>
          <input
            type="text"
            placeholder="Escribe una película..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSearch} className="search-button">
            <svg fill="none" viewBox="0 0 18 18" height="18" width="18" className="search-header__icon">
              <path fill="#3A3A3A" d="M7.132 0C3.197 0 0 3.124 0 6.97c0 3.844 3.197 6.969 7.132 6.969 1.557 0 2.995-.49 4.169-1.32L16.82 18 18 16.847l-5.454-5.342a6.846 6.846 0 0 0 1.718-4.536C14.264 3.124 11.067 0 7.132 0zm0 .82c3.48 0 6.293 2.748 6.293 6.15 0 3.4-2.813 6.149-6.293 6.149S.839 10.37.839 6.969C.839 3.568 3.651.82 7.132.82z">
              </path>
            </svg>
          </button>
        </div>

        {/* Resultados */}
        {searched && (
          <div className="results fade-in">
            {results.length > 0 ? (
              results.map((movie, index) => (
                <div key={index} className="movie-card">
                  <img 
                    src={new URL(`./assets/${movie.poster}`, import.meta.url).href} 
                    alt={movie.title} 
                  />
                  <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>
                      <strong>Director:</strong> {movie.director}
                    </p>
                    <p>
                      <strong>Año:</strong> {movie.year}
                    </p>
                    <p>
                      <strong>Género:</strong> {movie.genre}
                    </p>
                    <p className="description">{movie.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontraron resultados.</p>
            )}
          </div>
        )}
        
      </div>
    </>
  );
}

export default App;
