import React, { useEffect, useState } from "react";
import usePokemon from '../../hooks/pokemon-hooks';
import { POKEMONS_PER_PAGE } from '../../global/constants';
import { IconContext } from 'react-icons';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import * as S from './styled';

const Controls = (props) => {
    const { pokemonState, getPokemons } = usePokemon();
    const [ totalPages, setTotalPages ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const { resumed } = props;

    useEffect(() => {
        setTotalPages(Math.ceil(pokemonState.count / POKEMONS_PER_PAGE));
    }, [pokemonState.count])

    useEffect(() => {
        setCurrentPage(Math.ceil(pokemonState.offset / POKEMONS_PER_PAGE) + 1);
    }, [pokemonState.offset])

    const getFormattedKey = (key) => {
        return ("00" + (key+1)).slice(-2);
    };

    const renderPages = () => {
        return (
            Array.from({length: totalPages}, (element, key) => {
                const isCurrent = currentPage === key+1;
                const formattedKey = getFormattedKey(key);
                return <React.Fragment key={`page-${key}`}>
                    <S.PageNum onClick={() => goToPage(key)} className={`${isCurrent ? "current" : ""}`}>{formattedKey}</S.PageNum>
                </React.Fragment>
            })
        );
    };

    const renderResumedPages = () => {
        const formattedCurrentKey = getFormattedKey(currentPage-1);
        const formattedLastPage = getFormattedKey(totalPages-1);
        return (
            <>
                <S.PageNum onClick={() => goToPage(0)}>First</S.PageNum>
                <S.PageNum className="current">{formattedCurrentKey}</S.PageNum>
                <S.PageNum disabled>{`of ${formattedLastPage}`}</S.PageNum>
                <S.PageNum onClick={() => goToPage(totalPages-1)}>Last</S.PageNum>
            </>
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
                        {resumed ? (
                            <S.Resumed>
                                {renderResumedPages()}
                            </S.Resumed>
                        ) : (
                            <></>
                        )}
                        <S.PageNum onClick={nextOffset}>
                            Next
                            <BiRightArrow/>
                        </S.PageNum>
                    </S.ControlsBasic>
                    {!resumed ? (
                        <S.ControlsAdvanced>
                            {renderPages()}
                        </S.ControlsAdvanced>
                    ) : (
                        <></>
                    ) }
                </S.ControlsWrapper>
            </IconContext.Provider>
        </>
    );
};

export default Controls;