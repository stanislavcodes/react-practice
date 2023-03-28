import React from 'react';
import { Product } from './Product';

export const ProductsList = (props) => {
  const { products } = props;

  return (
    <tbody>
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </tbody>
  );
};
