import React from "react";
import colors from "../../../constants/colors";
import Button from "../Button";

export const Warning = props => (
    <Button background={colors.warning} {...props} />
);

export default Warning;
