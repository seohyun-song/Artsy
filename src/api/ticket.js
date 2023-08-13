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
                categoryId: 1,
                title: '영화제목',
                showDate: '2023-08-14',
            },
        ];

        return data;
    },
};

export default ticketApi;
