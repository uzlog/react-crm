import fontSizes from "./fontSizes";
import gutters from "./gutters";

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
