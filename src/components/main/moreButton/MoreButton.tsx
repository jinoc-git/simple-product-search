import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';
import { useProductStoreState } from '../../../store/productStore';

const MoreButton = () => {
  const state = useProductStoreState();
  console.log(state);

  return (
    <Styled.MoreBtnContainer>
      {state.hasMore && <TextButton>더보기</TextButton>}
    </Styled.MoreBtnContainer>
  );
};

export default MoreButton;
