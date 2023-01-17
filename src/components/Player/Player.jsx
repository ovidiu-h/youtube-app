import ReactPlayer from 'react-player/youtube';
import { Load } from '../../containers';

import './Player.scss';

const Player = ({ details }) => {
    if (!details) return;

    return (
        <div className="player">
            <div className="player-content">
                <Load isLoading={details.isLoading} hasError={details.hasError}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${details.data?.video_id}`}
                        width="100%"
                        height="100%"
                        className="video-player"
                        playing={true}
                        controls={true}
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 0,
                                },
                            },
                        }}
                    />
                </Load>
            </div>
        </div>
    );
};

export default Player;
