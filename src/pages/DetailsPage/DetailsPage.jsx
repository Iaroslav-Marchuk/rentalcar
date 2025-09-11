import { useParams } from 'react-router-dom';
import css from './DetailsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCarById } from '../../redux/operations.js';
import { selectCurrentCar, selectIsLoading } from '../../redux/selectors.js';
import Container from '../../components/Container/Container.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCurrentCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  return (
    <Container>
      {isLoading && <Loader loadingState={isLoading} />}
      {car && <pre>{JSON.stringify(car, null, 2)}</pre>}
    </Container>
  );
};
export default DetailsPage;
