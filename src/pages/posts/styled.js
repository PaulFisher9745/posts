import {styled} from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const Img = styled.img`
    width: 50px;
    height: 20px;
    cursor: pointer;
`

export const PageButton = styled.div`
    font-weight: 400;
    cursor: pointer;

    &.active {
        font-weight: bold;
    }
`

export const SortAndSearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`