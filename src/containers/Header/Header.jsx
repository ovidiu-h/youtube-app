import { Link } from 'react-router-dom';
import { Image, SearchForm } from '../../components';
import Logo from '../../assets/logo.png';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                <Image src={Logo} alt="logo" />
            </Link>
            <SearchForm />
        </div>
    );
};

export default Header;
