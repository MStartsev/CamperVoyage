import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Header from 'components/Header/Header';

import Reviews from 'components/Modal/Reviews/Reviews';
import Features from 'components/Modal/Features/Features';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favorites = lazy(() => import('pages/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="features" element={<Features />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
