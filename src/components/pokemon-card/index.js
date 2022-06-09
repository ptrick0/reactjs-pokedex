import React from "react";
import * as S from './styled';

const PokemonCard = (props) => {
    const { pokemon } = props;
    return (
        <S.PokemonCardWrapper>
            {pokemon.name}
        </S.PokemonCardWrapper>
    );
}

export default PokemonCard;