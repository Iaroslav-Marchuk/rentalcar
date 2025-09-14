import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogReducer from './slice';

const persistedCatalogReducer = persistReducer(
  {
    key: 'catalog',
    storage,
    whitelist: ['favorites', 'filters'],
  },
  catalogReducer
);

export const store = configureStore({
  reducer: {
    catalog: persistedCatalogReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
