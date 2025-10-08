import { createContext, useState } from "react";

import pokemonsList from '../data/pokemons.json';


const PokemonContext = createContext({
    pokemons: [],
    setPokemons: () => {},
    addPokemon: () => {}
});

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState(pokemonsList);
    const addPokemon = (pokemon) => {
        setPokemons([...pokemons, pokemon]);
    }

    const value = {pokemons, setPokemons, addPokemon};

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };