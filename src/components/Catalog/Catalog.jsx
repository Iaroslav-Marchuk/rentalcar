import { useSelector } from 'react-redux';

import CarCard from '../CarCard/CarCard.jsx';
import Loader from '../Loader/Loader.jsx';

import { selectCatalog, selectIsLoading } from '../../redux/selectors.js';

import css from './Catalog.module.css';

const Catalog = () => {
  const cars = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading && cars.length === 0) {
    return <Loader loadingState={true} />;
  }

  return (
    <ul className={css.carsList}>
      {cars.map(car => (
        <li key={car.id} className={css.carsItem}>
          <CarCard car={car} />
        </li>
      ))}
      {isLoading && cars.length > 0 && <Loader loadingState={true} />}
    </ul>
  );
};

export default Catalog;
