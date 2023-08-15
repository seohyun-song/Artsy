import axiosInstance from './';
// {
//     "artsyData": [
//       {
//         "name": "뮤지컬",
//         "color": "#ff0000"
//       }
//     ]
//   }
const categoryApi = {
    endpoint: {
        categories: '/api/categories',
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    getCategories: async () => {
        const response = await axiosInstance.get(categoryApi.endpoint.categories, {
            headers: { ...categoryApi.headers },
        });
        return response;
    },
};

export default categoryApi;
