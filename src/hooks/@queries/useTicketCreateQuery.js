import { useEffect } from 'react';
import { useMutation } from 'react-query';
import api from '@utils/api';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
import { useNavigate } from 'react-router-dom';

export const QUERY_KEY = '/api/user/ticket';

const useTicketCreateQuery = () => {
    const navigate = useNavigate();

    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.post(QUERY_KEY, data, headers);

    const query = useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
        onSuccess: (data) => navigate(`/ticket/detail/${data.id}`),
    });

    useEffect(() => {
        if (query.isError) {
            const errorType = query.error.response.data.error.type;

            switch (errorType) {
                case ERROR_TYPE.LIMIT_FILE_SIZE:
                    alert(ERROR_MESSAGE.limitFileSize);
                    break;
                case ERROR_TYPE.LIMIT_FILE_COUNT:
                    alert(ERROR_MESSAGE.limitFileCount);
                    break;

                case ERROR_TYPE.DISALLOW_FILE_TYPE:
                    alert(ERROR_MESSAGE.disallowFileType);
                    break;

                default:
                    alert('관리자에게 문의하세요');
            }
        }
    }, [query.isError]);

    return query;
};

export default useTicketCreateQuery;
