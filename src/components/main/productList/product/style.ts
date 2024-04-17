import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 10px;
  border: 1px solid #c1c1c1;
  border-radius: 20px;
  cursor: pointer;
`;

export const ProductThumbnail = styled.img`
  width: 200px;
  height: 150px;
  object-fit: contain;
`;

export const ProductInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const VerticalLine = styled.span`
  width: 1px;
  height: 100%;
  background-color: #dcdcdc;
`;

export const ProductBrand = styled.p`
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductTitle = styled.h4`
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductPrice = styled.p`
  /* width: 100%; */
`;
