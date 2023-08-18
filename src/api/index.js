import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const config = {
    timeout: 3000,
    baseURL: VITE_API_URL,
    withCredentials: true,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const { type, code } = error;
        if (!type || (type && code === 500)) {
            alert('앗! 오류가 발생했어요.' + '\n' + '잠시 후에 다시 시도해보세요.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
