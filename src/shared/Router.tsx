import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Main = lazy(async () => await import('../pages/Main'));
const ProductDetail = lazy(async () => await import('../pages/ProductDetail'));
const FallBack = lazy(async () => await import('../components/common/fallback/FallBack'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBack />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
