import React, { useEffect } from 'react';
import { fetchInitProductList } from '../../../api/product';
import { useProductStoreActions, useProductStoreState } from '../../../store/productStore';
import { ProductListLayout } from '../../common/layouts/producListtLayout/style';
import Product from './product/Product';
import { useNavigate } from 'react-router-dom';

interface Props {}

const ProductList = (props: Props) => {
  const { products } = useProductStoreState();
  const { initProducts } = useProductStoreActions();

  const navigate = useNavigate();

  const onClickProduct = (id: number) => {
    navigate(`/productDetail/${id}`);
  };

  console.log(products);

  useEffect(() => {
    const initProductList = async () => {
      const res = await fetchInitProductList();

      initProducts(res);
    };

    initProductList();
  }, []);

  return (
    <ProductListLayout>
      <h2>상품 리스트</h2>
      {products.map(({ id, brand, thumbnail, title, price }) => {
        return (
          <Product
            key={id}
            onClick={onClickProduct}
            id={id}
            brand={brand}
            thumbnail={thumbnail}
            title={title}
            price={price}
          />
        );
      })}
    </ProductListLayout>
  );
};

export default ProductList;
