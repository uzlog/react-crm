import { lighten, darken } from "polished";

const defaultPrimaryColor = "#07689f";

const defaultSecondayColor = "#a2d5f2";

const defaultTertiaryColor = "#ff7e67";

const defaultGray = "#fafafa";

const defaultBorderColor = "#000000";

export const colors = {
    white: "#ffffff",
    black: "#000000",
    warning: "orange",
    success: "green",
    gray: {
        light: lighten(0.05, defaultGray),
        normal: defaultGray,
        dark: darken(0.05, defaultGray)
    },
    primary: {
        light: lighten(0.2, defaultPrimaryColor),
        normal: defaultPrimaryColor,
        dark: darken(0.2, defaultPrimaryColor)
    },
    secondary: {
        light: lighten(0.1, defaultSecondayColor),
        normal: defaultSecondayColor,
        dark: darken(0.1, defaultSecondayColor)
    },
    tertiary: {
        light: lighten(0.1, defaultTertiaryColor),
        normal: defaultTertiaryColor,
        dark: darken(0.1, defaultTertiaryColor)
    },
    borders: {
        light: lighten(0.5, defaultBorderColor),
        normal: lighten(0.2, defaultBorderColor),
        dark: defaultBorderColor
    }
};

export default colors;
