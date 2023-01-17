import { useParams } from 'react-router-dom';
import { Comments, Player } from '../../components';
import { Load, VideoList } from '../../containers';
import { useFetch } from '../../utils/hooks';

import { Info } from './components';
import './Watch.scss';

const Watch = () => {
    const { video_id } = useParams();

    const details = useFetch('/video/details', { video_id });
    const recommendations = useFetch('/video/recommendations', { video_id }, 1500);
    const comments = useFetch('/video/comments', { video_id }, 3000);

    return (
        <div className="page-watch">
            <div className="video-content">
                <Player details={details} />

                {details?.data?.title && (
                    <>
                        <Info details={details.data}></Info>
                        {comments?.data?.comments?.length > 0 && <Comments comments={comments.data}></Comments>}
                    </>
                )}
            </div>

            {!recommendations.hasError && (
                <div className="video-recommendations">
                    <Load isLoading={recommendations.isLoading}>
                        <h2 className="video-recommendations-title">Recommended videos</h2>
                        <VideoList videos={recommendations?.data?.videos} />
                    </Load>
                </div>
            )}
        </div>
    );
};

export default Watch;
