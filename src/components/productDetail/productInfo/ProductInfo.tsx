import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { fetchProductById } from '../../../api/product';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../../types/aboutProduct';
import ProductImageCarousel from './productImageCarousel/ProductImageCarousel';

const ProductInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>();

  console.log(product);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const res = await fetchProductById(id);
        setProduct(res);
      }
    };

    getProduct();
  }, []);

  return (
    <Styled.ProductInfoContainer>
      <h2>상품 상세 정보</h2>
      {product && <ProductImageCarousel images={product.images} />}

      <Styled.ProductInfoTable>
        <tbody>
          <Styled.TableRow>
            <Styled.TableHeader>판매처</Styled.TableHeader>
            <Styled.TableData>{product?.brand}</Styled.TableData>
          </Styled.TableRow>
          <Styled.TableRow>
            <Styled.TableHeader>상품 명</Styled.TableHeader>
            <Styled.TableData>{product?.title}</Styled.TableData>
          </Styled.TableRow>
          <Styled.TableRow>
            <Styled.TableHeader>가격</Styled.TableHeader>
            <Styled.TableData>{product?.price}$</Styled.TableData>
          </Styled.TableRow>
          <Styled.TableRow>
            <Styled.TableHeader>상품 설명</Styled.TableHeader>
            <Styled.TableData>{product?.description}</Styled.TableData>
          </Styled.TableRow>
        </tbody>
      </Styled.ProductInfoTable>
    </Styled.ProductInfoContainer>
  );
};

export default ProductInfo;
