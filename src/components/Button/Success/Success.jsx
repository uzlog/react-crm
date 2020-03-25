import React from "react";
import colors from "../../../constants/colors";
import Button from "../Button";

export const Success = props => (
    <Button background={colors.success} {...props} />
);

export default Success;
