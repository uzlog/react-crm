import styled from "styled-components";
import colors from "../../constants/colors";

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.primary.normal};
    width: 15vw;
    min-width: 175px;
    max-width: 275px;
    color: white;
`;
