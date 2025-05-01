const CardDetail = ({ pokemon }) => {
    return (
        <div className="card-detail">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
        </div>
      );
}

export default CardDetail;