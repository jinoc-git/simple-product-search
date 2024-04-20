import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';
import { useProductStoreActions, useProductStoreState } from '../../../store/productStore';
import { useSearchStoreState } from '../../../store/searchStore';
import { fetchMoreInitProductList, fetchProductListByKeyWord } from '../../../api/product';

const MoreButton = () => {
  const state = useProductStoreState();
  const { setMoreProducts } = useProductStoreActions();
  const { keyWord, isSearched } = useSearchStoreState();
  console.log(state);

  const onClickMoreBtn = async () => {
    if (isSearched) {
      const res = await fetchProductListByKeyWord(keyWord, state.skip);

      setMoreProducts(res);
    } else {
      const res = await fetchMoreInitProductList(state.skip);

      setMoreProducts(res);
    }
  };

  return (
    <Styled.MoreBtnContainer>
      {state.hasMore && <TextButton onClick={onClickMoreBtn}>더보기</TextButton>}
    </Styled.MoreBtnContainer>
  );
};

export default MoreButton;
