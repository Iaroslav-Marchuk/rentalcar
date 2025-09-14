import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from '../Layout/Layout.jsx';
import Loader from '../Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx')
);
const DetailsPage = lazy(() =>
  import('../../pages/DetailsPage/DetailsPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<Loader loadingState={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<DetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
