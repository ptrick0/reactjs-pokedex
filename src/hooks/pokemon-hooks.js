import { useContext } from "react";
import { PokemonContext } from "../providers/pokemon-provider";

const usePokemon = () => {
    const { pokemonState, getPokemons } = useContext(
        PokemonContext
    );

    return { pokemonState, getPokemons };
};

export default usePokemon;