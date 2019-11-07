import React from "react";
import Search from "../../inputs/Search/Search";
import SidebarSearchDropdown from "./SidebarSearchDropdown/SidebarSearchDropdown";

export const SidebarSearch = () => {
    return (
        <Search dropdownLocation="right">
            <SidebarSearchDropdown />
        </Search>
    );
};

export default SidebarSearch;
