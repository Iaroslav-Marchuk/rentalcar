import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Modal from 'react-modal';

import { store, persistor } from './redux/store.js';

import App from '../src/components/App/App.jsx';
import Loader from './components/Loader/Loader.jsx';

import 'modern-normalize';

import '../src/styles/styles.css';

Modal.setAppElement('#root');

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
