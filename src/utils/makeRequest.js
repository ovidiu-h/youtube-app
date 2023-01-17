import axios from 'axios';

export const asyncRequest = async (url, params = {}) => {
    const { data } = await axios.request({
        method: 'GET',
        url: process.env.REACT_APP_API_URL + url,
        params,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_TOKEN,
        },
    });

    return data;
};
