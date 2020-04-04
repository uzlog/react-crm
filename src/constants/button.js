import fontSizes from "./fontSizes";
import gutters from "./gutters";
import colors from "./colors";

export const buttonSizes = {
    small: {
        fontSize: fontSizes.small,
        padding: `${gutters.oneThird} ${gutters.half}`
    },
    normal: {
        fontSize: fontSizes.medium,
        padding: `${gutters.half}`
    },
    large: {
        fontSize: fontSizes.large,
        padding: `${gutters.twoThirds}`
    }
};

export const buttonThemes = {
    normal: {
        background: colors.primary.normal
    },
    danger: {
        background: colors.tertiary.dark
    },
    info: {
        background: colors.secondary.dark
    },
    warning: {
        background: colors.warning
    },
    success: {
        background: colors.success
    }
};
