import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
    display: flex;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    background: transaparent;
    cursor: pointer;
    border: 2px solid #5dceee;
    border-radius: 4px;

    ${({ checked }) => {
        return (
            checked &&
            `
        ::before {content: ' ';
        position: absolute;
        transition: all .1s;
        background: #5dceee;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
    }`
        );
    }}
`;
