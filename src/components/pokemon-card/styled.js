import styled from "styled-components";

const PokemonCardWrapper = styled.div`
    width: 250px;
    height: 350px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #0f9fca;
    border-radius: 15px;
    background-color: #27c2ef;
    transition: 0.3s ease-in-out 0s;
    padding-top: 10px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 5px 3px 5px 5px rgba(53,53,53,0.5);
        cursor: pointer;
    }
`;

const PokemonCardName = styled.h2`
    margin: 0px;
    padding: 0px 7px;
    color: #096079;
    background-color: #27c2ef;
    text-transform: capitalize;
    z-index: 2; 
    border-radius: 10px;
`;

const PokemonCardImageWrapper = styled.div`
    position: relative;

    &:before {
        content: '';
        z-index: 1;
        width: 210px;
        height: 187px;
        background-image: linear-gradient(#27c2ef, #096079);
        border-radius: 15px;
        position: absolute;
        left: -7px;
        top: 15px;
    }
`;

const PokemonCardImage = styled.img`
    width: 200px;
    position: relative;
    z-index: 2;
    /*filter: brightness(0%);*/
`;

const PokemonCardStats = styled.ul`
    width: 100%;
    margin: 5px;
    list-style-type: none;
    left: 0;
    color: #096079;
`;

const PokemonCardStatsItem = styled.li`
    display:flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;
`;

const PokemonCardStatName = styled.span`
    margin: 0px 5px;
`;

export {
    PokemonCardWrapper,
    PokemonCardImageWrapper,
    PokemonCardImage,
    PokemonCardName,
    PokemonCardStats,
    PokemonCardStatsItem,
    PokemonCardStatName
}