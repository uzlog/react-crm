import { valueToRem } from "../helpers/valueToPoint";

const defaultFontSize = 1.2;

const gutters = {
    extraSmall: valueToRem(defaultFontSize * 0.3333),
    small: valueToRem(defaultFontSize * 0.6666),
    medium: valueToRem(defaultFontSize),
    large: valueToRem(defaultFontSize * 2),
    extraLarge: valueToRem(defaultFontSize * 2)
};

export default gutters;
