import React from "react";
import colors from "../../../constants/colors";
import Button from "../Button";

export const Info = props => (
    <Button background={colors.secondary.dark} {...props} />
);

export default Info;
