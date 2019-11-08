import React from "react";
import PropTypes from "prop-types";
import { Item } from "./SidebarItem.styled";
import routes from "../../../config/routes";

const SidebarItem = ({ handleOnClick }) =>
    routes.map(route => (
        <Item to={route.path} key={route.path} onClick={handleOnClick}>
            {route.description}
        </Item>
    ));

SidebarItem.propTypes = {
    handleOnClick: PropTypes.func
};

SidebarItem.defaultProps = {
    handleOnClick: () => {}
};

export default SidebarItem;
