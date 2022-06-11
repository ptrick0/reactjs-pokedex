import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #cd2529;
    margin: 0px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;

const Header = styled.div`
    display: flex;
    width: 100%;

    @media(max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const HeaderDex = styled.div`
    width: 0;
    height: 0;
    margin-top: 30px;
    z-index: 1;
    position: relative;
    border-top: 60px solid transparent;
    border-bottom: 30px solid #da3236;
    
    border-right: 60px solid #da3236;

    
    &:before {
        content: '';
        width: calc(50vw - 30px);
        height: 30px;
        right: 0px;
        top: 0px;
        background-color: #da3236;
        position: absolute;
        z-index: 1;
    }

    &:after {
        content: '';
        width: calc(50vw - 30px);
        height: 90px;
        left: 60px;
        top: -60px;
        background-color: #da3236;
        position: absolute;
        z-index: 1;
    }
`;

const HeaderDexContent = styled.div`
    width: calc(50vw - 30px);
    height: 70px;
    left: 10px;
    top: -40px;
    background-color: transparent;
    position: absolute;
    z-index: 2;
    align-items: center;
    justify-content: center;

    @media(max-width: 1000px) {
        width: 98vw;
        top: -50px;
        left: calc(-50vw + 30px);
    }
`;

const HeaderText = styled.h1`
    font-size: 64px;
    margin: 0px;
    width: 50%;
    display: flex;

    @media(max-width: 700px) {
        justify-content: center;
        margin-bottom: 50px;
    }
`;

const HeaderDetails = styled.div`
    display: flex;
    width: 50%;
    margin-left: 60px;
    
    @media(max-width: 700px) {
        margin-left: 0px;
        justify-content: center;
    }
`;

const LightsDex = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-left: 20px;

    &>*:nth-child(1) {
        background-color: #ff1a1f;
        border: 1px solid #c10005;
        animation: twinkle 1.5s ease-in-out infinite;
    }

    &>*:nth-child(2) {
        background-color: #e9ba01;
        border: 1px solid #ba9501;
        animation: twinkle 1.5s ease-in-out infinite;
        animation-delay: 0.2s;
    }

    &>*:nth-child(3) {
        background-color: #04ca36;
        border: 1px solid #039427;
        animation: twinkle 1.5s ease-in-out infinite;
        animation-delay: 0.4s;
    }
`;

const LightItem = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    filter: brightness(100%);
`;
    
const DomeDex = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #8cdff7;
    background: linear-gradient(-45deg, #0f9fca, #27c2ef, #8cdff7);
    background-size: 300px 300px;
    animation: backgroundTransition 5s ease-in-out infinite;
`;

export {
    HeaderWrapper,
    Header,
    HeaderDex,
    HeaderDexContent,
    HeaderText,
    HeaderDetails,
    LightsDex,
    LightItem,
    DomeDex
}