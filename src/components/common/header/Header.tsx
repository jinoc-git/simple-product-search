import React from 'react';
import * as Styled from './style';
import { useSearchStoreActions } from '../../../store/searchStore';
import { useNavigate } from 'react-router-dom';
import { useProductStoreActions } from '../../../store/productStore';

const Header = () => {
  const { resetSearch } = useSearchStoreActions();
  const { resetProducts } = useProductStoreActions();
  const navigate = useNavigate();

  const onClickLogo = () => {
    resetSearch();
    resetProducts();
    navigate('/');
  };

  return (
    <Styled.Header>
      <Styled.Logo onClick={onClickLogo}>Simple-Product</Styled.Logo>
    </Styled.Header>
  );
};

export default Header;
