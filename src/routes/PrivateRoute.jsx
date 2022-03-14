import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/User';

const PrivateRoute = ({ component: RouteComponent }) => {
  const user = useSelector(selectUser);

  if (user.isLogged) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
