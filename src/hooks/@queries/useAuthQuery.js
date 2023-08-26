import { useQuery } from 'react-query';

import { QUERY_KEY as userInfoPath } from '@hooks/@queries/useUserInfoQuery';
import authApi from '@api/auth';
import useAuthContext from '@hooks/useAuthContext';
export const QUERY_KEY_AUTH = 'auth';

const useAuthQuery = () => {
    const { setIsLogin } = useAuthContext();
    const api = authApi();
    const options = { retry: false };
    const fetchUser = async () => {
        const {
            data: { success },
        } = await api.get(userInfoPath);
        if (success) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        return success;
    };
    return useQuery([QUERY_KEY_AUTH], fetchUser, options);
};

export default useAuthQuery;
