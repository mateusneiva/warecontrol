import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Dashboard } from '@/pages';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={Auth} restricted={true} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
