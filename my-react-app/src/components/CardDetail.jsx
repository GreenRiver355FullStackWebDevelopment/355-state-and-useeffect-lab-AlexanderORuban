import { Card, CardContent, Typography, Box } from '@mui/material';

const CardDetail = ({ pokemon }) => {
    return (
      <Card sx={{ mt: 4, mx: 'auto', maxWidth: 300, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: 'goldenrod', textTransform: 'capitalize' }}>
          {pokemon.name}
        </Typography>
        <Box
          component="img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{ width: 100, height: 100, my: 2 }}
        />
        <Typography>Height: {pokemon.height}</Typography>
        <Typography>Weight: {pokemon.weight}</Typography>
        <Typography>
          Type: {pokemon.types.map(t => t.type.name).join(', ')}
        </Typography>
      </CardContent>
    </Card>
      );
}

export default CardDetail;