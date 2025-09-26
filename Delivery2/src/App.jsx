import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemonsList from './data/pokemons.json';

import Form from './components/Form.jsx';

function App() {
  const [pokemons, setPokemons] = useState(pokemonsList);

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  }

  return (
    <>
      <h1>Pokelist App</h1>
      <a className='add-pokemon-link' href="#add-pokemon-form">Add new pokemon</a>
      <div className='cards-grid'>
        {pokemons.map(pokemon => (
          <div className='card' key={pokemon.name}>
            <img width={96} height={96} src={pokemon.imageUrl} alt={pokemon.name} />
            <div>{pokemon.name}</div>
          </div>
        ))}
      </div>
      <Form addPokemon={addPokemon}/>
    </>
  )
}

export default App
