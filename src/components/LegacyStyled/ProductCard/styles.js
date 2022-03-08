import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 329px;
  min-height: 50px;
  border: 1px #c4c4c4 solid;
  padding: 15px;
  border-radius: 3px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: ${(props) => (props.color ? props.color : '#3b7ae6')};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  padding: 5px;
  padding-inline: 10px;
  margin-right: 10px;
  text-transform: uppercase;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Link = styled.button`
  font-size: 15px;
  font-weight: 500;
  border: none;
  background: transparent;
  color: #303030;
`;
