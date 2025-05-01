import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    const limit = 20;
    const offset = page * limit;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();
    setPokemons(data.results);
  };

  const onClickNext = () => setPage(prev => prev + 1);
  const onClickBack = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  return (
    <div className="app">
      <h1>Pokémon List</h1>
      <div className="main-container">
        <Cards pokemons={pokemons} />
        <div className="button-row">
          <button
            variant="contained"
            onClick={onClickBack}
            disabled={page === 0}
          >
            Back
          </button>
          <button
            variant="contained"
            onClick={onClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
