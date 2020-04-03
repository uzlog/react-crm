import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "use-onclickoutside";
import TextInput from "../TextInput/TextInput";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import { StyledSearch } from "./Search.styled";

const Search = ({
    displayDropdown,
    defaultDropdownOpen,
    dropdownLocation,
    initialSearchTerm,
    children,
    ...textInputProps
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(defaultDropdownOpen);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const ref = useRef();
    useOnClickOutside(ref, () => setDropdownVisible(false));

    const handleSearchOnFocus = () => {
        return searchTerm.length && setDropdownVisible(true);
    };

    useEffect(() => {
        if (searchTerm.length) {
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
        }
    }, [searchTerm]);

    return (
        <StyledSearch ref={ref} onFocus={handleSearchOnFocus}>
            <TextInput
                handleOnChange={event =>
                    setSearchTerm(event.currentTarget.value)
                }
                value={searchTerm}
                {...textInputProps}
            />
            {children && (
                <SearchDropdown
                    visible={displayDropdown && dropdownVisible}
                    location={dropdownLocation}
                    searchTerm={searchTerm}
                >
                    {children}
                </SearchDropdown>
            )}
        </StyledSearch>
    );
};

Search.propTypes = {
    displayDropdown: PropTypes.bool,
    defaultDropdownOpen: PropTypes.bool,
    dropdownLocation: PropTypes.string,
    initialSearchTerm: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Search.defaultProps = {
    displayDropdown: true,
    defaultDropdownOpen: false,
    dropdownLocation: "bottom",
    initialSearchTerm: ""
};

export default Search;
