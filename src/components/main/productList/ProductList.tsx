import React, { useEffect } from 'react';
import { getAllProduct } from '../../../api/product';
import { productStore } from '../../../store/productStore';

const ProductList = () => {
  const { productList, setProductList } = productStore();

  console.log(productList);

  useEffect(() => {
    const initProduct = async () => {
      const res = await getAllProduct();

      setProductList(res.products);
    };

    initProduct();
  }, []);

  return (
    <div>
      <div>ProductList</div>
    </div>
  );
};

export default ProductList;
