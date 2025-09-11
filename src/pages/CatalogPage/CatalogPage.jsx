import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button.jsx';
import Catalog from '../../components/Catalog/Catalog.jsx';
import Container from '../../components/Container/Container.jsx';
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
import { useEffect } from 'react';
import { getAllCars } from '../../redux/operations.js';
import {
  selectCatalog,
  selectCurrentPage,
  selectIsError,
  selectIsLoading,
  selectTotalPages,
} from '../../redux/selectors.js';
import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';

const CatalogPage = () => {
  const cars = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars({ page: 1 }));
    }
  }, [dispatch, cars.length]);

  const handleClick = () => {
    if (currentPage < totalPages) {
      dispatch(getAllCars({ page: currentPage + 1 }));
    }
  };

  return (
    <Container>
      <div className={css.filterWrapper}>
        <FilterBar />
        <Button className={css.searchBtn}>Search</Button>
      </div>

      {isLoading && <Loader loadingState={isLoading} />}
      {isError && <p>{isError}</p>}
      {!isError && cars.length > 0 && <Catalog />}
      {!isLoading && !isError && cars.length === 0 && (
        <p className={css.noResults}>The catalog is empty!</p>
      )}

      {currentPage < totalPages && (
        <Button className={css.loadMoreBtn} onClick={handleClick}>
          Load more
        </Button>
      )}
    </Container>
  );
};
export default CatalogPage;
