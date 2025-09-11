import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import Container from '../../components/Container/Container.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.hero}>
      <Container>
        <div className={css.wrapper}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <h2 className={css.subtitle}>
            Reliable and budget-friendly rentals for any journey
          </h2>
          <Button className={css.btn} onClick={handleClick}>
            View Catalog
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
