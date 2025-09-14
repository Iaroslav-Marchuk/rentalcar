import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store.js';

import App from '../src/components/App/App.jsx';

import 'modern-normalize';

import '../src/styles/styles.css';
import Loader from './components/Loader/Loader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Loader loadingState={true} />}
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
