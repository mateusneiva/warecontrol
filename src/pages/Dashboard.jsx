import React from 'react';
import Header from '@/components/Header';
import Table from '@/components/Dashboard/Table';
import SpeedDial from '@/components/Dashboard/SpeedDial';

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
