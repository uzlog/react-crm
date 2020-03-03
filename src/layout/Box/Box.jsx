import React from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "../../constants/propTypes";
import gutters from "../../constants/gutters";
import { StyledBox } from "./Box.styled";

// TODO: Add responsiveness by having an array of object with the breakpoint, and the new props.
export const Box = ({ children, ...restProps }) => {
    return <StyledBox {...restProps}>{children}</StyledBox>;
};

/* eslint-disable react/require-default-props */
Box.propTypes = {
    m: PropTypes.string, // margin
    mt: PropTypes.string, // margin top
    mr: PropTypes.string, // margin right
    mb: PropTypes.string, // margin bottom
    ml: PropTypes.string, // margin left
    mx: PropTypes.string, // margin left + right
    my: PropTypes.string, // margin top + bottom
    p: PropTypes.string, // padding
    pt: PropTypes.string, // padding top
    pr: PropTypes.string, // padding right
    pb: PropTypes.string, // padding bottom
    pl: PropTypes.string, // padding left
    px: PropTypes.string, // padding left + right
    py: PropTypes.string, // padding top + bottom
    children: childrenPropType.isRequired
};

Box.defaultProps = {
    m: gutters.half
};

export default Box;
