import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "use-onclickoutside";
import TextInput from "../TextInput/TextInput";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import { StyledSearch } from "./Search.styled";

const Search = ({
    displayDropdown,
    defaultDropdownOpen,
    dropdownLocation,
    children
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(defaultDropdownOpen);
    const ref = useRef();
    useOnClickOutside(ref, () => setDropdownVisible(false));

    const handleSearchChange = event => {
        const searchValue = event.currentTarget.value;

        if (searchValue) {
            setDropdownVisible(true);
        }
    };

    const handleSearchOnFocus = () => {
        setDropdownVisible(true);
    };

    return (
        <StyledSearch ref={ref} onFocus={handleSearchOnFocus}>
            <TextInput handleOnChange={handleSearchChange} />
            <SearchDropdown
                visible={displayDropdown && dropdownVisible}
                location={dropdownLocation}
            >
                {children}
            </SearchDropdown>
        </StyledSearch>
    );
};

Search.propTypes = {
    displayDropdown: PropTypes.bool,
    defaultDropdownOpen: PropTypes.bool,
    dropdownLocation: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Search.defaultProps = {
    displayDropdown: true,
    defaultDropdownOpen: false,
    dropdownLocation: "bottom"
};

export default Search;
