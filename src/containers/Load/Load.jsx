import { Loading, Error } from '../';

const Load = ({ isLoading, hasError, children }) => {
    return isLoading ? <Loading /> : hasError ? <Error /> : children;
};

export default Load;
