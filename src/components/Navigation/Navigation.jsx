import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './Navigation.module.css';

const Navigation = ({ className }) => {
  return (
    <nav className={clsx(css.navigation, className)}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
