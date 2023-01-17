import { Outlet, useParams } from 'react-router-dom';
import { Image, NavItem } from '../../components';
import { Load } from '../../containers';
import { useFetch } from '../../utils/hooks';

import { CarouselVideo, Film } from '@icon-park/react';
import './Channel.scss';

const Channel = () => {
    const { channel_id } = useParams();
    const { data, isLoading, hasError } = useFetch('/channel/details', { channel_id });

    return (
        <div className="page page-channel">
            <Load isLoading={isLoading} hasError={hasError}>
                <div className="channel-banner">
                    <Image src={data?.banner?.reverse?.()?.[0]?.url} alt="banner" />
                </div>
                <div className="channel-card">
                    <div className="avatar">
                        <Image src={data?.avatar?.reverse?.()?.[0]?.url} alt="avatar" />
                    </div>
                    <div>
                        <h2>{data?.title}</h2>
                        <strong>{data?.subscriber_count}</strong> <small>since</small> {data?.creation_date}
                    </div>
                    <p>{data?.description}</p>
                </div>

                <nav>
                    <NavItem path="./" icon={<Film />} label="Video" />
                    <NavItem path="./shorts" icon={<CarouselVideo />} label="Shorts" />
                </nav>

                <Outlet />
            </Load>
        </div>
    );
};

export default Channel;
