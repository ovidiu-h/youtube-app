import { useEffect, useState } from 'react';
import { asyncRequest } from './makeRequest';

export const useFetch = (url, params = {}, delay = 0) => {
    const [data, setData] = useState(null);
    const [hasError, setHasError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const asyncUrl = `${url}?${new URLSearchParams(params).toString()}`;

    useEffect(() => {
        setIsLoading(true);

        // delay requests due to api calls limitation.
        const timer = setTimeout(async () => {
            try {
                const response = await asyncRequest(asyncUrl);

                setHasError(!!response.detail);
                setData(response);
            } catch (err) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [asyncUrl, delay]);

    return { data, hasError, isLoading };
};
