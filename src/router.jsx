import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from '@pages/Home/Home.jsx';
import List from '@pages/List/List.jsx';
import Detail from '@pages/Detail/Detail.jsx';
import PageNotFound from '@pages/PageNotFound/PageNotFound.jsx';
import Signin from '@pages/Signin/Signin.jsx';
import Register from '@pages/Register/Register.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'list',
                element: <List />,
            },
            {
                path: 'detail',
                element: <Detail />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
    {
        path: '/signin',
        element: <Signin />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;
