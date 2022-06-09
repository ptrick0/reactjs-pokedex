import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const PokemonContext = createContext({
    loading: false,
    pokemons: [],
});

const PokemonProvider = ({ children }) => {
    const [pokemonState, setPokemonState] = useState({
        loading: false,
        pokemons: []
    });

    const getPokemons = () => {
        setPokemonState((prevState) => ({
            ...prevState,
            loading: true
        }));
        
        api
        .get(`pokemon?limit=100000&offset=0`)
        .then((data) => {
            setPokemonState((prevState) => ({
                ...prevState,
                pokemons: data.data.results
            }));
        })
        .catch((err) => {
            if (err.response.status === 404) {
                setPokemonState((prevState) => ({
                    ...prevState,
                    pokemons: []
                }));
            }
        })
        .finally(() => {
            setPokemonState((prevState) => ({
                ...prevState,
                loading: false
            }));
        });
    };

    const contextValue = {
        pokemonState,
        getPokemons: useCallback(() => getPokemons(), [])
    };

    return (
        <PokemonContext.Provider value={contextValue}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;