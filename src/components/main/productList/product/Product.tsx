import React from 'react';
import * as Styled from './style';

interface Props {
  onClick: (id: number) => void;
  id: number;
  brand: string;
  thumbnail: string;
  title: string;
  price: number;
}

const Product = (props: Props) => {
  const { onClick, id, brand, thumbnail, title, price } = props;

  return (
    <Styled.ProductContainer onClick={() => onClick(id)}>
      <Styled.ProductThumbnail src={thumbnail} alt={title} />
      <Styled.ProductInnerWrapper>
        <Styled.ProductBrand>{brand}</Styled.ProductBrand>
        <Styled.VerticalLine />
        <Styled.ProductTitle>{title}</Styled.ProductTitle>
      </Styled.ProductInnerWrapper>
      <Styled.ProductPrice>{price}$</Styled.ProductPrice>
    </Styled.ProductContainer>
  );
};

export default Product;
