import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';

const MoreButton = () => {
  return (
    <Styled.MoreBtnContainer>
      <TextButton>더보기</TextButton>
    </Styled.MoreBtnContainer>
  );
};

export default MoreButton;
