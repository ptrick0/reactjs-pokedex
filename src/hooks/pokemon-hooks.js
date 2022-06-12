import { useContext } from "react";
import { PokemonContext } from "../providers/pokemon-provider";

const usePokemon = () => {
    const { pokemonState, getPokemons, getRandomPokemons } = useContext(
        PokemonContext
    );

    return { pokemonState, getPokemons, getRandomPokemons };
};

export default usePokemon;