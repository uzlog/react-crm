import React from "react";
import PropTypes from "prop-types";
import { StyledDropdown } from "./SearchDropdown.styled";

export const SearchDropdown = ({ visible, location, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <StyledDropdown location={location}>
            {React.cloneElement(children, { visible })}
        </StyledDropdown>
    );
};

SearchDropdown.propTypes = {
    visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    location: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

SearchDropdown.defaultProps = {
    visible: false,
    location: "right"
};

export default SearchDropdown;
