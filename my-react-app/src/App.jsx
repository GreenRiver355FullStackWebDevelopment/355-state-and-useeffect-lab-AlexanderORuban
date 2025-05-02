import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import { Container, Typography, Box, Button } from '@mui/material';

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
    <Box sx={{ bgcolor: 'red', minHeight: '100vh', py: 4 }}>
      <Box px={2}>
        <Typography variant="h3" align="center" color="white" marginBottom={3} fontWeight={ 'bold' }>
          Pokémon List
        </Typography>

        <Cards pokemons={pokemons} />

        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            onClick={onClickBack}
            disabled={page === 0}
            sx={{
              backgroundColor: 'gray',
              color: 'white',
              '&:hover': {
                backgroundColor: '#555',
              },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onClickNext}
            sx={{
              backgroundColor: 'gold',
              color: 'black',
              '&:hover': {
                backgroundColor: '#ffd700',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
