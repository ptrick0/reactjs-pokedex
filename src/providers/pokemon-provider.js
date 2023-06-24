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

    const databaseName = "PokemonDb";

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

                let pokemon = await getPokemonDetails(urlSplitted[urlSplitted.length - 2]);

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

    const getPokemonDetails = async (pokemonId) => {
        let pokemonData = {};

        await api
            .get(`pokemon/${pokemonId}`)
            .then(({ data }) => {
                pokemonData = {
                    id: data.id,
                    name: data.name,
                    sprites: data.sprites,
                    stats: data.stats,
                    weight: data.weight,
                    height: data.height
                }
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    pokemonData = {};
                }
            })
        return pokemonData;
    };

    const savePokemonOnDb = (pokemonData) => {
        const indexedDB =
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB ||
            window.shimIndexedDB;

        if (!indexedDB) {
            console.warn('IndexedDB not supported')
            return
        }

        const dbRequest = indexedDB.open(databaseName);

        dbRequest.onerror = () => {
            console.log(`${databaseName} database open error`);
        };

        dbRequest.onsuccess = () => {
            const db = dbRequest.result;
            const dbTransaction = db.transaction("pokemons", "readwrite")
            const pokemonObjectStore = dbTransaction.objectStore("pokemons");

            pokemonObjectStore.put(pokemonData);

            dbTransaction.oncomplete = () => db.close();
        };

        dbRequest.onupgradeneeded = () => {
            const db = dbRequest.result;

            const objectStore = db.createObjectStore("pokemons", { keyPath: "id" });
          
            objectStore.createIndex("name", "name", { unique: false });

            objectStore.createIndex("id", "id", { unique: true });
        };
    };

    const storageAllPokemons = async () => {
        setPokemonState((prevState) => ({
            ...prevState,
            loading: true
        }));
        
        await api
            .get(`pokemon?limit=999999`)
            .then(async ({ data }) => {
                for(const element of data.results) {
                    let url = element.url;
                    let urlSplitted = url.split("/");

                    await getPokemonDetails(urlSplitted[urlSplitted.length - 2])
                        .then((pokemon) => savePokemonOnDb(pokemon));
                };
            })
            .catch((err) => {
                console.log('Error to save pokemons on database', err);
            })
            .finally(() => {
                setPokemonState((prevState) => ({
                    ...prevState,
                    loading: false
                }));
            });
    };

    const queryAllPokemons = () => {
        return new Promise((resolve, reject) => {
            const dbRequest = indexedDB.open(databaseName);

            dbRequest.onsuccess = () => {
                const db = dbRequest.result;
                const dbTransaction = db.transaction("pokemons", "readonly");
                const dbStorage = dbTransaction.objectStore("pokemons");

                const pokemonsQuery = dbStorage.getAll();
                
                pokemonsQuery.onsuccess = () => {
                    resolve(pokemonsQuery.result);
                };

                dbTransaction.oncomplete = () => db.close();
            }
        });
    };

    const getPokemonsOnStorage = async () => {
        const indexedDB =
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB ||
            window.shimIndexedDB;

        if (!indexedDB) {
            console.warn('IndexedDB not supported')
            return
        }

        const isCreatedDb = (await indexedDB.databases()).map(db => db.name).includes(databaseName);

        if (!isCreatedDb) {
            await storageAllPokemons();
        }

        const pokemons = await queryAllPokemons();

        return pokemons;
        
    };

    const getRandomPokemonsWithDb = async (num) => {
        setPokemonState((prevState) => ({
            ...prevState,
            loading: true
        }));

        let allPokemons = [];
        let pokemons = [];
        
        allPokemons = await getPokemonsOnStorage();

        for(let i = 0; i < num; i++) {
            const rand = Math.floor(Math.random() * allPokemons.length);
            pokemons.push(allPokemons[rand]);
            allPokemons.splice(rand, 1);
        }

        setPokemonState((prevState) => ({
            ...prevState,
            loading: false
        }));

        return pokemons;
    };

    const contextValue = {
        pokemonState,
        getPokemons: useCallback((offset) => getPokemons(offset)),
        getRandomPokemons: useCallback((num) => getRandomPokemonsWithDb(num)),
        storageAllPokemons: useCallback(() => storageAllPokemons())
    };

    return (
        <PokemonContext.Provider value={contextValue}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;