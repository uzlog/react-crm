import React from "react";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import { WidgetWrapper } from "./Widget.styled";

export const Widget = ({ backgroundColor, width }) => {
    return (
        <WidgetWrapper backgroundColor={backgroundColor} width={width}>
            Widget
        </WidgetWrapper>
    );
};

Widget.propTypes = {
    backgroundColor: PropTypes.string,
    width: PropTypes.string
};

Widget.defaultProps = {
    backgroundColor: colors.white,
    width: "100%"
};

export default Widget;
