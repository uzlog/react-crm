import styled from "styled-components";

export const StyledFlexContainer = styled.div`
    display: flex;

    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    flex-wrap: ${({ wrap }) => wrap};
`;
