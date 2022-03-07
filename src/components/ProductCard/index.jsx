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
      <Container align-items="center">
        <ProductName>{data.name}</ProductName>
        <Tag>{data.category}</Tag>
      </Container>
      <ActionsWrapper>
        <div>
          <Link>Mais detalhes</Link>
        </div>
        <div>
          <Link>Editar</Link>
          <Link style={{ marginLeft: '10px', color: '#CA3131' }}>Apagar</Link>
        </div>
      </ActionsWrapper>
    </ProductContainer>
  );
};

export default ProductCard;
