import styled from "styled-components";
import gutters from "../../constants/gutters";
import colors from "../../constants/colors";

export const StyledColumns = styled.div`
    display: flex;
    padding: ${gutters.half};
    background: ${colors.secondary.light};
`;

export const StyledColumn = styled.div`
    display: flex;
`;
