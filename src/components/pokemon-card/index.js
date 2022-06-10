import React from "react";
import * as S from './styled';
import { FaWeightHanging, FaHeart } from 'react-icons/fa';
import { MdHeight } from 'react-icons/md';
import { IconContext } from 'react-icons';

const PokemonCard = (props) => {
    const { pokemon } = props;
    return (
        <S.PokemonCardWrapper>
            <S.PokemonCardName>{pokemon.name}</S.PokemonCardName>
            
            <S.PokemonCardImageWrapper>
                <S.PokemonCardImage src={pokemon.sprites.other.home.front_default}/>
            </S.PokemonCardImageWrapper>
            
            <IconContext.Provider value={{ size: "1.5em" }}>
                <S.PokemonCardStats>
                    <S.PokemonCardStatsItem>
                        <FaHeart />
                        <S.PokemonCardStatName>Vida:</S.PokemonCardStatName>
                        {pokemon.stats[0].base_stat}
                    </S.PokemonCardStatsItem>
                    <S.PokemonCardStatsItem>
                        <FaWeightHanging />
                        <S.PokemonCardStatName>Peso:</S.PokemonCardStatName>
                        {pokemon.weight}
                    </S.PokemonCardStatsItem>
                    <S.PokemonCardStatsItem>
                        <MdHeight />
                        <S.PokemonCardStatName>Altura:</S.PokemonCardStatName>
                        {pokemon.height}
                    </S.PokemonCardStatsItem>
                </S.PokemonCardStats>
            </IconContext.Provider>
        </S.PokemonCardWrapper>
    );
}

export default PokemonCard;