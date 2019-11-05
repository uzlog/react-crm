import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar/Sidebar";
import { PageWrapper } from "./index.styled";

const Page = ({ route: { sidebarEnabled, component: Component } }) => (
    <PageWrapper>
        <Sidebar visible={sidebarEnabled} />
        <Component />
    </PageWrapper>
);

Page.propTypes = {
    route: PropTypes.shape({
        sidebarEnabled: PropTypes.bool.isRequired,
        component: PropTypes.elementType.isRequired
    })
};

Page.defaultProps = {
    route: { sidebarEnabled: false }
};

export default Page;
