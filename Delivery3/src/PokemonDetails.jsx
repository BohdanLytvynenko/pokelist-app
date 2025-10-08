import { useContext } from "react";
import { useParams } from "react-router";

import { PokemonContext } from "./contexts/PokemonContext";

export const PokemonDetails = () => {
    const { name } = useParams();
    const { pokemons } = useContext(PokemonContext);

    const pokemon = pokemons.find(pokemon => pokemon.name === name);

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img width={106} height={106} src={`.${pokemon.imageUrl}`} alt={pokemon.name} />
            <h2>Pokemon Type:</h2>
            <div className="pokemon__types">
                {pokemon.type.map(type => (
                    <span className="pokemon__type" key={type}>{type}</span>
                ))}
            </div>
            <h2>Pokemon Weaknesses:</h2>
            <div className="pokemon__weaknesses">
                {pokemon.weaknesses.map(weakness => (
                    <span className="pokemon__weakness" key={weakness}>{weakness}</span>
                ))}
            </div>
        </>
    );
};


export default PokemonDetails;