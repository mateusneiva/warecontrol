import React from 'react';
import { ProductsContainer, Title, List } from './styles';
import ProductCard from '../ProductCard';
import API from '../../services/API.json';

const ProductsList = () => {
  const [products, setProducts] = React.useState(API.products);

  return (
    <ProductsContainer>
      <Title>Produtos</Title>
      <List>
        {products.map((product) => {
          return <ProductCard data={product} />;
        })}
      </List>
    </ProductsContainer>
  );
};

export default ProductsList;
