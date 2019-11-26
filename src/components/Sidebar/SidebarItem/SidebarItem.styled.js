import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../constants/colors";
import gutters from "../../../constants/gutters";
import { fontSizes, svgSizes } from "../../../constants/fontSizes";

export const Item = styled(Link)`
    display: flex;
    align-items: center;
    padding: ${gutters.twoThirds} ${gutters.oneThird};
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: ${fontSizes.large};

    :hover {
        background: ${colors.primary.dark};
    }

    svg {
        margin-right: 15px;
        font-size: ${svgSizes.extraSmall};
    }
`;
