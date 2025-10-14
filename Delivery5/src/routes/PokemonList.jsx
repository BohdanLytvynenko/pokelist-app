import { useContext } from 'react'
import { Link } from "react-router";

import { PokemonContext } from '../contexts/PokemonContext';
import CardSkeleton from '../components/CardSkeleton'
import ErrorNotification from '../components/ErrorNotification';

function App() {
    const {
        pages,
        isLoading,
        currentPageIndex,
        handlePreviousPage,
        handleNextPage,
        nextPageUrl,
        error
    } = useContext(PokemonContext);

    const getImageUrl = (url) => {
        const segments = url.split('/'); // Split the URL by slashes
        const pokemonIndex = segments[segments.length - 2];

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    };

    if (error) {
        return <ErrorNotification />;
    }

    return (
        <>
            <h1>Pokelist App</h1>
            <div className='cards-grid'>
                {isLoading
                    ? (
                        Array.from({ length: 20 }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))
                    )
                    : (
                        pages[currentPageIndex].results.map(pokemon => (
                            <Link
                                to={`/pokemons/${pokemon.name}`}
                                state={{ url: pokemon.url }}
                                className='card'
                                key={pokemon.name}
                            >
                                <img width={96} height={96} src={getImageUrl(pokemon.url)} alt={pokemon.name} />
                                <div>{pokemon.name}</div>
                            </Link>
                        ))
                    )
                }
            </div>

            <div className='pagination-buttons'>
                <button className='prev-page-button' onClick={handlePreviousPage} disabled={currentPageIndex === 0}>
                    Previous
                </button>
                <button className='next-page-button' onClick={handleNextPage} disabled={!nextPageUrl}>
                    Next
                </button>
            </div>
        </>
    )
}

export default App
