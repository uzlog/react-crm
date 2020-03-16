export const debounce = (fn, time) => {
    let timeout;

    // eslint-disable-next-line func-names
    return function(...args) {
        // <-- not an arrow function
        const functionCall = () => fn.apply(this, args);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};

export default debounce;
