import React from 'react';
import Header from '../components/Dashboard/Header';
import { Table, SpeedDial } from '../components/Dashboard';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Table />
      <SpeedDial />
    </>
  );
};

export default Dashboard;
