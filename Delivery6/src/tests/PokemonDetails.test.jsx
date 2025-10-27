import { render, screen, within } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router';

import { PokemonDetails } from '../components/PokemonDetails';

const mockApiResponse = {
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    base_experience: 64,
    types: [
        { slot: 1, type: { name: 'grass' } },
        { slot: 2, type: { name: 'poison' } }
    ],
    abilities: [
        { slot: 1, ability: { name: 'overgrow' } },
        { slot: 2, ability: { name: 'chlorophyll' } }
    ],
};

describe('PokemonDetails component', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('successfully fetches data and renders the component', async () => {
        global.fetch = vi.fn().mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockApiResponse),
            })
        );

        render(<PokemonDetails url='https://pokeapi.co/api/v2/pokemon/bulbasaur' />);

        expect(screen.getByText(/Loading/)).toBeInTheDocument();

        // Wait for the component to finish loading
        const pokemonName = await screen.findByText(/bulbasaur/i);

        const heightLabel = screen.getByText(/Height:/i);
        const heightValue = within(heightLabel.parentElement).getByText('7');

        const weightLabel = screen.getByText(/Weight:/i);
        const weightValue = within(weightLabel.parentElement).getByText('69');

        const baseExperienceLabel = screen.getByText(/Base experience:/i);
        const baseExperienceValue = within(baseExperienceLabel.parentElement).getByText('64');

        const grassType = screen.getByText(/grass/i);
        const poisonType = screen.getByText(/poison/i);
        const overgrowAbility = screen.getByText(/overgrow/i);
        const chlorophyllAbility = screen.getByText(/chlorophyll/i);

        // Assertions
        expect(pokemonName).toBeInTheDocument();
        expect(heightValue).toBeInTheDocument();
        expect(weightValue).toBeInTheDocument();
        expect(baseExperienceValue).toBeInTheDocument();
        expect(grassType).toBeInTheDocument();
        expect(poisonType).toBeInTheDocument();
        expect(overgrowAbility).toBeInTheDocument();
        expect(chlorophyllAbility).toBeInTheDocument();
    });

    it('fetches pokemons from API, fails and shows error', async () => {
        global.fetch = vi.fn().mockImplementationOnce(() =>
            Promise.reject(new Error('Network error'))
        );

        render(
            // MemoryRouter is needed for the Link inside the ErrorNotification
            <MemoryRouter>
                <PokemonDetails url='https://pokeapi.co/api/v2/pokemon/bulbasaur' />
            </MemoryRouter>
        );

        expect(screen.getByText(/Loading/)).toBeInTheDocument();

        // Wait for the component to finish loading
        const message = await screen.findByText(/Error happened while fetching the data\. Sorry for the inconvenience\. Please refresh the page to try again or go to the/i);
        const link = screen.getByText(/homepage/i);

        // Assertions
        expect(message).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    });
});