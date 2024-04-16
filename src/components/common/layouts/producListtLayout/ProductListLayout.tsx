import React from 'react';
import * as Styled from './style';

interface Props {
  children: React.ReactNode;
}

const ProductListLayout = ({ children }: Props) => {
  return (
    <Styled.ProductListLayout>
      <h2>상품 리스트</h2>
      {children}
    </Styled.ProductListLayout>
  );
};

export default ProductListLayout;
