import styled from "styled-components";
import gutters from "../../constants/gutters";

export const StyledWidget = styled.div`
    box-shadow: ${({ boxShadow }) => boxShadow};
    padding: ${gutters.half};
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: ${({ width }) => width};
    height: ${({ height }) => height.height};
    min-height: ${({ height }) => height.minHeight};
    box-sizing: border-box;
`;

export const widgetHeights = {
    small: {
        minHeight: "200px",
        height: "5vh"
    },
    medium: {
        minHeight: "400px",
        height: "18vh"
    },
    large: {
        minHeight: "600px",
        height: "30vh"
    }
};
