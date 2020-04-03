import React from "react";
import PropTypes from "prop-types";
import colors from "../../../../constants/colors";
import { StyledDropdown } from "./SearchDropdown.styled";

export const SearchDropdown = ({
    visible,
    location,
    background,
    searchTerm,
    children
}) => {
    if (!visible) {
        return null;
    }

    return (
        <StyledDropdown location={location} background={background}>
            {React.cloneElement(children, { visible, searchTerm })}
        </StyledDropdown>
    );
};

SearchDropdown.propTypes = {
    visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    location: PropTypes.string,
    background: PropTypes.string,
    searchTerm: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

SearchDropdown.defaultProps = {
    visible: false,
    background: colors.gray.normal,
    location: "right",
    searchTerm: ""
};

export default SearchDropdown;
