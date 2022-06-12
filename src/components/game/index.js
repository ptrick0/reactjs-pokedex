import React, { useState, useEffect } from "react";
import * as S from './styled';
import usePokemon from '../../hooks/pokemon-hooks';
import Loading from '../loading';
import Pokeball from '../../assets/img/pokeball.png';

const Game = () => {
    const { pokemonState, getRandomPokemons } = usePokemon();
    const [ options, setOptions ] = useState(['', '', '']);
    const [ image, setImage ] = useState(Pokeball);
    const [ correctAnswer, setCorrectAnswer ] = useState('');

    useEffect(() => {
        initialize();
    }, []);

    const initialize = async () => {
        const pokemons = await getRandomPokemons(3);
        const rand = Math.floor(Math.random() * 3);
        
        await setCorrectAnswer(pokemons[rand].name);
        await setImage(getPokemonImage(pokemons[rand]))
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

    const verifyAnswer = (answer) => {
        if (answer === correctAnswer) {
            alert(`yay! It's ${correctAnswer}!`);
            // TODO - turn brightness on to image
            // TODO - turn color on correct button answer
            // TODO - load new pokemon image
        } else {
            alert("Ops!");
            // TODO - turn brightness on to image
            // TODO - turn color on correct button answer
            // TODO - load new pokemon image
        }
    };

    const renderOptions = () => {
        return (
            options.map((option, key) => {
                return <React.Fragment key={`page-${key}`}>
                    <S.GameOption onClick={() => verifyAnswer(option)}>{option}</S.GameOption>
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
                        <S.GameImage src={image} />
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