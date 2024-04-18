import React from 'react';
import * as Styled from './style';

const ProductInfo = () => {
  return (
    <Styled.ProductInfoContainer>
      <Styled.ProductInfoTable>
        <Styled.TableRow>
          <Styled.TableHeader>판매처</Styled.TableHeader>
          <Styled.TableData>dd</Styled.TableData>
        </Styled.TableRow>
        <Styled.TableRow>
          <Styled.TableHeader>상품 명</Styled.TableHeader>
          <Styled.TableData>dd</Styled.TableData>
        </Styled.TableRow>
        <Styled.TableRow>
          <Styled.TableHeader>가격</Styled.TableHeader>
          <Styled.TableData>dd</Styled.TableData>
        </Styled.TableRow>
        <Styled.TableRow>
          <Styled.TableHeader>상품 설명</Styled.TableHeader>
          <Styled.TableData>ddddd</Styled.TableData>
        </Styled.TableRow>
      </Styled.ProductInfoTable>
    </Styled.ProductInfoContainer>
  );
};

export default ProductInfo;
