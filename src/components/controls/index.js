import React, { useEffect, useState } from "react";
import usePokemon from '../../hooks/pokemon-hooks';
import { POKEMONS_PER_PAGE } from '../../global/constants';
import { IconContext } from 'react-icons';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import * as S from './styled';

const Controls = () => {
    const { pokemonState, getPokemons } = usePokemon();
    const [ totalPages, setTotalPages ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(pokemonState.count / POKEMONS_PER_PAGE));
    }, [pokemonState.count])

    useEffect(() => {
        setCurrentPage(Math.ceil(pokemonState.offset / POKEMONS_PER_PAGE) + 1);
    }, [pokemonState.offset])

    const renderPages = () => {
        return (
            Array.from({length: totalPages}, (element, key) => {
                const isCurrent = currentPage === key+1;
                const formattedKey = ("00" + (key+1)).slice(-2);
                return <React.Fragment key={`page-${key}`}>
                    <S.PageNum onClick={() => goToPage(key)} className={`${isCurrent ? "current" : ""}`}>{formattedKey}</S.PageNum>
                </React.Fragment>
            })
        );
    };

    const nextOffset = () => {
        let next = pokemonState.offset + POKEMONS_PER_PAGE;

        if (next <= pokemonState.count) {
            getPokemons(next);
        }
    };

    const previousOffset = () => {
        let previous = pokemonState.offset - POKEMONS_PER_PAGE;

        if (previous >= 0) {
            getPokemons(previous);
        }
    };

    const goToPage = (page) => {
        if (page+1 !== currentPage) {
            getPokemons(page*POKEMONS_PER_PAGE);
        }
    };

    return (
        <>
            <IconContext.Provider value={{ size: "1em" }}>
                <S.ControlsWrapper>
                    <S.ControlsBasic>
                        <S.PageNum onClick={previousOffset}>
                            <BiLeftArrow/>
                            Previous
                        </S.PageNum>
                        <S.PageNum onClick={nextOffset}>
                            Next
                            <BiRightArrow/>
                        </S.PageNum>
                    </S.ControlsBasic>
                    <S.ControlsAdvanced>
                        {renderPages()}
                    </S.ControlsAdvanced>
                </S.ControlsWrapper>
            </IconContext.Provider>
        </>
    );
};

export default Controls;