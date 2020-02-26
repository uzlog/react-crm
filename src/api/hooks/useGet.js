import { useState, useEffect } from "react";
import isEqual from "lodash/isEqual";
import buildUrlWithUrlParams from "../helpers/buildUrlWithUrlParams";
import usePreviousProp from "../../hooks/usePreviousProp";

export const useGet = ({ url, urlParams = {}, requestOptions = {} } = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(false); // will be overwritten with response object
    const [error, setError] = useState(false);
    const previousUrl = usePreviousProp(url);
    const previousUrlParams = usePreviousProp(urlParams);
    const previousRequestOptions = usePreviousProp(requestOptions);

    let urlString = url;

    if (Object.keys(urlParams).length) {
        urlString = buildUrlWithUrlParams(urlString, urlParams);
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log("Making call!");
            setIsLoading(true);

            try {
                // eslint-disable-next-line no-undef
                const data = await fetch(urlString, requestOptions);
                const json = await data.json();
                console.log({ json });

                setResponse(json);
            } catch (err) {
                console.log({ err });
                setError(true);
            }

            setIsLoading(false);
        };

        if (
            url !== previousUrl ||
            !isEqual(urlParams, previousUrlParams) ||
            !isEqual(requestOptions, previousRequestOptions)
        ) {
            fetchData();
        }
    }, [url, urlParams, requestOptions]);

    return { isLoading, response, error };
};

export default useGet;
