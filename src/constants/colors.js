import { transparentize, lighten } from "polished";

const defaultPrimaryColor = "#1c252f";

const defaultBoxShadow = "#ababab";

const defaultBorderColor = "#000000";

export const colors = {
    white: "#ffffff",
    black: "#000000",
    gray: "gray",
    primary: {
        light: lighten(0.5, defaultPrimaryColor),
        normal: lighten(0.2, defaultPrimaryColor),
        dark: defaultPrimaryColor
    },
    boxShadows: {
        light: transparentize(0.33, defaultBoxShadow),
        normal: transparentize(0.66, defaultBoxShadow),
        dark: defaultBoxShadow
    },
    borders: {
        light: lighten(0.5, defaultBorderColor),
        normal: lighten(0.2, defaultBorderColor),
        dark: defaultBorderColor
    }
};

export default colors;
