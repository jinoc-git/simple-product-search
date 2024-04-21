import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';
import { useProductStoreActions, useProductStoreState } from '../../../store/productStore';
import { useSearchStoreState } from '../../../store/searchStore';
import { fetchMoreInitProductList, fetchProductListByKeyWord } from '../../../api/product';

const MoreButton = () => {
  const { skip, hasMore } = useProductStoreState();
  const { setMoreProducts } = useProductStoreActions();
  const { keyWord, isSearched } = useSearchStoreState();

  const onClickMoreBtn = async () => {
    if (isSearched) {
      const res = await fetchProductListByKeyWord(keyWord, skip);

      setMoreProducts(res);
    } else {
      const res = await fetchMoreInitProductList(skip);

      setMoreProducts(res);
    }
  };

  return (
    <Styled.MoreBtnContainer>
      {hasMore && (
        <TextButton type="button" onClick={onClickMoreBtn}>
          더보기
        </TextButton>
      )}
    </Styled.MoreBtnContainer>
  );
};

export default MoreButton;
