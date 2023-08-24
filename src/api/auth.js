import axios from 'axios';
import { ERROR_MESSAGE } from '@constants/message';
import useToastContext from '@hooks/useToastContext';

const { VITE_API_URL } = import.meta.env;

const config = {
    timeout: 3000,
    baseURL: VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

const axiosAuthInstance = axios.create(config);

axiosAuthInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const toast = useToastContext();

        const type = error?.response?.data?.error?.type;
        if (!type || type === ERROR_TYPE.INTERNAL_SERVER_ERROR) {
            toast.show(ERROR_MESSAGE.unexpected);
        }

        return Promise.reject(error);
    }
);

export default axiosAuthInstance;
