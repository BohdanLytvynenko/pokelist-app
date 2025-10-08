import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import PokemonDetails from './PokemonDetails.jsx'
import { PokemonProvider } from './contexts/PokemonContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pokemons/:name" element={<PokemonDetails />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  </StrictMode>,
)
