import React from "react";
import * as S from './styled';
import Controls from '../controls';
import { Link, useLocation } from "react-router-dom";
import { RiPlayFill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const Header = () => {
    const location = useLocation();

    return (
        <S.HeaderWrapper>
            <S.Header>
                <S.HeaderDetails>
                    <IconContext.Provider value={{ size: "3em" }}>
                        <S.DomeDex>
                            {location.pathname === "/" ? (
                                <Link to="/game">
                                    <RiPlayFill />
                                </Link>
                            ) : (
                                <Link to="/">
                                    <GiReturnArrow />
                                </Link>
                            )}
                        </S.DomeDex>
                    </IconContext.Provider>
                    <S.LightsDex>
                        <S.LightItem></S.LightItem>
                        <S.LightItem></S.LightItem>
                        <S.LightItem></S.LightItem>
                    </S.LightsDex>
                </S.HeaderDetails>

                <S.HeaderText>Pokédex</S.HeaderText>
                
            </S.Header>
            <S.HeaderDex>
                <S.HeaderDexContent>
                    {location.pathname === "/" ? (
                        <Controls resumed={true}/>
                    ) : (
                        <></>
                    )}
                </S.HeaderDexContent>
            </S.HeaderDex>
        </S.HeaderWrapper>
    );
};

export default Header;