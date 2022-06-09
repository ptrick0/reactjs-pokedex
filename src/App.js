import React, { useEffect } from 'react';
import usePokemon from './hooks/pokemon-hooks';
import NoData from './components/no-data';
import Pokedex from './components/pokedex';

const App = () => {
	const { pokemonState, getPokemons } = usePokemon();
	const hasPokemon = pokemonState.pokemons.length !== 0;

	useEffect(() => {
        getPokemons();
    }, []);

	return (
		<>
			{!hasPokemon ? (
				<NoData />
			) : (
				<>
					{pokemonState.loading ? (
						<h1>Loading...</h1>
					) : (
						<Pokedex />
					)}
				</>
			)}
		</>
	);
}

export default App;
