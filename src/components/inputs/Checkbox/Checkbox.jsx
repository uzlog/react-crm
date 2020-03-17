import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledCheckboxWrapper, StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = ({ className, checked, onChange, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = event => {
        const checkedVal = event.target.checked;

        console.log("You changed!", checkedVal);

        setIsChecked(checkedVal);
        onChange(checkedVal);
    };

    return (
        <StyledCheckboxWrapper className={className}>
            <StyledCheckbox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </StyledCheckboxWrapper>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    className: "",
    checked: false,
    onChange: () => {}
};

export default Checkbox;
