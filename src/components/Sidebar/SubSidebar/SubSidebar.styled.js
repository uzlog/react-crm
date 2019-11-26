import styled from "styled-components";
import colors from "../../../constants/colors";
import { svgSizes } from "../../../constants/fontSizes";
import gutters from "../../../constants/gutters";

export const SubSidebarWrapper = styled.div`
    visibility: hidden;
    width: 0;
    min-width: 0;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    background: ${colors.primary.light};
    color: white;
    overflow: hidden;
    transition: all 0.2s ease;

    ${({ visible }) =>
        visible &&
        `
            visibility:  visible;
            width: 12vw;
            min-width: 150px;
    `};
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: flex-end;

    svg {
        font-size: ${svgSizes.medium};
        cursor: pointer;
        margin: 0 ${gutters.oneThird};
        padding: ${gutters.oneThird};
    }
`;

export const SidebarItems = styled.div`
    padding: ${gutters.twoThirds} ${gutters.oneThird} ${gutters.oneThird}
        ${gutters.oneThird};
    white-space: nowrap;
`;
