import styled from "styled-components";
import gutters from "../../../constants/gutters";
import colors from "../../../constants/colors";

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 ${gutters.half};

    svg {
        filter: drop-shadow(0px 0px 1px ${colors.black});

        :hover {
            cursor: pointer;
        }
    }

    label:hover {
        cursor: pointer;
    }
`;

export const StyledCheckbox = styled.input`
    display: none;
`;
