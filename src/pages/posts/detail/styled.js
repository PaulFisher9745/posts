import styled from "styled-components";

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`
export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`
    text-align: center;
    margin-top: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const DeleteButton = styled.button`
    border: 1px solid black ;
    background: white;
    padding: 5px 15px;
    border-radius: 10px;
    color: black;
    cursor: pointer;

    &:hover {
        background: red;
        color: white;
        border: 1px solid red;
    }
`