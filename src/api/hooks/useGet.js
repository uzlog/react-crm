import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import isEqual from "lodash/isEqual";
import buildUrlWithUrlParams from "../helpers/buildUrlWithUrlParams";
import usePreviousProp from "../../hooks/usePreviousProp";

export const useGet = ({ url, urlParams = {}, requestOptions = {} } = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(false);
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
            setIsLoading(true);

            try {
                const data = await fetch(urlString, requestOptions);

                if (!data.ok) {
                    throw data;
                }

                const parsedData = await data.json();
                setResponse(parsedData);
            } catch (err) {
                setIsLoading(false);

                if (err instanceof Error) {
                    return setError({ message: err.message });
                }

                const { statusCode, message } = await err.json();

                return setError({
                    statusCode,
                    message
                });
            }

            return setIsLoading(false);
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
