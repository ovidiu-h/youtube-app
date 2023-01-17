import { useParams } from 'react-router-dom';
import { VideoGrid, Load } from '../../containers';
import { useFetch } from '../../utils/hooks';

const ChannelContent = ({ type }) => {
    const { channel_id } = useParams();
    const { data, isLoading, hasError } = useFetch(`/channel/${type}`, { channel_id }, 1500);

    return (
        <div className="channel-content">
            <Load isLoading={isLoading} hasError={hasError}>
                {!data?.videos?.length ? 'Sorry, there are no videos!' : <VideoGrid videos={data?.videos} />}
            </Load>
        </div>
    );
};

export default ChannelContent;
