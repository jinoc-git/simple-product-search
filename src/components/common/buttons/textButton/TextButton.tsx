import React from 'react';
import * as Styled from './style';

interface Props {
  children: string;
}

const TextButton = (props: Props) => {
  const { children } = props;

  return <Styled.TextBtn>{children}</Styled.TextBtn>;
};

export default TextButton;
