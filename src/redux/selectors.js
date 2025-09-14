export const selectCatalog = state => state.catalog.cars;
export const selectCurrentCar = state => state.catalog.currentCar;
export const selectFavorites = state => state.catalog.favorites;
export const selectFilters = state => state.catalog.filters;
export const selectBrands = state => state.catalog.brands;

export const selectTotalCars = state => state.catalog.totalCars;
export const selectTotalPages = state => state.catalog.totalPages;
export const selectCurrentPage = state => state.catalog.currentPage;

export const selectIsLoading = state => state.catalog.isLoading;
export const selectIsError = state => state.catalog.error;
