import React from 'react';
import * as Styled from './style';
import TextButton from '../../common/buttons/textButton/TextButton';
import { useNavigate } from 'react-router-dom';

const BackToListButton = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <Styled.BackToListBtnContainer>
      <h2>목록으로 돌아가기 버튼</h2>
      <TextButton size="lg" onClick={onClickBtn}>
        목록으로 돌아가기
      </TextButton>
    </Styled.BackToListBtnContainer>
  );
};

export default BackToListButton;
