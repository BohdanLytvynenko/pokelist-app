import { useLocation } from "react-router";

import PokemonDetails from "../components/PokemonDetails";

export const PokemonDetailsWrapper = () => {
    const location = useLocation();
    const url = location.state?.url;

    return <PokemonDetails url={url} />
};


export default PokemonDetailsWrapper;
