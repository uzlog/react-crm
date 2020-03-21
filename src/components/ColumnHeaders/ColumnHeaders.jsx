import React from "react";
import { StyledColumns, StyledColumn } from "./ColumnHeaders.styled";

export const ColumnHeaders = () => {
    return (
        <StyledColumns>
            <StyledColumn>Test 1</StyledColumn>
            <StyledColumn>Test 2</StyledColumn>
            <StyledColumn>Test 3</StyledColumn>
        </StyledColumns>
    );
};

export default ColumnHeaders;
