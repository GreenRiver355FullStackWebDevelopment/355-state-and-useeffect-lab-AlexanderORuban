import { useState } from "react";
import CardDetail from './CardDetail.jsx';
import { Grid, Paper, Box } from '@mui/material';

const Cards = ({ pokemons }) => {
    const [pokemon, setPokemon] = useState();

    const onPokemonClick = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
    }

    return (
        <Box
        sx={{
          backgroundColor: '#333',
          borderRadius: 2,
          p: 2,
          color: 'white',
        }}
      >
        <Grid container spacing={1}>
          {pokemons.map((p, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  textAlign: 'center',
                  p: 1,
                  bgcolor: '#444',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  '&:hover': {
                    bgcolor: '#555',
                  },
                }}
                onClick={() => onPokemonClick(p.url)}
              >
                {p.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
  
        {pokemon && <CardDetail pokemon={pokemon} />}
      </Box>
    )
}

export default Cards;