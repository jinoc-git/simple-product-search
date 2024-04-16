import React from 'react';
import * as Styled from './style';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return <Styled.RootLayout>{children}</Styled.RootLayout>;
};

export default RootLayout;
