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
        .then(async (data) => {
            let mapPromises = data.data.results.map(async (element, key) => {
                let url = element.url;
                let urlSplitted = url.split("/");

                let pokemon = await getPokemon(urlSplitted[urlSplitted.length - 2]);

                return pokemon;
            });
            let pokemons = await Promise.all(mapPromises);
            
            setPokemonState((prevState) => ({
                ...prevState,
                pokemons: pokemons
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

    const getPokemon = async (pokemonId) => {
        let pokemonData = {};

        setPokemonState((prevState) => ({
            ...prevState,
            loading: true
        }));

        await api
        .get(`pokemon/${pokemonId}`)
        .then((data) => {
            pokemonData = data.data;
        })
        .catch((err) => {
            if (err.response.status === 404) {
                pokemonData = {};
            }
        })
        .finally(() => {
            setPokemonState((prevState) => ({
                ...prevState,
                loading: false
            }));
        });
        return pokemonData;
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