import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext({
    pages: [],
    setPages: () => {},
    currentPageIndex: 0,
    setCurrentPageIndex: () => {},
    nextPageUrl: null,
    setNextPageUrl: () => {},
    isLoading: 0,
    setIsLoading: () => {},
});

const PokemonProvider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPokemons = (url, pageIndex) => {
        setIsLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // add API response with the new batch of pokemons, as well as next and prev URLs to the array of pages
                const newPage = [...pages];
                newPage[pageIndex] = data;
                setPages(newPage);
                setCurrentPageIndex(pageIndex);
                setNextPageUrl(data.next);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    useEffect(() => {
        // initial fetch of the first batch of pokemons
        fetchPokemons("https://pokeapi.co/api/v2/pokemon", 0);
    }, [])

    const handleNextPage = () => {
        if (!nextPageUrl) return;

        const nextPageIndex = currentPageIndex + 1;

        // check if the next page of pokemons has already been fetched and exists in the pages array
        if (pages[nextPageIndex]) {
            setCurrentPageIndex(nextPageIndex);
            setNextPageUrl(pages[nextPageIndex]?.next);
        } else {
            // if not, fetch the next page of pokemons from the API and add it to the pages array
            fetchPokemons(nextPageUrl, nextPageIndex);
        }
    };

    const handlePreviousPage = () => {
        const previousPageIndex = currentPageIndex - 1;

        // since the previous pages of pokemons are already stored in the pages array, we don't need to fetch them again
        // we just need to update the currentPageIndex and next state variables
        setCurrentPageIndex(previousPageIndex);
        setNextPageUrl(pages[previousPageIndex]?.next);
    };

    const value = {pages, currentPageIndex, nextPageUrl, isLoading, handleNextPage, handlePreviousPage, error};

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };