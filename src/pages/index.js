import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar/Sidebar";

const PageWrapper = ({ route: { sidebarEnabled, component: Component } }) => (
    <React.Fragment>
        <Sidebar visible={sidebarEnabled} />
        <Component />
    </React.Fragment>
);

PageWrapper.propTypes = {
    route: PropTypes.shape({
        sidebarEnabled: PropTypes.bool
    })
};

PageWrapper.defaultProps = {
    route: { sidebarEnabled: false }
};

export default PageWrapper;
