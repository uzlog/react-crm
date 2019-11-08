import React, { useState } from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem/SidebarItem";
import Search from "./SidebarSearch/SidebarSearch";
import SubSidebar from "./SubSidebar/SubSidebar";
import { SidebarWrapper } from "./Sidebar.styled";

const Sidebar = ({ visible }) => {
    const [subSidebarOpen, setSubSidebarOpen] = useState(false);

    if (!visible) {
        return null;
    }

    // For testing, delete later.
    const sidebarItemClicked = () => {
        setSubSidebarOpen(!subSidebarOpen);
    };

    const handleSubSidebarClose = () => {
        setSubSidebarOpen(false);
    };

    return (
        <>
            <SidebarWrapper>
                <Search />
                <SidebarItem handleOnClick={sidebarItemClicked} />
            </SidebarWrapper>
            <SubSidebar
                visible={subSidebarOpen}
                handleBackClick={handleSubSidebarClose}
            />
        </>
    );
};

Sidebar.propTypes = {
    visible: PropTypes.bool
};

Sidebar.defaultProps = {
    visible: true
};

export default Sidebar;
