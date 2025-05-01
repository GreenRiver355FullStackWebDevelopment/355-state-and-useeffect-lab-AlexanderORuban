import { useState } from "react";
import CardDetail from './CardDetail.jsx';

const Cards = ({ pokemons }) => {
    const [pokemon, setPokemon] = useState();

    const onPokemonClick = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
    }

    return (
        <div className="cards">
            {pokemons.map((p, index) => (
                <div
                    key={index}
                    className="card"
                    onClick={() => onPokemonClick(p.url)}
                >
                    {p.name}
                </div>
            ))}
            {pokemon && <CardDetail pokemon={pokemon} />}
        </div>
    )
}

export default Cards;