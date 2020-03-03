import { transparentize } from "polished";

export const lightBoxShadowColor = "#ababab";
export const mediumBoxShadowColor = transparentize(0.2, lightBoxShadowColor);
export const darkBoxShadowColor = transparentize(0.2, lightBoxShadowColor);

export const smallBoxShadowSize = "0 0 2px 0px";
export const mediumBoxShadowSize = "0 0 4px 1px";
export const largeBoxShadowSize = "0 0 6px 3px";

export const boxShadows = {
    light: {
        small: `${smallBoxShadowSize} ${lightBoxShadowColor}`,
        medium: `${mediumBoxShadowSize} ${lightBoxShadowColor}`,
        large: `${largeBoxShadowSize} ${lightBoxShadowColor}`
    },
    normal: {
        small: `${smallBoxShadowSize} ${mediumBoxShadowColor}`,
        medium: `${mediumBoxShadowSize} ${mediumBoxShadowColor}`,
        large: `${largeBoxShadowSize} ${mediumBoxShadowColor}`
    },
    dark: {
        small: `${smallBoxShadowSize} ${darkBoxShadowColor}`,
        medium: `${mediumBoxShadowSize} ${darkBoxShadowColor}`,
        large: `${largeBoxShadowSize} ${darkBoxShadowColor}`
    }
};

export default boxShadows;
