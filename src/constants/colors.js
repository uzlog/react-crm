import { lighten } from "polished";

const defaultPrimaryColor = "#1c252f";

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
    borders: {
        light: lighten(0.5, defaultBorderColor),
        normal: lighten(0.2, defaultBorderColor),
        dark: defaultBorderColor
    }
};

export default colors;
