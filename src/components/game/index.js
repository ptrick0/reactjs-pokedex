import React, { useState, useEffect, useRef } from "react";
import * as S from './styled';
import usePokemon from '../../hooks/pokemon-hooks';
import Loading from '../loading';
import Pokeball from '../../assets/img/pokeball.png';

const Game = () => {
    const { pokemonState, getRandomPokemons } = usePokemon();
    const [ options, setOptions ] = useState(['', '', '']);
    const [ image, setImage ] = useState(Pokeball);
    const [ correctAnswer, setCorrectAnswer ] = useState('');
    const [ buttonDisabled, setButtonDisabled ] = useState(false);
    const firstRender = useRef(true);

    useEffect(() => {
        ableOptionButtons();
    }, [buttonDisabled]);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        initialize();
    }, []);

    const ableOptionButtons = () => {
        const buttons = document.getElementsByClassName("optionButton");

        Array.from(buttons).forEach((button) => {
            button.disabled = buttonDisabled
        });
    };

    const initialize = async () => {
        const pokemons = await getRandomPokemons(3);
        const rand = Math.floor(Math.random() * 3);
        
        await setCorrectAnswer(pokemons[rand].name);
        await setImage(getPokemonImage(pokemons[rand]));
        setOptions(pokemons.map((pokemon) => {
            return pokemon.name;
        }));
    }

    const getPokemonImage = (pokemon) => {
        const pokemonImages = [ pokemon.sprites.other.home.front_default, 
                                pokemon.sprites.other["official-artwork"].front_default, 
                                pokemon.sprites.front_default,
                                Pokeball
                            ]
        return pokemonImages.find((element) => element !== null);
    };

    const correctAnswerFeedback = (event) => {
        const gameImg = document.getElementById("gameImg");
        setButtonDisabled(true);
        gameImg.classList.add("bright");
        event.target.classList.add("correct");
    }

    const wrongAnswerFeedback = (event) => {
        setButtonDisabled(true);
        event.target.classList.add("wrong");
    }

    const resetAnswer = (event) => {
        event.target.classList.remove("correct");
        event.target.classList.remove("wrong");
        setButtonDisabled(false);
    }

    const resetGame = (event) => {
        const gameImg = document.getElementById("gameImg");
        gameImg.classList.remove("bright");
        resetAnswer(event);
        initialize();
    }

    const verifyAnswer = (answer, event) => {
        if (answer === correctAnswer) {
            correctAnswerFeedback(event);
            setTimeout(() => {
                resetGame(event);
            }, 3000);
        } else {
            wrongAnswerFeedback(event);
            setTimeout(() => {
                resetAnswer(event);
            }, 3000);
        }
    };

    const renderOptions = () => {
        return (
            options.map((option, key) => {
                return <React.Fragment key={`page-${key}`}>
                    <S.GameOption className="optionButton" onClick={(e) => verifyAnswer(option, e)}>{option}</S.GameOption>
                </React.Fragment>
            })
        );
    };

    return (
        <>
            {pokemonState.loading ? (
                <Loading />
            ) : (
                <S.GameWrapper>
                    <S.GameTitle>Who's that pokémon?</S.GameTitle>
                    <S.GameContent>
                        <S.GameImageWrapper>
                            <S.GameImage id="gameImg" src={image} />
                        </S.GameImageWrapper>
                        <S.GameOptions>
                            {renderOptions()}
                        </S.GameOptions>
                    </S.GameContent>
                </S.GameWrapper>
            )}
        </>
    )
};

export default Game;