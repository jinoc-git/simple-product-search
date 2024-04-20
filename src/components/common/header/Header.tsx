import React from 'react';
import * as Styled from './style';
import { useSearchStoreActions } from '../../../store/searchStore';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { resetSearch } = useSearchStoreActions();
  const navigate = useNavigate();

  const onClickLogo = () => {
    resetSearch();
    navigate('/');
  };

  return (
    <Styled.Header>
      <Styled.Logo onClick={onClickLogo}>Simple-Product</Styled.Logo>
    </Styled.Header>
  );
};

export default Header;
