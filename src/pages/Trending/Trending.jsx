import { Load, VideoGrid } from '../../containers';
import { useFetch } from '../../utils/hooks';

import './Trending.scss';

const Trending = ({ section }) => {
    const { data, isLoading, hasError } = useFetch('/trending/', { section });

    return (
        <div className="page">
            <h1 className="page-title">
                Trending <span>{section}</span>
            </h1>
            <Load isLoading={isLoading} hasError={hasError}>
                <VideoGrid videos={data?.videos} />
            </Load>
        </div>
    );
};

export default Trending;
