import axiosInstance from './';

const ticketApi = {
    endpoint: {
        tickets: () => `/api/user/tickets`,
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    //   호출할때 const { data } = useQuery(
    //     ["tickets", categoryId],
    //     ticketApi.getTickets,
    //   );
    getTickets: async ({ queryKey }) => {
        // const [_, categoryId] = queryKey;
        // const response = await axiosInstance.get(`${ticketApi.endpoint.schedules()}?categoryId=${categoryId}`, {
        //     headers: { ...ticketApi.headers },
        // });

        // return response;

        // api 대신 dummy data 사용
        const data = [
            {
                category: '영화',
                title: '영화제목입니다',
                showDate: '2023-08-14',
                rating: '5',
            },
            {
                category: '뮤지컬',
                title: '뮤지컬제목입니다',
                showDate: '2023-08-14',
                rating: '4',
            },
            {
                category: '뮤지컬',
                title: '뮤지컬제목입니다',
                showDate: '2023-08-14',
                rating: '4',
            },
            {
                category: '콘서트',
                title: '콘서트제목제목입니다',
                showDate: '2023-08-14',
                rating: '4',
            },
            {
                category: '연극',
                title: '연극제목',
                showDate: '2023-08-14',
                rating: '4',
            },
            {
                category: '전시',
                title: '전시제목',
                showDate: '2023-08-14',
                rating: '4',
            },
        ];

        return data;
    },
};

export default ticketApi;
