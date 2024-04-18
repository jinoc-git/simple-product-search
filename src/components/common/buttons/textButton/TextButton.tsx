import React from 'react';
import * as Styled from './style';

export interface TextButtonProps extends Styled.TextBtnStyleProps {
  children: string;
}

const TextButton = (props: TextButtonProps) => {
  const { children, ...rest } = props;

  return <Styled.TextBtn {...rest}>{children}</Styled.TextBtn>;
};

export default TextButton;
