import styled from "styled-components";
import gutters from "../../constants/gutters";
import boxShadows from "../../constants/boxShadows";

export const StyledSection = styled.div`
    padding: ${gutters.half};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex: 1;
    transition: all 0.25s ease-in-out;
`;

export const StyledClientBox = styled.div`
    display: flex;
    align-items: center;
    box-shadow: ${boxShadows.light.extraSmall};
    transition: all 0.25s ease-in-out;

    :hover {
        background: whitesmoke;
        box-shadow: ${boxShadows.normal.medium};

        ${StyledSection} {
            transform: scale(1.05);
        }
    }
`;

export const StyledAvatar = styled(StyledSection)`
    height: 45px;
    overflow: hidden;
    text-overflow: initial;
    flex: initial;

    img {
        height: 100%;
        border-radius: 50px;
    }
`;
