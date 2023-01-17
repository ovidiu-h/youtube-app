import { Link } from 'react-router-dom';
import { formatNumber } from '../../../utils/helpers';

const Info = ({ details }) => {
    return (
        <div className="info">
            <h2>{details?.title}</h2>
            <Link to={`/channel/${details?.channel_id}/`}>{details?.author}</Link>

            <div className="info details">
                <div>
                    <h4>Published on {details.published_time}</h4>
                    <h4>{formatNumber(details.number_of_views)} views</h4>
                </div>

                <div className="description">{details.description}</div>

                <div className="tags">
                    {details?.keywords?.map((tag, idx) => (
                        <Link to={`/search/${tag}`} className="tag" key={idx}>
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
