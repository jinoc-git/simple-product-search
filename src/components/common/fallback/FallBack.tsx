import React from 'react';
import * as Styled from './style';
import Loading from '../../../assets/icon/Loading';

const FallBack = () => {
  return (
    <Styled.FallBackContainer>
      <Loading />
    </Styled.FallBackContainer>
  );
};

export default FallBack;
