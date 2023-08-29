import { useQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/percentage';

const useUserPercentQuery = () => {
    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    return useQuery([QUERY_KEY], fetcher, options);
};

export default useUserPercentQuery;
