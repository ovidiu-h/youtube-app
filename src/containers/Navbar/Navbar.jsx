import { NavItem } from '../../components';
import { navigation } from '../../utils/constants';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            {navigation.map((nav) => (
                <NavItem key={nav.path} path={nav.path} icon={nav.icon} label={nav.label} />
            ))}
        </div>
    );
};

export default Navbar;
