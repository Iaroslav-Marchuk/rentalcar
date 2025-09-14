import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Icon from '../../components/Icon/Icon.jsx';
import Button from '../../components/Button/Button.jsx';
import Filter from '../../components/Filter/Filter.jsx';

import { getAllBrands, getAllCars } from '../../redux/operations.js';
import { selectBrands, selectFilters } from '../../redux/selectors.js';
import { clearFilters, setFilter } from '../../redux/slice.js';

import css from './FilterPanel.module.css';

const FilterPanel = () => {
  const brandsList = useSelector(selectBrands);
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  const pricesList = ['30', '40', '50', '60', '70', '80'];

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(getAllCars({ ...filters, page: 1 }));
    console.log(filters);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    dispatch(getAllCars({ page: 1 }));
  };
  const brands = brandsList.map(b => ({ value: b, label: b }));
  const prices = pricesList.map(p => ({ value: p, label: p }));

  return (
    <div className={css.filterWrapper}>
      <Filter
        label="Car brand"
        options={brands}
        value={
          filters.brand ? { value: filters.brand, label: filters.brand } : null
        }
        onChange={option =>
          dispatch(setFilter({ brand: option ? option.value : null }))
        }
        placeholder="Choose a brand"
      />

      <Filter
        label="Price / 1 hour"
        options={prices}
        value={
          filters.rentalPrice
            ? { value: filters.price, label: filters.rentalPrice }
            : null
        }
        onChange={option =>
          dispatch(setFilter({ rentalPrice: option ? option.value : null }))
        }
        placeholder="Choose a price"
      />

      <div className={css.rangeWrapper}>
        <label className={css.rangeLabel}>Car mileage / km</label>

        <div className={css.inputsRow}>
          <div className={css.inputWrapper}>
            <span className={css.fakePlaceholder}>From</span>
            <input
              className={css.rangeInputLeft}
              type="text"
              value={
                filters.minMileage
                  ? Number(filters.minMileage).toLocaleString('en-US')
                  : ''
              }
              onChange={e => {
                const raw = e.target.value.replace(/\D/g, '');
                if (raw === '') {
                  dispatch(setFilter({ minMileage: null }));
                } else {
                  dispatch(setFilter({ minMileage: raw }));
                }
              }}
            />
          </div>

          <div className={css.inputWrapper}>
            <span className={css.fakePlaceholder}>To</span>
            <input
              className={css.rangeInputRight}
              type="text"
              value={
                filters.maxMileage
                  ? Number(filters.maxMileage).toLocaleString('en-US')
                  : ''
              }
              onChange={e => {
                const raw = e.target.value.replace(/\D/g, '');
                if (raw === '') {
                  dispatch(setFilter({ maxMileage: null }));
                } else {
                  dispatch(setFilter({ maxMileage: raw }));
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className={css.btnGroup}>
        {(filters.brand ||
          filters.rentalPrice ||
          filters.minMileage ||
          filters.maxMileage) && (
          <button className={css.clearBtn} onClick={handleClearFilters}>
            <Icon
              name="icon-clear"
              width={24}
              height={24}
              stroke="white"
              className={css.icon}
            />
          </button>
        )}

        <Button className={css.searchBtn} onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
