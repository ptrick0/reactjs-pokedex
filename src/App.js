import React, { Suspense, useEffect } from 'react';
import usePokemon from './hooks/pokemon-hooks';
import NoData from './components/no-data';
import Pokedex from './components/pokedex';
import Header from './components/header';
import Loading from './components/loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	const { pokemonState, getPokemons } = usePokemon();

	useEffect(() => {
        getPokemons(0);
    }, []);

	return (
		<Router>
			<Header />
			{!pokemonState.hasPokemons ? (
				<NoData />
			) : (
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<Pokedex />} />
						<Route path="/teste" element={<NoData />} />
					</Routes>
				</Suspense>
			)}
		</Router>
	);
}

export default App;
