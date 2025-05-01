import './App.css';
import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
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
    <Box className="app" sx={{ bgcolor: '#c00', minHeight: '100vh' }}>
      <h1>Pokémon List</h1>
      <div className="main-container">
        <Cards pokemons={pokemons} />
        <div className="button-row">
          <Button
            variant="contained"
            onClick={onClickBack}
            disabled={page === 0}
            sx={{ bgcolor: '#444', color: 'white', '&:hover': { bgcolor: '#666' } }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onClickNext}
            sx={{ bgcolor: 'gold', color: 'black', '&:hover': { bgcolor: '#f5c518' } }}
          >
            Next
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default App;
