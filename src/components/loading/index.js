import React from "react";
import Pokeball from '../../assets/img/pokeball.png';
import * as S from './styled';

const Loading = () =>{
    return (
        <S.PokeballWrapper>
            <S.PokeballImage src={Pokeball} />
            <S.LoadingText>Loading...</S.LoadingText>
        </S.PokeballWrapper>
    )
};

export default Loading;