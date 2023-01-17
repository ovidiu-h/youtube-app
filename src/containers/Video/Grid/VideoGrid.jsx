import { VideoCard } from './../../';
import './VideoGrid.scss';

const VideoGrid = ({ videos }) => {
    if (!videos?.length) return;

    return (
        <div className="video-grid">
            {videos.map((video, idx) => (
                <VideoCard video={video} key={idx} />
            ))}
        </div>
    );
};

export default VideoGrid;
