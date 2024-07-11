import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice';
import ProductItem from '../../components/ProductItem';

const Products = () => {
  const products = useSelector(selectAllProducts);

  return (
    <div className="products">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
