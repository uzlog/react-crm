import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import colors from "../../../constants/colors";
import { StyledCheckboxWrapper, StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = ({ checked, name, label, className, onChange }) => {
    const [checkedState, setCheckedState] = useState(checked);

    const handleCheck = event => {
        event.stopPropagation();
        setCheckedState(!checkedState);
        onChange(event);
    };

    return (
        <StyledCheckboxWrapper className={className}>
            <FontAwesomeIcon
                icon={checkedState ? faCheckSquare : faSquare}
                onClick={handleCheck}
                color={checkedState ? colors.black : colors.lighGray}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label type="text" id={name} htmlFor={name} onClick={handleCheck}>
                <StyledCheckbox
                    type="checkbox"
                    name={name}
                    id={name}
                    checked={checkedState}
                    readOnly
                />
                {label}
            </label>
        </StyledCheckboxWrapper>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    className: "",
    checked: false,
    name: "",
    label: "",
    onChange: () => {}
};

export default Checkbox;
