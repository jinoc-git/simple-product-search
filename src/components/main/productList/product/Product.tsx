import React from 'react';
import * as Styled from './style';

interface Props {
  id: number;
  brand: string;
  thumbnail: string;
  title: string;
  price: number;
}

const Product = (props: Props) => {
  const { id, brand, thumbnail, title, price } = props;

  return (
    <Styled.ProductContainer>
      <div>Product</div>
    </Styled.ProductContainer>
  );
};

export default Product;
