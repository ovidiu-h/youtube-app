import { VideoCard } from './../../';
import './VideoList.scss';

const VideoList = ({ videos }) => {
    if (!videos?.length) return;

    return (
        <div className="video-list">
            {videos.map((video, idx) => (
                <VideoCard video={video} key={idx} />
            ))}
        </div>
    );
};

export default VideoList;
