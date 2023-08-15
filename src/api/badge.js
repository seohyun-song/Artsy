import axiosInstance from './';

const badgeApi = {
    endpoint: {
        userBadge: '/api/user/badge',
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    getUserBadge: async () => {
        const response = await axiosInstance.get(badgeApi.endpoint.userBadge, {
            headers: { ...badgeApi.headers },
        });
        return response;
    },
};

export default badgeApi;
