import valueToPx from "../helpers/valueToPoint";

const defaultGutter = 30;

export const gutters = {
    oneThird: valueToPx(defaultGutter * 0.2),
    half: valueToPx(defaultGutter * 0.5),
    twoThirds: valueToPx(defaultGutter * 0.66),
    full: valueToPx(defaultGutter),
    double: valueToPx(defaultGutter * 2)
};

export default gutters;
