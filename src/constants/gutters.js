import valueToPx from "../helpers/valueToPoint";

const defaultGutter = 30;

const gutters = {
    oneThird: valueToPx(defaultGutter * 0.2),
    twoThirds: valueToPx(defaultGutter * 0.5),
    full: valueToPx(defaultGutter),
    double: valueToPx(defaultGutter * 2)
};

export default gutters;
