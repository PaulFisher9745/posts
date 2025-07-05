import {styled, keyframes} from "styled-components";

const rotate = keyframes`
    100% {
        transform: rotate(360deg)
    }
`

export const LoaderSC = styled.div`
    position: fixed;
    top: 45%;
    left: 46%;
    width: 100px;
    height: 100px;
    border: 8px solid rgba(13,71,161,0.6);
    border-radius: 50%;
    border-left-color: rgba(13,71,161,1);
    animation: ${rotate} 1.3s linear infinite

`