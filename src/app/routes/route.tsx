import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import MainPage from '../../pages/main-page';
import DetailedPage from '../../pages/detailed-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'anime/:id',
                // path: '/anime/1',
                element: <DetailedPage />,
            },
        ],
    },
]);

export default router;
