import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        font-family: "Comic", "Comic Sans", sans-serif;
        background-color: #da3236;

        /* hide scrollbar but allow scrolling */
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll;
        
        &::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }
    }

    @keyframes rotate-image {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes twinkle {
        /*0% {
            filter: brightness(40%);
        }
        50% {
            filter: brightness(100%);
        }
        100% {
            filter: brightness(40%);
        }*/
    }

    @keyframes backgroundTransition {
        0% {
            background-position: 0% 80%;
        }
        50% {
            background-position: 80% 100%;
        }
        100% {
            background-position: 0% 80%;
        }
    }
`;