import React, { useEffect } from 'react';
import { getInitProductList } from '../../../api/product';
import { productStore } from '../../../store/productStore';
import { ProductListLayout } from '../../common/layouts/producListtLayout/style';
import Product from './product/Product';

interface Props {}

const ProductList = (props: Props) => {
  const { productList, initProduct } = productStore();

  console.log(productList);

  useEffect(() => {
    const initProductList = async () => {
      const res = await getInitProductList();

      initProduct(res.products);
    };

    initProductList();
  }, []);

  return (
    <ProductListLayout>
      <h2>상품 리스트</h2>
      {productList.map(({ id, brand, thumbnail, title, price }) => {
        return (
          <Product
            key={id}
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
