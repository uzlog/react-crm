import styled from "styled-components";

const generateXPosition = position => {
    if (position === "left") {
        return `right: 100%`;
    }
    if (position === "right") {
        return `left: 100%`;
    }

    return "";
};

const generateYPosition = position => {
    if (position === "top") {
        return `bottom: 100%;`;
    }

    if (position === "bottom") {
        return `top: 100%;`;
    }

    return "top: 0;";
};

const generatePosition = position => {
    return `
        ${generateXPosition(position)};
        ${generateYPosition(position)}
    `;
};

// eslint-disable-next-line import/prefer-default-export
export const StyledDropdown = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    ${props => generatePosition(props.location)}
    background: silver;
    border: 1px solid #00000036;
    box-shadow: 0px 0px 2px 1px silver;
`;
