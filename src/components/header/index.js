import React from "react";
import * as S from './styled';

const Header = () => {
    return (
        <>
            <S.HeaderWrapper>
                <h1>Pokedéx</h1>
                <h2>Aqui você encontrará todos os pokemóns!</h2>
            </S.HeaderWrapper>
        </>
    );
};

export default Header;