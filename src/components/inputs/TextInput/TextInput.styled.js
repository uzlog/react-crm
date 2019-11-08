import styled from "styled-components";
import { transparentize } from "polished";

export const StyledInput = styled.input`
    border: 0;
    outline: none;
    box-sizing: border-box;
    width: ${props => props.width};
    background: ${props => props.background};
    color: ${props => props.color};
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};

    ::placeholder {
        color: ${props => transparentize(0.5, props.color)};
    }

    :focus {
        box-shadow: ${props =>
            `0 1px 0px 0px ${transparentize(0.5, props.color)}`};
    }
`;
