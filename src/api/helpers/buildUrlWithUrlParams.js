export const buildUrlWithUrlParams = (url, urlParams) => {
    const paramsArray = [];

    Object.keys(urlParams).map(key =>
        paramsArray.push(`${key}=${urlParams[key]}`)
    );

    const paramsString = paramsArray.join("&");

    return `${url}?${paramsString}`;
};

export default buildUrlWithUrlParams;
