import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 290px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 329px 329px;
  gap: 10px;
  overflow-y: scroll;
  max-height: 500px;
`;

export const Title = styled.h3`
  font-size: 33px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
`;
