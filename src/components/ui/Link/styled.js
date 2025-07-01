import { Link, NavLink } from "react-router-dom";
import styled, {css} from "styled-components";

const LinksStyle = css`
    color: black;
    text-decoration: none;

    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`

export const SimpleLink = styled(Link)`${LinksStyle}`

export const NavigationLink = styled(NavLink)`
    ${LinksStyle}

     &.active {
        color: darkred;
    }
`