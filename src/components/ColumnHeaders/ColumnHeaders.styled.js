import styled from "styled-components";
import colors from "../../constants/colors";
import Spacing from "../../layout/Spacing/Spacing";

export const StyledColumns = styled(Spacing)`
    display: flex;
    justify-content: space-between;
    background: ${colors.secondary.light};
`;

export const StyledColumn = styled.div`
    display: flex;
    flex: 1;
`;
