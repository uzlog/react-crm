import React from "react";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import boxShadows from "../../constants/boxShadows";
import { StyledWidget, widgetHeights } from "./Widget.styled";

export const Widget = ({
    backgroundColor,
    width,
    height,
    boxShadow,
    round
}) => {
    return (
        <StyledWidget
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            boxShadow={boxShadow}
            round={round}
        >
            Widget
        </StyledWidget>
    );
};

Widget.propTypes = {
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    boxShadow: PropTypes.string,
    round: PropTypes.bool
};

Widget.defaultProps = {
    backgroundColor: colors.white,
    width: "100%",
    height: widgetHeights.medium,
    boxShadow: boxShadows.light.medium,
    round: false
};

export default Widget;
