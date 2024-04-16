import React, { useEffect } from 'react';
import RootLayout from '../components/common/layouts/rootLayout/RootLayout';
import { getAllProduct } from '../api/product';

const Main = () => {
  useEffect(() => {
    getAllProduct();
  }, []);
  return <RootLayout>Main</RootLayout>;
};

export default Main;
