import React from 'react';
import RootLayout from '../components/common/layouts/rootLayout/RootLayout';
import BackToListButton from '../components/productDetail/backToListButton/BackToListButton';
import ProductInfo from '../components/productDetail/productInfo/ProductInfo';

const ProductDetail = () => {
  return (
    <RootLayout>
      <BackToListButton />
      <ProductInfo />
    </RootLayout>
  );
};

export default ProductDetail;
