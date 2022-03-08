import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
`;

export default StyledContainer;
