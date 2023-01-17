import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Header, Navbar } from './containers';

import { Channel, NotFound, Search, Trending, Watch } from './pages';
import ChannelContent from './pages/Channel/ChannelContent';

import { navigation } from './utils/constants';

const Layout = () => (
    <div className="app">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
);

const Explore = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Explore />,
                children: [
                    ...navigation.map((nav) => {
                        return {
                            index: nav.isIndex,
                            path: nav.path,
                            element: <Trending section={nav.section} />,
                        };
                    }),
                    {
                        path: '/search/:query',
                        element: <Search />,
                    },
                    {
                        path: '/channel/:channel_id',
                        element: <Channel />,
                        children: [
                            {
                                index: true,
                                element: <ChannelContent type="videos" />,
                            },
                            {
                                path: '/channel/:channel_id/shorts',
                                element: <ChannelContent type="shorts" />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/watch/:video_id',
                element: <Watch />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
