import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@icon-park/react';
import './SearchForm.scss';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();

        if (!searchQuery) return;
        navigate(`/search/${searchQuery}`);
        setSearchQuery('');
    };

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(ev) => setSearchQuery(ev.target.value)} />
            <button type="submit">
                <Search />
            </button>
        </form>
    );
};

export default SearchForm;
