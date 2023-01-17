import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/helpers';
import { Image } from '../';

import './Comments.scss';

const Comments = ({ comments }) => {
    if (!comments) return;

    return (
        <div className="comments">
            <h3>{formatNumber(comments.total_number_of_comments)} Comments</h3>

            {comments.comments?.map((comment) => (
                <div className="comment" key={comment.id}>
                    <div className="comment-avatar">
                        <Image src={comment?.thumbnails?.reverse?.()?.[0]?.url} alt="avatar" />
                    </div>

                    <div className="comment-content">
                        <div className="comment-details">
                            <Link to={`/channel/${comment.author_channel_id}/`}>
                                <strong>{comment.author_name}</strong>
                            </Link>{' '}
                            - {comment.published_time}
                        </div>
                        <p>{comment.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
