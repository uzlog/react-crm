import React from "react";
import colors from "../../../constants/colors";
import Button from "../Button";

export const Danger = props => (
    <Button background={colors.tertiary.dark} {...props} />
);

export default Danger;
