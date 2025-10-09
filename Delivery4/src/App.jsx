import { BrowserRouter, Route, Routes } from "react-router";
import PokemonDetails from './routes/PokemonDetails.jsx'
import PokemonList from './routes/PokemonList.jsx'
import { PokemonProvider } from './contexts/PokemonContext.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemons/:name" element={<PokemonDetails />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  )
}

export default App
