import styled from "styled-components";
import Button from '../button';

const GameWrapper = styled.div`
    width: calc(100vw - 6em);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0em 3em 3em 3em;
`;

const GameTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
`;

const GameContent = styled.div`
    width: calc(70vw - 50px);
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2a2a2a;
    border: 20px solid #dedede;
    border-radius: 5px 5px 5px 55px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        bottom: 0; left: 0;
        border-bottom: 30px solid #dedede;
        border-right: 30px solid #2a2a2a;
        width: 0;
    }

    @media(max-width: 1100px) {
        width: calc(100% - 50px);
    }

    @media(max-width: 800px) {
        flex-direction: column;
        padding-bottom: 0px;
        width: calc(100% - 100px);
    }

    @media(max-width: 600px) {
        width: 100%;
    }
`;

const GameImageWrapper = styled.div`
    width: 50%;
    display: flex;
    align-content: center;

    &:before {
        content: '';
        margin: 0px;
        width: calc(50% - 40px);
        height: calc(100% - 40px);
        top: 20px;
        left: 20px;
        border-radius: 50%;
        background-image: radial-gradient(#fff, #27c2ef, #2a2a2a 60%);
        position: absolute;
    }

    @media(max-width: 800px) {
        &:before {
            width: calc(100% - 40px);
            height: 50%;
        }
    }

    @media(max-width: 600px) {
        &:before {
            width: 100%;
            height: 50%;
            top: 0px;
            left: 0px;
        }
    }
`;

const GameImage = styled.img`
    width: 100%;
    display: flex;
    align-content: center;
    filter: brightness(0%);
    transition: 0.5s ease-in-out;
    position: relative;

    &.bright {
        filter: brightness(100%);
    }

    @media(max-width: 800px) {
        width: 100%;
    }

`;

const GameOptions = styled.div`
    width: calc(50% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;

    @media(max-width: 800px) {
        width: 100%;
        padding: 30px;
    }
`;

const GameOption = styled(Button)`
    width: 100%;
    transition: 0.3s ease-in-out;

    &.correct {
        background-color: #0cb63f;
        border-color: #009f04;
        animation: twinkle 0.9s ease-in-out 2;
    }

    &.wrong {
        background-color: #ff2020;
        border-color: #b00000;
        animation: shake 0.2s ease-in-out 2;
    }
`;

export {
    GameWrapper,
    GameTitle,
    GameContent,
    GameImageWrapper,
    GameImage, 
    GameOptions,
    GameOption
}