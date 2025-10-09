import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import ErrorNotification from "../components/ErrorNotification";

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const url = location.state.url;

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (error) return <ErrorNotification />
    if (isLoading) return <div className="pokemon__loading">Loading...</div>

    return (
        <>
            {pokemon && (
                <div>
                    <h1 className="pokemon__name">{pokemon.name}</h1>
                    <img width={226} height={226} src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />

                    <div className="pokemon__details">
                        <h2>Details</h2>
                        <div>Height: {pokemon.height}</div>
                        <div>Weight: {pokemon.weight}</div>
                        <div>Base experience: {pokemon.base_experience}</div>
                        <h2>Pokemon Type:</h2>
                        <div className="pokemon__types">
                            {pokemon.types.map(typeObj => (
                                <span className="pokemon__type" key={typeObj.slot}>{typeObj.type.name}</span>
                            ))}
                        </div>
                        <h2>Abilities:</h2>
                        <div className="pokemon__weaknesses">
                            {pokemon.abilities.map(abilityObj => (
                                <span className="pokemon__weakness" key={abilityObj.slot}>{abilityObj.ability.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};


export default PokemonDetails;