import styled from "styled-components";
import Button from '../button';

const GameWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GameTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    margin: 0px;
`;

const GameContent = styled.div`
    width: calc(100% - 50px);
    padding-left: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column;
        padding-right: 50px;
        padding-bottom: 0px;
        width: calc(100% - 100px);
    }
`;

const GameImage = styled.img`
    width: 50%;
    display: flex;
    align-content: center;
    filter: brightness(0%);

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
    }
`;

const GameOption = styled(Button)`
    width: 100%;
`;

export {
    GameWrapper,
    GameTitle,
    GameContent,
    GameImage, 
    GameOptions,
    GameOption
}