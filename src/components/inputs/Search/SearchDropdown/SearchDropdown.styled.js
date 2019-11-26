import styled from "styled-components";
import colors from "../../../../constants/colors";

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

export const StyledDropdown = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    ${props => generatePosition(props.location)}
    background: ${({ background }) => background};
    border: 1px solid ${colors.borders.light};
    box-shadow: 0px 0px 2px 1px ${colors.boxShadows.normal};
`;
