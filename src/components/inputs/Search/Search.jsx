import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "use-onclickoutside";
import TextInput from "../TextInput/TextInput";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import { StyledSearch } from "./Search.styled";

const Search = ({ displayDropdown, dropdownLocation, children }) => {
    const [dropdownVisible, setDropdownVisible] = useState(displayDropdown);
    const ref = useRef();
    useOnClickOutside(ref, () => setDropdownVisible(false));

    const handleSearchChange = event => {
        const searchValue = event.currentTarget.value;

        setDropdownVisible(searchValue.length);
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
    dropdownLocation: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Search.defaultProps = {
    displayDropdown: true,
    dropdownLocation: "bottom"
};

export default Search;
