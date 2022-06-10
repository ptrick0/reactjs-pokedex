import React, { useEffect } from 'react';
import usePokemon from './hooks/pokemon-hooks';
import NoData from './components/no-data';
import Pokedex from './components/pokedex';
import Header from './components/header';
import Loading from './components/loading';

const App = () => {
	const { pokemonState, getPokemons } = usePokemon();

	useEffect(() => {
        getPokemons(0);
    }, []);

	return (
		<>
			<Header />
			{!pokemonState.hasPokemons ? (
				<NoData />
			) : (
				<>
					{pokemonState.loading ? (
						<Loading />
					) : (
						<>
							<Pokedex />
						</>
					)}
				</>
			)}
		</>
	);
}

export default App;
