import axios from 'axios';
import ENV from '../config/config';

const axiosInstance = axios.create({
    baseURL: ENV.serverUrl || '',
});

export const req = async (requestConfig) => {
    try {
        const response = await axiosInstance(requestConfig);
        return response.data;
    } catch (e) {
        return {
            success: false,
            message: e.response?.data?.message,
        };
    }
};

export function prependBaseUrl(url) {
    return `${ENV.serverUrl}/${url}`;
}
