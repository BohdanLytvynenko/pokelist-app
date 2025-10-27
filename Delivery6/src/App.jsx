import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from 'styled-components';

import { PokemonProvider } from './contexts/PokemonContext.jsx';
import LoadingSpinner from './components/Loader.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './App.css'
import theme from "./theme/theme";

const PokemonList = lazy(() => import('./routes/PokemonList.jsx'));
const PokemonDetailsWrapper = lazy(() => import('./routes/PokemonDetailsWrapper.jsx'));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                  <Route path="/" element={<PokemonList />} />
                  <Route path="/pokemons/:name" element={<PokemonDetailsWrapper />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </PokemonProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
