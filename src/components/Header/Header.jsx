import { Link } from 'react-router-dom';

import Container from '../Container/Container.jsx';
import Icon from '../Icon/Icon.jsx';
import Navigation from '../Navigation/Navigation.jsx';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Link to="/" className={css.logo}>
            <Icon name="icon-Logo" width={104} height={16} />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
