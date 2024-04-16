import React from 'react';
import * as Styled from './style';

interface Props {
  children: React.ReactNode;
}

const ProductListLayout = ({ children }: Props) => {
  return <Styled.ProductListLayout>{children}</Styled.ProductListLayout>;
};

export default ProductListLayout;
