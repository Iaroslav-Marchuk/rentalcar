import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './CarCard.module.css';

const CarCard = ({ car }) => {
  const {
    img,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const [city, country] = (address?.split(',').map(s => s.trim()) || [])
    .slice(1, 3)
    .map(v => v || 'N/A');

  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <div className={css.CarCardontainer}>
      <img className={css.img} src={img} alt={description} />
      <div className={css.titleWrapper}>
        <h2 className={css.title}>
          {brand} <span className={css.model}>{model}</span>, {year}
        </h2>
        <p className={css.price}>{`$${rentalPrice}`}</p>
      </div>
      <div className={css.techWrapper}>
        <div className={css.techRow}>
          <span className={css.techItem}>{city}</span>
          <span className={css.techItem}>{country}</span>
          <span className={css.techItem}>{rentalCompany}</span>
        </div>
        <div className={css.techRow}>
          <span className={css.techItem}>{type}</span>
          <span
            className={`${css.techItem} ${css.last}`}
          >{`${formattedMileage} km`}</span>
        </div>
      </div>

      <Button className={css.btn} onClick={handleClick}>
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
