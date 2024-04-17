import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import ProductDetail from '../pages/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
