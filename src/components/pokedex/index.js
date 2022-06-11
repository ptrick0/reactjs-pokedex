import React from "react";
import usePokemon from '../../hooks/pokemon-hooks';
import PokemonCard from '../pokemon-card';
import Controls from '../controls';
import * as S from './styled';

const Pokedex = () => {
    const { pokemonState } = usePokemon();

    const renderPokemons = () => {
        return (
            pokemonState.pokemons.map((element, key) => {
                return <PokemonCard
                        key={`pokemon-${key}`}
                        pokemon={element}
                        />
            })
        );
    };

    return (
        <>  
            <S.PokedexWrapper>
                {renderPokemons()}
            </S.PokedexWrapper>
            <Controls resumed={false}/>
        </>
    );
};

export default Pokedex;