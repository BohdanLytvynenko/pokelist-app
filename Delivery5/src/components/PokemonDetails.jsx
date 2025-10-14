import { useEffect, useState } from "react";

import ErrorNotification from "./ErrorNotification";
import {
    H1,
    PokemonImage,
    PokemonDetailsWrapper,
    DetailSection,
    Types,
    StatName,
    StatValue,
    Abilities,
    Characteristic,
    Loading
} from "./PokemonDetails.styles";

export const PokemonDetails = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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
    if (isLoading) return <Loading>Loading...</Loading>

    return (
        <>
            {pokemon && (
                <div>
                    <H1>{pokemon.name}</H1>
                    <PokemonImage src={pokemon.sprites?.other?.home?.front_default} alt={pokemon.name} />

                    <PokemonDetailsWrapper>
                        <DetailSection>
                            <h2>Details</h2>
                            <div><StatName>Height:</StatName> <StatValue>{pokemon.height}</StatValue></div>
                            <div><StatName>Weight:</StatName> <StatValue>{pokemon.weight}</StatValue></div>
                            <div><StatName>Base experience:</StatName> <StatValue>{pokemon.base_experience}</StatValue></div>
                        </DetailSection>
                        <DetailSection>
                            <h2>Pokemon Type</h2>
                            <Types>
                                {pokemon.types?.map(typeObj => (
                                    <Characteristic key={typeObj.slot}>{typeObj.type.name}</Characteristic>
                                ))}
                            </Types>
                        </DetailSection>
                        <DetailSection>
                            <h2>Abilities</h2>
                            <Abilities>
                                {pokemon.abilities?.map(abilityObj => (
                                    <Characteristic $secondary key={abilityObj.slot}>{abilityObj.ability.name}</Characteristic>
                                ))}
                            </Abilities>
                        </DetailSection>
                    </PokemonDetailsWrapper>
                </div>
            )}
        </>
    )
};


export default PokemonDetails;