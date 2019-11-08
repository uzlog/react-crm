import { valueToRem } from "../helpers/valueToPoint";

const defaultFontSize = 1.2;

export const fontSizes = {
    extraSmall: valueToRem(defaultFontSize * 0.3333),
    small: valueToRem(defaultFontSize * 0.6666),
    medium: valueToRem(defaultFontSize),
    large: valueToRem(defaultFontSize * 2),
    extraLarge: valueToRem(defaultFontSize * 2.35)
};

export const svgSizes = {
    extraSmall: valueToRem(defaultFontSize * 0.7),
    small: valueToRem(defaultFontSize * 1.1),
    medium: valueToRem(defaultFontSize * 1.5),
    large: valueToRem(defaultFontSize * 1.9),
    extraLarge: valueToRem(defaultFontSize * 2.3)
};

export default fontSizes;
