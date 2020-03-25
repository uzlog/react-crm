import React from "react";
import PropTypes from "prop-types";
import { buttonSizes } from "../../constants/button";
import colors from "../../constants/colors";
import { StyledButton } from "./Button.styled";

export const Button = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};

Button.propTypes = {
    size: PropTypes.shape({
        fontSize: PropTypes.string,
        padding: PropTypes.string
    }),
    background: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
    size: buttonSizes.normal,
    background: colors.primary.normal,
    color: colors.white,
    fullWidth: false,
    disabled: false
};

export default Button;
