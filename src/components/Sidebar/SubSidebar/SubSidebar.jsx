import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
    SubSidebarWrapper,
    TopSection,
    SidebarItems
} from "./SubSidebar.styled";

export const SubSidebar = ({ visible, handleBackClick }) => {
    return (
        <SubSidebarWrapper visible={visible}>
            <TopSection>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={handleBackClick}
                />
            </TopSection>

            <SidebarItems>Sidebar items</SidebarItems>
        </SubSidebarWrapper>
    );
};

SubSidebar.propTypes = {
    visible: PropTypes.bool,
    handleBackClick: PropTypes.func
};

SubSidebar.defaultProps = {
    visible: true,
    handleBackClick: () => {}
};

export default SubSidebar;
