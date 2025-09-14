import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel.jsx';
import Button from '../../components/Button/Button.jsx';
import Catalog from '../../components/Catalog/Catalog.jsx';
import Container from '../../components/Container/Container.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import { getAllCars } from '../../redux/operations.js';
import { clearFilters } from '../../redux/slice.js';

import {
  selectCatalog,
  selectCurrentPage,
  selectFilters,
  selectIsError,
  selectIsLoading,
  selectTotalPages,
} from '../../redux/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const cars = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilters());

    dispatch(getAllCars({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(getAllCars({ ...filters, page: currentPage + 1 }));
    }
  };

  return (
    <Container>
      <FilterPanel />
      {isLoading && cars.length === 0 && <Loader loadingState={isLoading} />}
      {isError && <p>{isError}</p>}
      {!isError && cars.length > 0 && <Catalog />}
      {!isLoading && !isError && cars.length === 0 && (
        <p className={css.noResults}>No results!</p>
      )}

      {currentPage < totalPages && (
        <Button className={css.loadMoreBtn} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </Container>
  );
};
export default CatalogPage;
