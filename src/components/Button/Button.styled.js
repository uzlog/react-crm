import styled from "styled-components";
import { darken } from "polished";
import boxShadows from "../../constants/boxShadows";

export const StyledButton = styled.button`
    padding: ${({ size }) => size.padding};
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
    border: none;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    -webkit-appearance: button;
    transition: all 0.15s ease-in-out;
    outline: none;

    :hover {
        cursor: pointer;
        background: ${({ background, disabled }) =>
            !disabled && darken(0.05, background)};
        box-shadow: ${boxShadows.normal.medium};
    }

    :disabled {
        filter: grayscale(70%);
        cursor: default;
        box-shadow: none;
    }
`;
