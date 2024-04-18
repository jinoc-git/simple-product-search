import React from 'react';
import * as Styled from './style';

export interface TextButtonProps extends Styled.TextBtnStyleProps {
  children: string;
}

const TextButton = (props: TextButtonProps) => {
  const { children } = props;

  return <Styled.TextBtn>{children}</Styled.TextBtn>;
};

export default TextButton;
