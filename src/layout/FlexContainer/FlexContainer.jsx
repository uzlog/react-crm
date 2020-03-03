import React from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "../../constants/propTypes";
import { StyledFlexContainer } from "./FlexContainer.styled";

export const FlexContainer = ({ children, ...restProps }) => {
    return <StyledFlexContainer {...restProps}>{children}</StyledFlexContainer>;
};

FlexContainer.propTypes = {
    direction: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    wrap: PropTypes.string,
    children: childrenPropType.isRequired
};

FlexContainer.defaultProps = {
    direction: "column",
    alignItems: "space-around",
    alignContent: "space-around",
    wrap: "wrap"
};

export default FlexContainer;
