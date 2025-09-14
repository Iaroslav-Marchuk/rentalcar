import { Link } from 'react-router-dom';
import { useState } from 'react';

import Container from '../Container/Container.jsx';
import Icon from '../Icon/Icon.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';

import css from './Header.module.css';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Link to="/" className={css.logo}>
            <Icon name="icon-Logo" width={104} height={16} />
          </Link>
          <Navigation className={css.navigation} />
          <button className={css.burgerBtn} onClick={handleClick}>
            <Icon name="icon-burger" width={16} height={16} />
          </button>
        </div>
      </Container>
      <ModalOverlay isOpen={modalIsOpen} onClose={closeModal}>
        <MobileMenu onClose={closeModal} />
      </ModalOverlay>
    </header>
  );
};

export default Header;
