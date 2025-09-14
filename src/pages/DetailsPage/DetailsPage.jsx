import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Container from '../../components/Container/Container.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
import Icon from '../../components/Icon/Icon.jsx';

import { getCarById } from '../../redux/operations.js';
import { clearCurrentItem } from '../../redux/slice.js';
import { selectCurrentCar, selectIsLoading } from '../../redux/selectors.js';

import css from './DetailsPage.module.css';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCurrentCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(clearCurrentItem());
    dispatch(getCarById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Container>
        <Loader loadingState={isLoading} />
      </Container>
    );
  }

  if (!car) {
    return (
      <Container>
        <p className={css.notFound}>Car not found!</p>
      </Container>
    );
  }

  const {
    img,
    description,
    brand,
    model,
    type,
    year,
    address,
    mileage,
    rentalPrice,
    functionalities,
    fuelConsumption,
    engineSize,
    accessories,
  } = car;

  const [city, country] = (address?.split(',').map(s => s.trim()) || [])
    .slice(1, 3)
    .map(v => v || 'N/A');

  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <Container>
      {isLoading && <Loader loadingState={isLoading} />}
      <div className={css.wrapper}>
        <div className={css.leftSide}>
          <img className={css.img} src={img} alt={description} />
          <BookForm />
        </div>
        <div className={css.rightSide}>
          <div className={css.info}>
            <div className={css.titileContainer}>
              <h2 className={css.title}>{`${brand} ${model}, ${year}`}</h2>
              <span className={css.id}>Id: 9582</span>
            </div>

            <p className={css.address}>
              <Icon
                name="icon-Location"
                width={16}
                height={16}
                style={{ marginRight: '4px' }}
              />
              <span className={css.addressSpan}>{`${city}, ${country}`}</span>
              <span>{`Mileage: ${formattedMileage} km`}</span>
            </p>
            <span className={css.price}>{`$${rentalPrice}`}</span>
            <p className={css.description}>{description}</p>
          </div>

          <div className={css.conditions}>
            <h3 className={css.condTitle}>Rental Conditions:</h3>
            <ul className={css.condList}>
              {functionalities.map((func, idx) => (
                <li key={idx} className={css.condItem}>
                  <Icon
                    name="icon-check-circle"
                    width={16}
                    height={16}
                    style={{ marginRight: '8px' }}
                  />
                  {func}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.specification}>
            <h3 className={css.specTitle}>Car Specifications:</h3>
            <ul className={css.specLits}>
              <li className={css.specItem}>
                <Icon
                  name="icon-calendar"
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                {`Year: ${year}`}
              </li>
              <li className={css.specItem}>
                <Icon
                  name="icon-car"
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                {`Type: ${type}`}
              </li>
              <li className={css.specItem}>
                <Icon
                  name="icon-fuel-pump"
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                {`Fuel Consumption: ${fuelConsumption}`}
              </li>
              <li className={css.specItem}>
                <Icon
                  name="icon-gear"
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                {`Engine Size: ${engineSize}`}
              </li>
            </ul>
          </div>

          <div className={css.accessorios}>
            <h3 className={css.accTitle}>Accessories and functionalities:</h3>
            <ul className={css.accList}>
              {accessories.map((acc, idx) => (
                <li key={idx} className={css.accItem}>
                  <Icon
                    name="icon-check-circle"
                    width={16}
                    height={16}
                    style={{ marginRight: '8px' }}
                  />
                  {acc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DetailsPage;
