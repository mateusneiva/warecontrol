import React from 'react';
import {
  ProductContainer,
  ProductName,
  Tag,
  ActionsWrapper,
  Link,
} from './styles';
import { Container } from '../Shared';

const ProductCard = () => {
  return (
    <ProductContainer>
      <Container align-items="center">
        <ProductName>Produto 1</ProductName>
        <Tag>Categoria</Tag>
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
