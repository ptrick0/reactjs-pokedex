import styled from "styled-components";

const PokeballWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #fff;
`;

const PokeballImage = styled.img`
    width: 100px;
    animation-name: rotate-image;
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;

const LoadingText = styled.p`
    font-size: 36px;
    color: #4c4d4f;
`;

export {
    PokeballWrapper,
    PokeballImage,
    LoadingText
}