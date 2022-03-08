import React from 'react';
import {
  ProductContainer,
  ProductName,
  Tag,
  ActionsWrapper,
  Link,
} from './styles';
import { Container } from '../Shared';

const ProductCard = ({ data }) => {
  return (
    <ProductContainer>
      <ProductName>{data.name}</ProductName>
      <Container align-items="center">
        <Tag>{data.category}</Tag>
        <Tag color="orange">Status</Tag>
      </Container>
    </ProductContainer>
  );
};

export default ProductCard;
