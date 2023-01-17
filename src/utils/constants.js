import { Home, Music, Film, GameHandle } from '@icon-park/react';

export const navigation = [
    {
        label: 'Home',
        path: '/',
        section: 'Now',
        icon: <Home />,
        isIndex: true,
    },
    {
        label: 'Music',
        path: '/music',
        section: 'Music',
        icon: <Music />,
    },
    {
        label: 'Movies',
        path: '/movies',
        section: 'Movies',
        icon: <Film />,
    },
    {
        label: 'Gaming',
        path: '/gaming',
        section: 'Gaming',
        icon: <GameHandle />,
    },
];
