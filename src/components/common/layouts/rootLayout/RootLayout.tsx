import React from 'react';
import * as Styled from './style';
import Header from '../../header/Header';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Styled.RootLayout>{children}</Styled.RootLayout>
    </>
  );
};

export default RootLayout;
