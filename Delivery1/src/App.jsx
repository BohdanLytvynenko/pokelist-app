import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemons from './data/pokemons.json';

function App() {

  return (
    <>
      <h1>Pokelist App</h1>
      <div className='cards-grid'>
        {pokemons.map(pokemon => (
          <div className='card' key={pokemon.name}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <div>{pokemon.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
