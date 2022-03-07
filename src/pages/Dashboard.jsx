import React from 'react';
import { Container } from '../components/Shared';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import ProductsList from '../components/ProductsList';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container justifyContent="center" style={{ marginTop: '80px' }}>
        <RegisterForm />
        <ProductsList />
      </Container>
    </>
  );
};

export default Dashboard;
