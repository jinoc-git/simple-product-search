import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Product from '../pages/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
