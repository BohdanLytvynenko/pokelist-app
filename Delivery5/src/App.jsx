import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from 'styled-components';

import PokemonDetailsWrapper from './routes/PokemonDetailsWrapper.jsx'
import PokemonList from './routes/PokemonList.jsx'
import { PokemonProvider } from './contexts/PokemonContext.jsx';
import './App.css'
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <Routes>
              <Route path="/" element={<PokemonList />} />
              <Route path="/pokemons/:name" element={<PokemonDetailsWrapper />} />
          </Routes>
        </PokemonProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
