import { useParams } from 'react-router-dom';
import { Load, VideoGrid } from '../../containers';
import { useFetch } from '../../utils/hooks';

import './Search.scss';

const Search = () => {
    const { query } = useParams();
    const { data, isLoading, hasError } = useFetch('/search/', { query });

    return (
        <div className="page">
            <h1 className="page-title">
                "<span>{query}</span>" search results:
            </h1>
            <Load isLoading={isLoading} hasError={hasError}>
                <VideoGrid videos={data?.videos} />
            </Load>
        </div>
    );
};

export default Search;
