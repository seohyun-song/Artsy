import axiosInstance from './';

const categoryApi = {
    endpoint: {
        tickets: () => `/api/categories`,
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    //   호출할때 const { data } = useQuery(
    //     'category',
    //     categoryApi.getCategories,
    //   );
    getCategories: async ({ queryKey }) => {
        // const [_, categoryId] = queryKey;
        // const response = await axiosInstance.get(`${ticketApi.endpoint.schedules()}?categoryId=${categoryId}`, {
        //     headers: { ...ticketApi.headers },
        // });

        // return response;

        // api 대신 dummy data 사용
        const data = [
            {
                name: '영화',
            },
            {
                name: '뮤지컬',
            },
            {
                name: '연극',
            },
            {
                name: '전시',
            },
            {
                name: '콘서트',
            },
        ];

        return data;
    },
};

export default categoryApi;
