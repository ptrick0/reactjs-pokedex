import styled from "styled-components";

const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0px 80px;
`;

const ControlsBasic = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`;
    
const ControlsAdvanced = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

const PageNum = styled.button`
display:flex;
align-items: center;
justify-content: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    border: 2px solid #0f9fca;
    border-radius: 15px;
    background-color: #27c2ef;
    margin: 5px 5px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 2px 2px 2px 2px rgba(53,53,53,0.5);
        cursor: pointer;
    }

    &.current {
        background-color: #fff;
        color: #27c2ef;
        pointer-events: none;
    }
`;

export {
    ControlsWrapper,
    ControlsBasic,
    ControlsAdvanced,
    PageNum
}