import React, { useRef, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { buttonSizes, buttonThemes } from "../../constants/button";
import colors from "../../constants/colors";
import { StyledButton } from "./Button.styled";

export const Button = ({ isLoading, disabled, children, ...restProps }) => {
    const itemRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);

    // We set the item width so if the button goes into a loading state, then it will retain the same width.
    useLayoutEffect(() => {
        if (itemRef.current) {
            setItemWidth(global.window.getComputedStyle(itemRef.current).width);
        }
    });

    return (
        <StyledButton
            {...restProps}
            disabled={disabled || isLoading}
            ref={itemRef}
            minWidth={isLoading && itemWidth}
        >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
        </StyledButton>
    );
};

Button.propTypes = {
    isLoading: PropTypes.bool,
    width: PropTypes.string,
    size: PropTypes.shape({
        fontSize: PropTypes.string,
        padding: PropTypes.string
    }),
    theme: PropTypes.shape({
        background: PropTypes.string
    }),
    background: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
    isLoading: false,
    width: "auto",
    size: buttonSizes.normal,
    theme: buttonThemes.normal,
    color: colors.white,
    fullWidth: false,
    disabled: false
};

export default Button;
