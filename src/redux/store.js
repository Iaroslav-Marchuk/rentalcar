import { configureStore } from '@reduxjs/toolkit';

import catalogReducer from './slice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
