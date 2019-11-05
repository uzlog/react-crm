import styled from "styled-components";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
export const Item = styled(Link)`
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 1.5em;

    :hover {
        background: #00000036;
    }
`;
