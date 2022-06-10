import React from "react";
import * as S from './styled';

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.Header>
                <S.HeaderDetails>
                    <S.DomeDex></S.DomeDex>
                    <S.LightsDex>
                        <S.LightItem></S.LightItem>
                        <S.LightItem></S.LightItem>
                        <S.LightItem></S.LightItem>
                    </S.LightsDex>
                </S.HeaderDetails>

                <S.HeaderText>Pokedéx</S.HeaderText>
                
            </S.Header>
            <S.HeaderDex />
        </S.HeaderWrapper>
    );
};

export default Header;