import { useContext } from "react";
import { PokemonContext } from "../providers/pokemon-provider";

const usePokemon = () => {
    const { pokemonState, getPokemons, getRandomPokemons, storageAllPokemons } = useContext(
        PokemonContext
    );

    return { pokemonState, getPokemons, getRandomPokemons, storageAllPokemons };
};

export default usePokemon;