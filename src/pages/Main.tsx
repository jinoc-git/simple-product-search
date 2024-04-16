import React from 'react';
import RootLayout from '../components/common/layouts/rootLayout/RootLayout';
import SearchBar from '../components/main/searchBar/SearchBar';
import ProductList from '../components/main/productList/ProductList';

const Main = () => {
  return (
    <RootLayout>
      <SearchBar />
      <ProductList />
    </RootLayout>
  );
};

export default Main;
