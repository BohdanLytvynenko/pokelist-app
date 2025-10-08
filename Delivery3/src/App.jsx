import { useContext } from 'react'
import { Link } from "react-router";
import './App.css'

import Form from './components/Form.jsx';
import { PokemonContext } from './contexts/PokemonContext.jsx';

function App() {
  const { pokemons, addPokemon } = useContext(PokemonContext);

  return (
    <>
      <h1>Pokelist App</h1>
      <a className='add-pokemon-link' href="#add-pokemon-form">Add new pokemon</a>
      <div className='cards-grid'>
        {pokemons.map(pokemon => (
          <Link to={`/pokemons/${pokemon.name}`} className='card' key={pokemon.name}>
            <img width={96} height={96} src={pokemon.imageUrl} alt={pokemon.name} />
            <div>{pokemon.name}</div>
          </Link>
        ))}
      </div>
      <Form addPokemon={addPokemon}/>
    </>
  )
}

export default App
