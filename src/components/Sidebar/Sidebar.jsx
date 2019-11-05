import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div>
            <h1>Sidebar!</h1>
        </div>
    );
};

Sidebar.propTypes = {
    visible: PropTypes.bool
};

Sidebar.defaultProps = {
    visible: true
};

export default Sidebar;
