import axiosInstance from './';

const categoryApi = {
    endpoint: {
        category: () => `/api/categories`,
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
        const response = await axiosInstance.get(categoryApi.endpoint.category(), {
            headers: { ...categoryApi.headers },
        });
        const data = await response.data;
        const categoryData = await data.artsyData;
        return categoryData;
    },
};

export default categoryApi;
