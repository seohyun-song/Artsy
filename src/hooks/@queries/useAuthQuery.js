import { useQuery } from 'react-query';

import { QUERY_KEY } from '@hooks/@queries/useUserInfoQuery';
import authApi from '@api/auth';

// const get = async (path) => {
//     const api = authApi();
//     const response = await api.get(path, options);
//     return response.data;
// };

//TODO: 로그인, 로그아웃에 따라 유저의 로그인상태값을 바꾸기
const useAuthQuery = () => {
    const api = authApi();

    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    const query = useQuery([QUERY_KEY + '/auth'], fetcher, options);
    return query;
};

export default useAuthQuery;
