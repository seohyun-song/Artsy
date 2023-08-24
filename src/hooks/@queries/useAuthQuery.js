import axiosAuthInstance from '@api/auth';
import { useQuery } from 'react-query';

import { QUERY_KEY } from '@hooks/@queries/useUserInfoQuery';

const useAuthQuery = () => {
    const fetcher = () => axiosAuthInstance.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    const query = useQuery([QUERY_KEY], fetcher, options);
    return query;
};

export default useAuthQuery;
