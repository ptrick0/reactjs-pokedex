import styled from "styled-components";
import Button from '../button';

const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0px 80px;

    @media(max-width: 1100px) {
        margin: 0px;
    }
`;

const ControlsBasic = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;

    @media(max-width: 450px){
        flex-wrap: wrap;
        &>*:nth-child(2) {
            order: 1;
        }
    }
`;

const Resumed = styled.div`
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

const PageNum = styled(Button)`
`;

export {
    ControlsWrapper,
    ControlsBasic,
    Resumed,
    ControlsAdvanced,
    PageNum
}