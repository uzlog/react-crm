import React from "react";
import PropTypes from "prop-types";
import colors from "../../../constants/colors";
import gutters from "../../../constants/gutters";
import fontSizes from "../../../constants/fontSizes";
import { StyledInput } from "./TextInput.styled";

const TextInput = ({
    handleOnChange,
    background,
    color,
    width,
    padding,
    fontSize
}) => {
    return (
        <StyledInput
            placeholder="Search..."
            onChange={handleOnChange}
            background={background}
            color={color}
            width={width}
            padding={padding}
            fontSize={fontSize}
        />
    );
};

TextInput.propTypes = {
    handleOnChange: PropTypes.func,
    background: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string
};

TextInput.defaultProps = {
    handleOnChange: () => {},
    background: "none",
    color: colors.white,
    width: "100%",
    padding: gutters.oneThird,
    fontSize: fontSizes.medium
};

export default TextInput;
