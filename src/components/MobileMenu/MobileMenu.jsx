import { NavLink } from 'react-router-dom';

import css from './MobileMenu.module.css';

const MobileMenu = ({ onClose }) => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.link} onClick={onClose}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={css.link} onClick={onClose}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default MobileMenu;
