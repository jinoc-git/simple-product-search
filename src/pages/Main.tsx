import React from 'react';
import RootLayout from '../components/common/layouts/rootLayout/RootLayout';
import SearchBar from '../components/main/searchBar/SearchBar';
import ProductList from '../components/main/productList/ProductList';
import MoreButton from '../components/main/moreButton/MoreButton';

const Main = () => {
  return (
    <RootLayout>
      <SearchBar />
      <ProductList />
      <MoreButton />
    </RootLayout>
  );
};

export default Main;
