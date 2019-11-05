import { createGlobalStyle } from "styled-components";
import * as primary from "./primary";

const styles = {
    ...primary
};

const GlobalStyles = createGlobalStyle`
${Object.keys(styles).map(key => styles[key])}
`;

export default GlobalStyles;
