import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';
import { POKEMONS_PER_PAGE } from '../global/constants';

export const PokemonContext = createContext({
    hasPokemons: false,
    loading: false,
    offset: 0,
    count: 0,
    pokemons: [],
});

const PokemonProvider = ({ children }) => {
    const [pokemonState, setPokemonState] = useState({
        hasPokemons: false,
        loading: false,
        offset: 0,
        count: 0,
        pokemons: []
    });

    const getPokemons = (pageOffset = 0) => {
        setPokemonState((prevState) => ({
            ...prevState,
            offset: pageOffset,
            loading: true
        }));
        
        api
        .get(`pokemon?limit=${POKEMONS_PER_PAGE}&offset=${pageOffset}`)
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
                hasPokemons: true,
                count: data.data.count,
                pokemons: pokemons
            }));
        })
        .catch((err) => {
            if (err.response.status === 404) {
                setPokemonState((prevState) => ({
                    ...prevState,
                    count: 0,
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


    const getRandomPokemons = async (num) => {
        setPokemonState((prevState) => ({
            ...prevState,
            loading: true
        }));

        let allPokemons = [];
        let pokemons = [];
        
        await api
        .get(`pokemon?limit=999999`)
        .then(async (data) => {
            let mapPromises = data.data.results.map(async (element, key) => {
                let url = element.url;
                let urlSplitted = url.split("/");

                let pokemon = await getPokemon(urlSplitted[urlSplitted.length - 2]);

                return pokemon;
            });
            allPokemons = await Promise.all(mapPromises);

            for(let i = 0; i < num; i++) {
                const rand = Math.floor(Math.random() * allPokemons.length);
                pokemons.push(allPokemons[rand]);
                allPokemons.splice(rand, 1);
            }
        })
        .catch((err) => {
            if (err.response.status === 404) {
                setPokemonState((prevState) => ({
                    ...prevState
                }));
            }
        })
        .finally(() => {
            setPokemonState((prevState) => ({
                ...prevState,
                loading: false
            }));
        });

        return pokemons;
    }

    const getPokemon = async (pokemonId) => {
        let pokemonData = {};

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
        return pokemonData;
    };

    const contextValue = {
        pokemonState,
        getPokemons: useCallback((offset) => getPokemons(offset)),
        getRandomPokemons: useCallback((num) => getRandomPokemons(num))
    };

    return (
        <PokemonContext.Provider value={contextValue}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;