import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

const handleError = (error: AxiosError) => {
    if (error.response) {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const message = (error.response.data as any)?.message || 'API responded with an error';
        console.error(`[Jikan API Error] ${error.config?.url}:`, message);
    } else if (error.request) {
        console.error('[Jikan API Error] No response received:', error.request);
    } else {
        console.error('[Jikan API Error] Request setup error:', error.message);
    }
    return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => handleError(error),
);

export default axiosInstance;
