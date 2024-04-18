import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';

const BackToListButton = () => {
  return (
    <Styled.BackToListBtnContainer>
      <TextButton size="lg">목록으로 돌아가기</TextButton>
    </Styled.BackToListBtnContainer>
  );
};

export default BackToListButton;
