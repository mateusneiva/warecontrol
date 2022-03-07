import React from 'react';
import { Form, Title, CategorySelect, Option } from './styles';
import { Button, Input, Container } from '../Shared';

const RegisterForm = () => {
  return (
    <Form>
      <Title>Registrar</Title>
      <Input type="text" placeholder="Nome do Produto" />
      <Container>
        <CategorySelect>
          <Option>Selecione a Categoria</Option>
          <Option>Categoria 1</Option>
          <Option>Categoria 2</Option>
        </CategorySelect>
        <Input type="date" />
      </Container>
      <Input type="text" placeholder="Observações" />
      <Button type="submit">Registrar</Button>
    </Form>
  );
};

export default RegisterForm;
