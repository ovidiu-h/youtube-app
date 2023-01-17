import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = ({ path, icon, label }) => {
    return (
        <NavLink to={path} className="nav-item">
            {icon}
            {label}
        </NavLink>
    );
};

export default NavItem;
