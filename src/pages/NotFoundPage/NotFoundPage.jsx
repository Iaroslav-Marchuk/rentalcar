import { NavLink } from 'react-router-dom';

import Container from '../../components/Container/Container.jsx';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <Container>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>Sorry, we couldn't find this page</p>
        <NavLink to="/" className={css.link}>
          Go back to Home Page
        </NavLink>
      </Container>
    </div>
  );
};

export default NotFoundPage;
