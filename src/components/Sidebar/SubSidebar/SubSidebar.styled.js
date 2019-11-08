import styled from "styled-components";
import { svgSizes } from "../../../constants/fontSizes";
import gutters from "../../../constants/gutters";

export const SubSidebarWrapper = styled.div`
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    width: ${props => (props.visible ? "12vw" : "0")};
    min-width: ${props => (props.visible ? "150px" : "0")};
    max-width: 250px;
    display: flex;
    flex-direction: column;
    background: #445366d4;
    color: white;
    overflow: hidden;
    transition: all 0.2s ease;
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
