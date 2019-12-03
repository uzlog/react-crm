import styled from "styled-components";
import colors from "../../constants/colors";
import gutters from "../../constants/gutters";

export const WidgetWrapper = styled.div`
    box-shadow: 0 0 4px 1px ${colors.boxShadows.light};
    padding: ${gutters.half};
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: ${({ width }) => width};
`;
