import { Link } from 'react-router-dom';
import { PlayOne } from '@icon-park/react';

import { formatNumber } from '../../../utils/helpers';
import './VideoCard.scss';
import { Image } from '../../../components';

const VideoCard = ({ video }) => {
    if (!video) return;

    return (
        <div className="card">
            <Link to={`/watch/${video.video_id}`} className="card-thumb">
                <Image src={video.thumbnails?.reverse?.()?.[0]?.url} alt={video.title} />
                <div className="card-video-length">{video.video_length}</div>
                <div className="card-play">
                    <PlayOne />
                </div>
            </Link>

            <div className="card-content">
                <h2 className="card-title">
                    <Link to={`/watch/${video.video_id}`}>{video.title}</Link>
                </h2>
                <h4 className="card-author">
                    <Link to={`/channel/${video.channel_id}/`}>{video.author}</Link>
                </h4>

                <div className="card-stats">
                    {formatNumber(video.number_of_views)} views - {video.published_time}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
