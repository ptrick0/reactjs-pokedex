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
    color: #fff;
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
        width: 250px;
        height: 187px;
        background-image: linear-gradient(#27c2ef, #096079);
        background: linear-gradient(180deg, #27c2ef, #0f9fca, #0f9fca, #27c2ef);
        position: absolute;
        left: -25px;
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
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px;
    padding: 0px;
    list-style-type: none;
    left: 0;
    color: #fff;
`;

const PokemonCardStatsItem = styled.li`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-weight: bold;
    background: radial-gradient(#20add6 30%, #27c2ef 65%);
    
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