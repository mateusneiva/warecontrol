import React from 'react';
import { FormContainer, Form, Title } from './styles';
import { Button, Input } from '../Shared';

const LoginForm = () => {
  return (
    <FormContainer>
      <Form>
        <Title>Login</Title>
        <Input type="email" placeholder="Nome de Usuário ou Email" />
        <Input type="password" placeholder="Digite a sua Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
