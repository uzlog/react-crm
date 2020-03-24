import React from "react";
import PropTypes from "prop-types";
import gutters from "../../constants/gutters";
import { StyledColumns, StyledColumn } from "./ColumnHeaders.styled";

export const ColumnHeaders = ({ pr, pl }) => {
    return (
        <StyledColumns m={0} pr={pr} pl={pl} py={gutters.half}>
            <StyledColumn>Test 1</StyledColumn>
            <StyledColumn>Test 2</StyledColumn>
            <StyledColumn>Test 3</StyledColumn>
            <StyledColumn>Test 4</StyledColumn>
            <StyledColumn>Test 5</StyledColumn>
        </StyledColumns>
    );
};

ColumnHeaders.propTypes = {
    pr: PropTypes.string,
    pl: PropTypes.string
};

ColumnHeaders.defaultProps = {
    pr: gutters.half,
    pl: gutters.half
};

export default ColumnHeaders;
