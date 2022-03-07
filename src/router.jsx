import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Dashboard } from './pages';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
