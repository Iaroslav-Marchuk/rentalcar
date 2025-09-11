import { useSelector } from 'react-redux';
import css from './Catalog.module.css';

import { selectCatalog } from '../../redux/selectors.js';
import CarCard from '../CarCard/CarCard.jsx';

const Catalog = () => {
  const cars = useSelector(selectCatalog);

  return (
    <ul className={css.carsList}>
      {cars.map(car => (
        <li key={car.id} className={css.carsItem}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
