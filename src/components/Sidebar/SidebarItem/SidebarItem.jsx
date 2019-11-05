import React from "react";
import { Item } from "./SidebarItem.styled";
import routes from "../../../config/routes";

const SidebarItem = () =>
    routes.map(route => <Item to={route.path}>{route.description}</Item>);

export default SidebarItem;
