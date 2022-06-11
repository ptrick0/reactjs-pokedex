import React from "react";
import * as S from './styled';
import Controls from '../controls';

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
            <S.HeaderDex>
                <S.HeaderDexContent>
                    <Controls resumed={true}/>
                </S.HeaderDexContent>
            </S.HeaderDex>
        </S.HeaderWrapper>
    );
};

export default Header;