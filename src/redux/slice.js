import { createSlice } from '@reduxjs/toolkit';
import { getAllBrands, getAllCars, getCarById } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'catalog',
  initialState: {
    cars: [],
    currentCar: null,
    favorites: [],
    filters: {
      brand: null,
      rentalPrice: null,
      minKm: null,
      maxKm: null,
    },
    brands: [],
    totalCars: 0,
    totalPages: 1,
    currentPage: 1,
    isLoading: false,
    error: null,
  },

  reducers: {
    clearCurrentItem: state => {
      state.currentCar = null;
    },

    clearSearchParams: state => {
      state.cars = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.totalCars = 0;
    },

    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fav => fav !== id);
      } else {
        state.favorites.push(id);
      }
    },

    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    clearFilters: state => {
      state.filters = {
        brand: null,
        rentalPrice: null,
        minMileage: null,
        maxMileage: null,
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { cars, page, totalPages, totalCars } = action.payload;
        const pageNumber = Number(page);
        if (pageNumber === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }

        state.currentPage = pageNumber;
        state.totalPages = totalPages;
        state.totalCars = totalCars;
      })
      .addCase(getAllCars.rejected, handleRejected)

      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCar = action.payload;
      })
      .addCase(getCarById.rejected, handleRejected)

      .addCase(getAllBrands.pending, handlePending)
      .addCase(getAllBrands.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.brands = actions.payload;
      })
      .addCase(getAllBrands.rejected, handleRejected);
  },
});

export const {
  clearCurrentItem,
  clearSearchParams,
  toggleFavorite,
  setFilter,
  clearFilters,
} = slice.actions;

export default slice.reducer;
